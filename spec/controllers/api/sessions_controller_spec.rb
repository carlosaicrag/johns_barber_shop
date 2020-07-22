require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  let!(:barber) { Barber.create({ fname: "Joe", lname: "yaboi",email: 'bananaCakes@gmail.com', password: 'starwars'}) }
  describe "POST create" do 
    context "with valid barber credentials" do 
      it "renders a 200 level response" do 
        post :create, params: {barber: {email: "bananaCakes@gmail.com", password: "starwars", barber_shop_password: "a" }}, format: :json
        expect(response.status).to eq(200)
      end

      it "successfully logs in a barber" do 
        post :create, params: {barber: {email: "bananaCakes@gmail.com", password: "starwars", barber_shop_password: "a" }}, format: :json
        barber_success_login = Barber.find_by(fname: "Joe")
        expect(session[:barber_session_token]).to eq(barber_success_login.session_token)
      end
    end
    
    context "with invalid barber shop credentials" do 
      it "renders a 400 level response and incorrect barber shop password message" do 
        post :create, params: {barber: {email: "bananaCakes@gmail.com", password: "starwars", barber_shop_password: "fdsafds" }}, format: :json
        expect(response.status).to eq(422)
        expect(JSON(response.body)[0]).to eq("Incorrect Barber Shop Password")
      end
    end

    context "with invalid barber credentials" do 
      it "renders a 400 level response and invalid credentials message" do  
        post :create, params: {barber: {email: "bananaCakes@gmail.com", password: "star", barber_shop_password: "fdsafds" }}, format: :json
        expect(response.status).to eq(422)
        expect(JSON(response.body)[0]).to eq("Invalid credentials")
      end
    end
  end

  describe "DELETE destroy" do
    context "when someone signs out when they're not signed in" do 
      it "renders an error" do 
        delete :destroy
        expect(response.status).to eq(404)
      end
    end

    context "successfully sign out barber when there is a barber that is signed in" do 
      it "renders a 200 level response" do
        post :create, params: {barber: {email: "bananaCakes@gmail.com", password: "starwars", barber_shop_password: "a" }}, format: :json 
        delete :destroy
        expect(response.status).to eq(200)
      end
    end
  end
end


