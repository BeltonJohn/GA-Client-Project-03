## Project Overview

This was the third project of the GA Software Engineering Immersive course. I was grouped with two colleagues and we quickly decided that a podcast app would be a good product to deliver which hit the brief we had been given. We all had a mutual interest in and were keen listeners of podcasts.

[Enter Site Here](https://podcastsapp.netlify.app/)

### Technologies Used

VS code, NPM, Nodemon, Express, MongoDB, Postman, Git, JavaScript React & associated packages, React Router Dom Github, Google Chrome dev tools, Heroku (deployment), Trello Board (planning and timeline), Excalidraw

### The Process

#### Day 1

After settling ona podcast theme for our project we started by designing wireframes and objectives using excalidraw this helped us have a clear objective for what we wanted to deliver as our minimal viable product and also our stretch goals (time limits permitting). This was oour initial introduction to Trello which was ivaluable for organising, compiling and delegating work

<img src="./wireframe.png" alt="excalidraw" width="700"/>

## Day 2 - 3

Our team decided to finish the backend completly first before starting the frontend. The backend side of the project consisted of building CRUD operators for our Mongo database. I was in charge of organised and dividing up the tasks which included creating the podcasts and comments controllers with all the necessary functionalities. A lot of the code was 'boiler plate' code which made it easy to replicate but nonetheless our team had to navigate platforms and tools we had never used before. Some code that I was proud of was because of how complex it was for me at the time to undertand was the SecureRoute.js file.

    import jwt from 'jsonwebtoken';
    import User from '../models/user.js';
    import { secret } from '../config/environment.js';

    const secureRoute = async (req, res, next) => {
      try {
        const authToken = req.headers.authorization;

        if (!authToken || !authToken.startsWith('Bearer')) {
          return res.status(401).send({ message: 'Unauthorized1' });
        }

        const token = authToken.replace('Bearer ', '');

        jwt.verify(token, secret, async (err, data) => {
          if (err) {
            return res.status(401).send({ message: 'Unauthorized2' });
          }

          const user = await User.findById(data.userId);

          if (!user) {
            return res.status(401).send({ message: 'Unauthorized3' });
          }

          req.currentUser = user;
          next();
        });
      } catch (error) {
        return res.status(401).send({ message: 'Unauthorized4' });
      }
    };

    export default secureRoute;

## Day 4 - 9

We started working on the front end fairly swiftly without having had too many git merge conflicts in the previous days. I was in charge of dividing up the tasks fairly and to each members' strengths. I created the MyPodcasts.js, Navbar.js, NewPodcast.js, SearchByName.js and the EditPodcast.js. During this time we tried to git merge as often as possible to make sure we had as few bugs and conflicts with our app (since the page would completely shut down for one slightly off element). In the final couple of days we had to play catch up with Bulma and styling since we weren't all quite comfortable with Bulma. Communication was a key part of this project as well as offering support to our teammates. Once finished with our project I deployed it using Netlify. One piece of code that I was particularily pleased about was the authentication file where I learnt and developed my understanding of Axios.

    import axios from 'axios';

    export const registerUser = async (user) => {
      const options = {
        method: 'POST',
        url: '/api/register',
        data: user,
      };
      const { data } = await axios.request(options);
      return data;
    };

    export const getUser = async (userId) => {
      const options = {
        method: 'GET',
        url: `/api/user/${userId}`,
        headers: {
          authorization: `Bearer ${window.sessionStorage.getItem('token')}`
        }
      };

      const { data } = await axios.request(options);
      return data;
    };

    export const loginUser = async (credentials) => {
      const options = {
        method: 'POST',
        url: '/api/login',
        data: credentials,
      };

      const { data } = await axios.request(options);
      if (data.token) {
        window.sessionStorage.setItem('token', data.token);
      } else {
        window.sessionStorage.removeItem('token');
      }
      return data.message;
    };

### Reflections & Additional Future Goals

Although I'm happy with what we achieved as a team, I believe we could have implemented even more security regarding th password, by requiring capitalisation plus a combination of words and letters. I also personally wanted to implement pagination or a carousel to improve the user experince. At the moment all of the podcasts appear on one page, so when the number of podcast becomes larger navigation will become more difficult.

Key learnings from this project were the importance of planning and delegating work. This was the first time I had worked with Trello and I found it really helpful to work through the tickets methodically as a team. This was also the second time using GitHub and I feel I gained invaluable experience using something which is a standard in the industry and absolutely necessary when working in teams. This was also a chance for us to cement what we had learnt about backend development specifically secure routes and JWT token authentification, a subject I found conceptually quite difficult to grasp.

![](./podcastdemo.gif)
