require 'rails_helper'

RSpec.describe Api::ClientsController, type: :controller do 
  let!(:client) {Client.create(password: "password", email: "luke@gmail.com", fname: "Carlos", lname: "Garcia")}  

  describe "POST create" do 
    it "succesfully saves client to database with valid credentials" do 
      post :create, params: {client: {password: "password", email: "John@gmail.com", fname: "John", lname: "Doe" }}, format: :json
      client = Client.find_by(fname: "John")
      expect(response.status).to eq(200)
      expect(client).to_not be(nil)
    end

    it "renders errors when client has invalid credentials" do 
      post :create, params: {client: {password: "password", email: "John@gmail.com", fname: "John"}}, format: :json
      expect(response.status).to eq(422)
      expect(JSON(response.body)).to_not be_empty
    end
  end

  describe "GET show" do
    context "when the user is found" do 
      it "should render a level 200 status" do 
        get :show, params: {id: client.id}, format: :json
        expect(response.status).to eq(200)
      end
    end

    context "when the user is not found" do 
      it "should render a level 422 status and error message" do 
        get :show, params: {id: -1}, format: :json
        expect(response.status).to eq(422)
        expect(JSON(response.body)[0]).to eq("No client found with that id")
      end
    end
  end
end
