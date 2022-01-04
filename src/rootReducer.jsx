import { combineReducers } from "redux";
import  userReducer, {data} from "../src/Redux/reducer"

export default combineReducers({
    Users: userReducer,
    Data:data
})