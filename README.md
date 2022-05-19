## Purely Podcast

This was the third project of the GA Software Engineering Immersive course. I was grouped with two colleagues and we quickly decided that a podcast app would be a good product to deliver which hit the brief we had been given. We all had a mutual interest in and were keen listeners of podcasts.

[Enter Site Here](https://podcastsapp.netlify.app/)

![](./podcastdemo.gif)

### Technologies Used

VS code, NPM, Nodemon, Express, MongoDB, Postman, Git, JavaScript React & associated packages, React Router Dom Github, Google Chrome dev tools, Heroku (deployment), Trello Board (planning and timeline), Excalidraw

### The Process

#### Day 1

After settling on a podcast theme for our project we started by designing wireframes and setting out required features using excalidraw this helped us have a clear objective for what we wanted to deliver as our minimal viable product and also our stretch goals (time limits permitting). This was our first introduction to Trello which I found was invaluable for organising, compiling and delegating work.

<img src="./wireframe.png" alt="excalidraw" width="900"/>

#### Day 2 - 3

As a team we decided that we wouldn't start on the frontend before the backend functionality was complete and thoroughly tested. We mob programmed a primitive backend very quickly. Although we used previous work as a reference and a lot of the code being relatively boilerplate, I personally feel like I learned a lot about how the secure route works and how those different components fit together. I helped build and test the CRUD operators for the podcast, comments and user accounts.

#### Day 4 - 9

We quickly moved onto frontend functionality and I built a secure registration and login function with React. I found this quite useful in helping me reinforce my knowledge of the relationships between the frontend and backend and how they 'talk' as well as how Axios promises are used to make HTTP requests. Below is a piece of code which was a bit of a "light-bulb" moment for me.

<img src="./axios.png" alt="axios" width="300"/>

As one of my colleagues had built the functionality to search for podcasts using different parameters I wanted to test how it worked and what the end result would be for the user. Therefore I wrote some seed data to populate the website. I continued to work on aesthetics and styling, thinking about user interaction and user experience. Originally the Create Podcast and Edit Podcast pages had an onChange handler for all the fields including 'genre'. I decided that it probably wouldn't be for the best to have an open ended field with countless possibilities for genres therefore I changed this to a dropdown of pre-selected categories and added a handleChange function.

### Bugs

There are a few bugs relating to the SCSS styling. This includes a background on one of the pages which doesn't fully cover the height of the page and also the width of the dropdown for the Podcast Upload and Podcast Edit pages not being the full width of the I believe this was due to the fact I was using the Bulma framework with React in conjunction with a Sass stylesheet. I believe there may be conflicts between these two things.

### Challenges

A challenge within the code itself, which I personally faced was the secureRoute.js, which ensures that a route is only rendered if the user is authenticated. I had found this quite difficult to grasp in class and when doing the homework in the evenings. There are many components and files that are interconnected making it difficult to comprehend their relationships. Below is an image of the secureRoute.js with JWT token verification.

![](./podcast1.png)

### Wins

What was also a challenge was also a win. I built the secure route in the API and felt a lot more confident with how it worked. I was proud of that as I think it is a concept that’s relatively complex. Below is the User Model of the secure registration and login which uses the Bcrypt library to hash the password. It also uses Mongoose-hidden to hide the password and email when sending the Json data to the client side.

![](./podcast2.png)

### Key Learnings

Key learnings from this project were the importance of planning and delegating work. This was the first time I had worked with Trello and I found it really helpful to work through the tickets methodically as a team. This was also the second time using GitHub and I feel I gained invaluable experience using something which is a standard in the industry and absolutely necessary when working in teams. This was also a chance for us to cement what we had learnt about backend development, specifically secure routes and JWT token authentication, a subject I found conceptually quite difficult to grasp.
Another huge takeaway from this project was the necessity to follow a grammatically correct and logical naming convention for different functions and variables to provide clarity for myself and anyone else who reads the code. As we took the first weekend off from any work on Purely Podcast, we came back to the code with some confusion as to what some variables and functions were actually referring to. In future this is something I will always take into careful consideration.
