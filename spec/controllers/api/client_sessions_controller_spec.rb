require 'rails_helper'

RSpec.describe Api::ClientSessionsController, type: :controller do 
  let!(:client) {Client.create(email: "John@gmail.com", fname: "John", lname: "Doe", password: "password")}

  describe "POST create" do 
    context "when the client has valid credentials" do 
      it "should render a level 200 status" do 
        post :create, params: {client: {email: "John@gmail.com", fname: "John", lname: "Doe", password: "password"}}, format: :json
        expect(response.status).to eq(200)
      end

      it "should successfully login client" do 
        post :create, params: {client: {email: "John@gmail.com", fname: "John", lname: "Doe", password: "password"}}, format: :json
        client_success_login = Client.find_by(fname: "John")
        expect(session[:client_session_token]).to eq(client_success_login.session_token)
      end
    end

    context "when the client has invalid credentials" do 
      it "should render a level 422 status and output JSON error message" do 
        post :create, params: {client: {email: "John@gmail.com", fname: "John", lname: "Doe", password: "pass"}}, format: :json
        expect(response.status).to eq(422)
        expect(JSON(response.body)[0]).to eq("Invalid credentials")
      end
    end
  end

  describe "DELETE destroy" do 
    context "when the client is signed" do 
      it "successfully logs out the client" do 
        post :create, params: {client: {email: "John@gmail.com", fname: "John", lname: "Doe", password: "password"}}, format: :json
        delete :destroy
        expect(response.status).to eq(200)
        expect(session[:client_session_token]).to eq(nil)
      end
    end

    context "when the client is not signed in" do 
      it "renders error message the says 'Nobody signed in' and gives 404 level status" do 
        delete :destroy
        expect(response.status).to eq(404)
        expect(JSON(response.body)[0]).to eq("Nobody signed in")
      end
    end
  end
end
