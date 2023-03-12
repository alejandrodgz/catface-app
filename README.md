# This is the Cat-face website

![Languages](https://img.shields.io/github/languages/count/alejandrodgz/catface-app)
![Contributors](https://img.shields.io/github/contributors/alejandrodgz/catface-app?style=plastic)
![Licence](https://img.shields.io/github/license/alejandrodgz/catface-app)

This project was bootstrapped with [Create React App]

##how to run this project

the first thing to do is to clone the repository in your local enviroment (git clone https://github.com/alejandrodgz/catface-app.git). \
once you have the this repo cloned you should run `npm install`, this will allow you\
to download all the libraries that you need, (you can see all the information of this libraries in the `package.json` file

### npm libraries

    "@reduxjs/toolkit": "^1.9.3",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.3.4",
    "bootstrap": "^5.2.3",
    "nanoid": "^4.0.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.7.2",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.9.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"

### Files

| File  | Directory  | Description |
| :------ |:--------------| :---------------------|
| `index.js` | src | The root Component, this component is the one that is wrap in the redux provider |
| `App.js`  | src  | this component is on charge of establish the different routes of the app   |
| `store.js` | app   | object that holds the entire state tree of your application(react - redux), the store was created with `createStore` |
| `CatsSlice.js` | features/Cats | contains the only slice of the application, the initial state was created with `createAsyncThunk` fetching data from the api |
| `CatDb.js` | crud | this file takes several components to make a visible list of the state where you can delete, edit and add objects(crud) |
| `CatShow.js` | catshow | this component takes a function to fetch individual elements from the api, it shows from a url any time that you click a button |
| `index.html` | public | Is the main file that contains all the elements of the DOM |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
