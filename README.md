# About Thinkful-Flashcards
This application allows a user to create their very own deck of flashcards so that they can study effectively. 
A new deck can be created which will in turn allow for new cards to be created. 
Each card has a front side with a question and a back side that will provide the answer. 

## Start the project with NPM 
In the project root directory, you can run:

### `npm install`

then:

### `npm start`

## Start the project using Docker
In the project root directory, you can run:

### ```docker build . -t derrickholleman/flashcards```

then execute the command:

### ```docker run -p 3000:3000 -p 5000:5000 derrickholleman/flashcards```

afterwards visit http://localhost:3000/ to view the project

## Project Goals
This project was created to solidfy knowledge of core React concepts including:
* Managing State
* Passing props into components
* Adhering to single responsibility within components
* Dynamically rendering data
* Managing large projects with many files and moving parts

## Technology and Tools
The project utilizes the following:
* React library for state management and rendering - [ReactJS](https://reactjs.org/)
* Bootstrap 4.5.2 for styling - [Bootstrap 4.5](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
* Bootstrap icons for button icons - [Bootstrap Icons](https://icons.getbootstrap.com)
* JSON Server for local preview - [JSON Server](https://www.npmjs.com/package/json-server)

## Deployment
View on Netlify - [Flashcards](https://flashcards-study-app.netlify.app)

I used [Heroku](https://heroku.com) to host the back-end and [Netlify](https://www.netlify.com) to host the front-end.

## Application Preview

![Application Home](src/images/flashcards-main.png)

![View Deck Contents](src/images/flashcards-view-deck.png)

![Not Found](src/images/flashcards-notFound.png)

Check out the [Backend Repo](https://github.com/derrickholleman/Flashcards-server)
