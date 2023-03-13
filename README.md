# This is the Cat-face website

![Languages](https://img.shields.io/github/languages/count/alejandrodgz/catface-app)
![Contributors](https://img.shields.io/github/contributors/alejandrodgz/catface-app?style=plastic)
![Licence](https://img.shields.io/github/license/alejandrodgz/catface-app)

This project was bootstrapped with [Create React App]

##how to run this project

the first thing to do is to clone the repository in your local enviroment (git clone https://github.com/alejandrodgz/catface-app.git). \
once you have the this repo cloned you should run `npm install`, this will allow you\
to download all the libraries that you need, (you can see all the information of this libraries in the `package.json` file)
after that, to run this project you just need to run `npm start`

### npm libraries that were used

    reduxjs/toolkit
    axios
    bootstrap
    nanoid
    react-bootstrap
    react-redux
    react-router-dom

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

#Version Español

##Cómo ejecutar este proyecto

Lo primero que debes hacer es clonar el repositorio en tu entorno local (git clone https://github.com/alejandrodgz/catface-app.git).
Una vez que tengas este repositorio clonado, debes ejecutar `npm install`, esto te permitirá descargar todas las bibliotecas que necesitas (puedes ver toda la información de estas bibliotecas en el archivo package.json).
Despues de las instrucciones anteriores para correr el proyecto localmente solo debes ejecutar `npm start`

### librerias adicionales que fueron utilizadas

    reduxjs/toolkit
    axios
    bootstrap
    nanoid
    react-bootstrap
    react-redux
    react-router-dom
    
###Archivos
    
| Archivo  | Directorio  | Descripcion |
| :------ |:--------------| :---------------------|
| `index.js` | src | El componente raíz, este componente es el que se envuelve en el proveedor redux |
| `App.js`  | src  | Este componente se encarga de establecer las diferentes rutas de la aplicación  |
| `store.js` | app   | Objeto que contiene todo el árbol de estado de tu aplicación (React-Redux), el store se creó con createStore |
| `CatsSlice.js` | features/Cats | Contiene el único slice de la aplicación, el estado inicial se creó con createAsyncThunk recuperando datos de la API |
| `CatDb.js` | crud | Este archivo toma varios componentes para crear una lista visible del estado donde puedes eliminar, editar y agregar objetos (crud) |
| `CatShow.js` | catshow |Este componente toma una función para recuperar elementos individuales de la API, muestra desde una URL cada vez que haces clic en un botón |
| `index.html` | public | Es el archivo principal que contiene todos los elementos del DOM|

##Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

###npm start
Ejecuta la aplicación en el modo de desarrollo.
Abre http://localhost:3000 para verla en tu navegador.

La página se recargará automáticamente cuando realices cambios.
También puedes ver cualquier error de lint en la consola.

###npm run build
Compila la aplicación para producción en la carpeta build.
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los

## Author

<a href = 'https://www.github.com'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/github.svg"/></a> [@Alejandro García](https://github.com/alejandrodgz)

<a href = 'https://www.twitter.com'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/twitter.svg"/></a> [@Alejandro García](https://twitter.com/dagarciaz?t=SsP1iYjxXsK7z9nBZxwSvQ&s=08)

<a href = 'https://www.linkedin.com'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"/></a> [@Alejandro García](https://www.linkedin.com/in/daniel-garcia-aa987b233/) 
