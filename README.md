# Notes App

This is a single page frontend built using React/Redux and served from a Node/Express server. Data persists in a json file found in server/db.json.

## Running the app

- clone and cd into repo.
- npm run install:all - This will install both client and server dependencies.
- npm run start - This will build the client and start the node server on port 3001.
- Navigate to http://localhost:3001/ in the browser.

## Testing

- cd into client and run npm test

## Features

- View list of notes.
- View single note by clicking on the note text or putting the note id in the url (http://localhost:3001/3d715990-faa4-11e9-91eb-8f5375aad451). Sample note ids can be found in the default db notes in server/db.json.
- Add new notes.
- Edit existing notes.
- Input validation. When adding a note it will not accept non-printable characters. The submit button will also be disabled if there is nothing to submit.
- Jest snapshot testing of react components

## Tech Highlights

- The frontend client is a SPA built in React with a Redux store. It is made up of functional components using hooks. Memoization techniques are used to prevent unnecessary renders. Custom hooks are used to make http requests and update the redux store instead of thunks.
- Material-UI is used for quick and easy front end react components and all styling is done using material-ui's useStyles hook which uses JSS at its core.
- The server is built in Node/Express and data persists in a json file using lowDB.