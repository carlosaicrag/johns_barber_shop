require 'rails_helper'

RSpec.describe Api::ClientHaircutsController, type: :controller do 
  let!(:barber) { Barber.create({ fname: "Joe", lname: "yaboi",email: 'bananaCakes@gmail.com', password: 'starwars'}) }
  let!(:barber_cutting_hair) {Barber.create({ fname: "Armando", lname: "Mendoza",email: 'weDaBest@gmail.com', password: 'starwars'})}
  let!(:client) {Client.create(email: "John@gmail.com", fname: "John", lname: "Doe", password: "password")}
  let!(:client_not_in_queue) {Client.create(email: "Jane@gmail.com", fname: "Jane", lname: "Doe", password: "password")}
  let!(:haircut) {Haircut.create(haircut_name:"Afro-Fade", path:"./Afro-Fade-Haircut.jpg")}
  let!(:client_haircut) {ClientHaircut.create({barber_id: barber.id, client_id: client.id, haircut_id: haircut.id, closed_at: nil, started_haircut_time: DateTime.now.ago(3600)})}
  let!(:client_haircut_time) {ClientHaircutTime.create({barber_id: barber.id, client_id: client.id, haircut_id: haircut.id, avg_time: 45})}

  describe "GET queue" do 
    context "When a barber is not signed in" do 
      it "should render error saying 'No Barber is signed in'" do 
        get :queue, format: :json
        expect(JSON(response.body)[0]).to eq("No Barber is signed in")
      end
    end
    
    context "When a barber is signed in" do 
      it "renders a level 200 status" do 
        allow(controller).to receive(:current_barber) {barber}
        expect(response.status).to eq(200)
      end
    end
  end

  describe "POST create" do 
    context "When client_haircut and client_haircut_avg_time is successfully created but client is in a queue already" do 
      it "renders a level 402 status and message 'You are already in a barbers queue'" do 
        allow(controller).to receive(:current_client_user) {client}
        post :create, params: {client_haircut: {haircut_id: client_haircut.id, barber_id: client_haircut.barber_id}}, format: :json
        expect(response.status).to eq(402)
        expect(JSON(response.body)[0]).to eq("You are already in a barbers queue")
      end
    end

    context "When client_haircut and client_haircut_avg_time is successfully created and client is not in a queue" do 
      it "renders a level 200 status" do 
        allow(controller).to receive(:current_client_user) {client_not_in_queue}
        post :create, params: {client_haircut: {haircut_id: client_haircut.haircut_id, barber_id: client_haircut.barber_id}}, format: :json
        expect(response.status).to eq(200)
      end
    end

    context "When client_haircut or client_haircut_avg_time don't successfully save" do 
      it "renders a level 400 status when client_haircut does not properly save" do 
        allow(controller).to receive(:current_client_user) {client_not_in_queue}
        #sends wrong info to backend
        post :create, params: {client_haircut: {haircut_id: client_haircut.id, barber_id: client_haircut.barber_id}}, format: :json
        expect(response.status).to eq(402)
      end
    end
  end

  describe "DELETE destroy" do 
    it "deletes a ClientHaircut instance from database" do 
      initial_client_haircut_count = ClientHaircut.all.length
      delete :destroy, params: {id: client_haircut.id}, format: :json
      expect(ClientHaircut.all.length).to eq(initial_client_haircut_count-1)
    end
  end

  describe "PATCH close_client_haircut" do 
    it "Closes a clients haircut after barber is done cutting their hair" do 
      allow(controller).to receive(:current_barber) {barber_cutting_hair}
      patch :close_client_haircut, params: {id: client_haircut.id}, format: :json
      client_haircut_closed = ClientHaircut.find(client_haircut.id)
      expect(client_haircut_closed.closed_at).to_not be(nil)
    end

    it "Updates average of corresponding ClientHaircutTime" do 
      allow(controller).to receive(:current_barber) {barber_cutting_hair}
      prev_avg = client_haircut_time.avg_time
      patch :close_client_haircut, params: {id: client_haircut.id}, format: :json
      updated_client_haircut = ClientHaircut.find(client_haircut.id)
      time_spent_haircut_hours = (updated_client_haircut.started_haircut_time.hour * 60 - updated_client_haircut.closed_at.hour * 60).abs
      time_spent_haircut_mins = (updated_client_haircut.started_haircut_time.min - updated_client_haircut.closed_at.min).abs
      time_spent_avg = ((time_spent_haircut_hours + time_spent_haircut_mins) + prev_avg)/2
      updated_client_haircut_time = ClientHaircutTime.find(client_haircut_time.id)
      expect(updated_client_haircut_time.avg_time).to eq(time_spent_avg)
    end
  end
end
