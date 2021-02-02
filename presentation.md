### Johns Barber Shop

---

### Agenda

- Technologies
- Background
- Show Images of Website
- Demo out project
- Highlights 
- What I have learned
- The FUTURE

---

### Technologies

- React
- Redux
- Rails
- HTML
- CSS
- AJAX

---

### Main page and Background

![queue_page](https://raw.githubusercontent.com/carlosaicrag/johns_barber_shop/master/images/jbs_main_page.png)

---

### Login Page

![login_page](https://raw.githubusercontent.com/carlosaicrag/johns_barber_shop/master/images/login_page.png)

---

### Clients Profile Page

![jbs_profile](https://raw.githubusercontent.com/carlosaicrag/johns_barber_shop/master/images/jbs_profile.png)

---

### Picking a Haircut

![pick_haircut](https://raw.githubusercontent.com/carlosaicrag/johns_barber_shop/master/images/pick_haircut.png)

---

### Barbers Queue

![barber_queue](https://raw.githubusercontent.com/carlosaicrag/johns_barber_shop/master/images/barber_queue.png)

---

### Demo

---

### Backend

---

### Barbers Table

| id      | password_digest | session_token | email  | fname  | lname  | working | cutting_hair |
| ------- | --------------- | ------------- | ------ | ------ | ------ | ------- | ------------ |
| integer | string          | string        | string | string | string | boolean | boolean      |

---

### Clients Table

| id      | password_digest | session_token | email  | fname  | lname  |
| ------- | --------------- | ------------- | ------ | ------ | ------ |
| integer | string          | string        | string | string | string |

---

### Haircuts Table

| id      | haircut_name | path   |
| ------- | ------------ | ------ |
| integer | string       | string |

---

### ClientHaircuts Table

| id      | client_id | haircut_id | barber_id | closed_at | started_haircut_time |
| ------- | --------- | ---------- | --------- | --------- | -------------------- |
| integer | integer   | integer    | integer   | datetime  | datetime             |

---

### ClientsHaircutsTimes table

| id      | client_id | haircut_id | barber_id | avg_time            |
| ------- | --------- | ---------- | --------- | ------------------- |
| integer | integer   | integer    | integer   | integer default: 45 |

---
![request_response_cycle_rails](https://miro.medium.com/max/1200/1*lFMcocBQ4zF-Q-_SvM8c7Q.jpeg)

---

### Rendering the Main Page Barbers Controller

```ruby

def index
    @barbers = Barber.where(working: true)
    @current_client_user = current_client_user
end

```

---

### Rendering the Main Page api payload

```ruby
json.barbers do
    @barbers.each do |barber|
        json.set! barber.id do
            json.partial! "api/barbers/barber", barber:barber
            json.barberGravitar barber.gravitar
            if barber.cutting_hair
                json.queueTime barber.active_queue_time
                json.avgTime barber.current_client_cutting_hair_avg_time
            else
                json.queueTime barber.wait_time
                json.avgTime 0
            end
            json.totalWaitTime barber.wait_time
        end
    end
end

###
###
###

json.clients do
    if @current_client_user
        if @current_client_user.in_queue?
            json.set! @current_client_user.id do
                json.partial! "api/clients/client", client: @current_client_user
                json.waitTime @current_client_user.wait_time
            end
        end
    end

end
```

---

### Main page

```javascript
function componentDidMount() {
//
//
//
  if (client) {
    this.state["clientWaitTime"] = payload.clients[this.props.client].waitTime
    let clientInterval = setInterval(() => {
        if (this.state["clientWaitTime"] > 0 && this.props.barberCancelingFrom.cutting_hair){
          this.setState({ clientWaitTime: this.state.clientWaitTime - 1 })
        }else{
          clearInterval(clientInterval)
        }
      }, 60000)
  }
  //
  //
  //
  barberIds.forEach((barberId) => {
        let barber = payload.barbers[barberId]
        let timeLimit = barber.totalWaitTime - barber.avgTime
        this.state[barberId] = barber.queueTime
        this.setState({ [barberId]: barber.queueTime })

        let interval = setInterval(() => {
          if (this.state[barberId] != 0 &&  this.state[barberId] > timeLimit) {
            this.setState({ [barberId]: this.state[barberId] - 1 })
          } else {
            clearInterval(interval)
          }
        }, 60000)

        this.barberIntervals.push(interval)
      })
  })
}

```

---

### Visual of Logic Barber's Queue

![compdidMount](https://raw.githubusercontent.com/carlosaicrag/johns_barber_shop/master/images/componentDidMount.png)

---

### Visual of Logic Current Client WaitTime 1

![current_client1](https://raw.githubusercontent.com/carlosaicrag/johns_barber_shop/master/images/current_client_waitTime.png)

---
### Visual of Logic Current Client WaitTime 2

![current_client2](https://raw.githubusercontent.com/carlosaicrag/johns_barber_shop/master/images/current_client_waittime1.png)

---
### Creating a New Clienthaircut Row

```ruby
def create
  @client_haircut = ClientHaircut.new(client_haircut_params)
  @client_haircut.client_id = current_client_user.id
  haircut_id = params[:client_haircut][:haircut_id]
  barber_id = params[:client_haircut][:barber_id]
  @client_haircut_avg_time = ClientHaircutTime.avg_time(current_client_user.id,haircut_id,barber_id,client_haircut_params)

  @client_haircut_avg_time.client_id = current_client_user.id
  if ClientHaircut.client_already_in_a_queue?(current_client_user)
      render json: ["You are already in a barbers queue"], status: 402
  elsif @client_haircut.save and @client_haircut_avg_time.save
      render :show
  else
      render json: @client_haircut.errors.full_messages, status: 402
  end
end
```

---

### Closing a Clienthaircut

```ruby
def close_client_haircut
  @client_haircut = ClientHaircut.find_by(id: params[:id])
  @client_haircut.release_client
  ClientHaircutTime.update_avg(@client_haircut)
  Barber.change_working_status(current_barber)
  @client_haircuts = ClientHaircut.where(barber_id: current_barber.id).where(closed_at: [nil]).order('created_at ASC')
  render :queue
end
```
---

### What I have learned

- Start with mobile first
  - Did not consider mobile at the start and had to redo all of the frontend once I decided I wanted to make it mobile
- Plan out my api endpoints better
  - Make it easier on myself to send and receive information
- Plan out the naming of components better
  - Caused a bit of confusion at times
- Sending organized payloads to make frontend display easier

---

### Looking to the future

- Planning on introducing the project to my barber to help him run his business
- Implementing a feature where parents can add their children to the queue without having to create a profile for the children
- Scaling project to allow different barbershops to sign up and have their business run on the site
- Implementing websockets 

---

### Thank You

## ![funny_gif](https://media0.giphy.com/media/3oKIPf3C7HqqYBVcCk/giphy.gif)
