import {GET_USERS} from '../type'
import {GET_DATA} from '../type'
const initialState = {
    Users:[],
    loading:true,
}

export default function(state = initialState, action){

    switch(action.type){
        case GET_USERS:
        return {
            ...state,
            Users:action.payload,
            loading:false
        }
        default: return state
    }
}

const initalState = {
    Data:[],
    loading:true,
}

export  const data =(state = initalState, action)=>{

  switch(action.type){
      case GET_DATA:
      return {
          ...state,
          Data:action.payload,
          loading:false
      }
      default: return state
  }

}