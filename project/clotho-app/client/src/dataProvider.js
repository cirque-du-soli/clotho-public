import jsonServerProvider from "ra-data-json-server";

const serverURL = process.env.REACT_APP_JSON_SERVER_URL;

const dataProvider = jsonServerProvider(serverURL); 

export { dataProvider };