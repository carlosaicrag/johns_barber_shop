# Johns Barber Shop 

* Welcome to Johns Barber Shop repository.  This is non profit project that will help my barber back home in LA with his barbershop business.

# Project Description

<p>
Application that shows users how long it will take them to get a haircut with a certain barber.

Let’s think of a scenario. Someone comes into the shop and wants a haircut.  First of all, the user will have to pick what kind of haircut that they want.  This will be done on the users phone where they will have to login so they can choose what kind of haircut they want. Then they will get to pick which barber that they get to go to. 

There will be two sides to this app, the barber side and the user client side. The barber gets to see who is in their queue.  Barbers will also be able to remove clients once they are done giving them a hair cut.  Users will see approximately how long it will take each barber to be done with their haircut. 
</p>

# MVP List
<ol>  
<li>
Barber User Auth
</li> 
<li>
Page where users are able to pick their type of haircut and the barber they want to give them a haircut.
</li>
<li>
Page where barbers are able to see who is in their queue and are also able to take people off of their queue once they are done with a haircut.
</li> 
<li>
Home page where users see how long it will take to get a haircut for each barber.
</li>

# Workflow
1. git pull master 
2. git checkout -b `<github issue number>-<name of branch>`
3. work on feature 
4. once you are done 
    * checkout the master branch
    * git pull on the master branch
    * checkout YOUR feature branch
    * git merge master 
    * fix merge conflicts 
    * git push
    * do the command that the terminal says to do
    * your branch should now be in the remote repository
5. create a pull request on github 
    ![pull_request1]( ./images/pull_request1.png )
    ![pull_request2]( ./images/pull_request2.png )
    ![pull_request3]( ./images/pull_request3.png )
    * what we're doing here is requesting to pull in our branch into the staging branch.  The base in third picture will always be staging, and what we're comparing is the branch we're requesting to be pulled in.  Once we make sure that the feature is working in staging then we go ahead and merge to master in another pull request. 
# How To Use
* git pull the repository 
* bundle install
* npm install
* rails db:setup
* rails db:migrate
* rails db:seed 
* rails s on a new terminal tab
* npm start on another new terminal tab

* let's make a cool app!