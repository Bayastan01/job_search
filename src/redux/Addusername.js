import { GET_JOBS, USERNAME} from "./types";

const intialState ={
  username:'',
  jobs: [],
}
export const Addusername= (state=intialState,action)=>{
  console.log(state, action);
  switch(action.type){
    case USERNAME:
      return{
        ...state,
      }
      case GET_JOBS:
      return{
        ...state,
        jobs: action.payload
      }
      default:
        return state;
  }
}

export const getJobs = (res) => ({type: GET_JOBS, payload: res})