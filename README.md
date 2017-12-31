# To Do List

https://jamesriall.co.uk/react-to-do-list/

## The Project

Built with React, my to do list allows users to view both outstanding to dos as well as completed to dos, shown in separate lists. To dos can be created, deleted, as well as moved between completed and uncompleted lists. They can  be sorted alphabetically or chronologically (ascending or descending), and the user also has the ability to hide or show the completed to do list at his or her preference. Finally, users can change the colour of the app to a selection of four schemes.

![ScreenShot](http://res.cloudinary.com/jamesriall/image/upload/v1513605314/to-do-image_oaywet.png)

## The Logic

Project is originally created with Facebook's create-react-app, and set up to use Airbnb's ESLint style guide for linting and styling enforcement.

Styling is aided by use of Sass - although React's component-based architecture means that much of Sass's benefits are made redundant, I still prefer giving myself the option of using Sass syntax, mixins, variables etc.

In a similar design pattern to the Drum Kit, I have kept all state isolated to the App.js component and kept the children components and containers as 'dumb' as possible with the required data and action handlers passed down to them as props from App.js.

Interacting with the various elements of the UI (create new to do, delete to do, complete to do or mark to as uncomplete, show completed to dos or changing the background color) have the effect of calling the relevant functions living within the App component which then calls them to modify the state accordingly, pass that state down to the children elements again as props, and re-render the view to the user.

Finally, the project was deplayed through GitHub Pages through a process which is easily repeated with a custom deploy script I added to the package.json file.