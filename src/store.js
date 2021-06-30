import  { createStore } from "redux";
import rootRed from "./reducer/indexx";

const store = createStore (rootRed, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export default  store;