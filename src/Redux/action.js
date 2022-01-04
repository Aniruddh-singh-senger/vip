import {GET_USERS, USERS_ERROR} from '../type'
import {GET_DATA, DATA_ERROR} from '../type'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:3004/test_fliter_options`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}

export const getData = () => async dispatch => {
    
      try{
          const res = await axios.get(`http://localhost:3004/test_units_data`)
          dispatch( {
              type: GET_DATA,
              payload: res.data
          })
      }
      catch(e){
          dispatch( {
              type: DATA_ERROR,
              payload: console.log(e),
          })
      }
  }