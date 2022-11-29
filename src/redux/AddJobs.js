import { NAME,USERNAME} from "./types";

const intialState ={
  name:'',
  username:'',
  mass:[]
}
export const AddJobs= ({name,username}=intialState,action)=>{
  console.log(action)
  switch(action.type){
    case NAME:
      return{
        ...name,
      }
      default:
        return name;
  }
  switch(action.type){
    case USERNAME:
      return{
        ...username,
      }
      default:
        return username;
  }
}