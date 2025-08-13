import { handleActions } from "redux-actions";

// state
const initialState = {
  jobs : {
    developer :{
      name : "홍길동",
      skills : ["React.js", "자바"]
    },
    planner :{
      name : "장보고",
      skills : ["Excel"]
    }
  }
}

// font
const jobs = handleActions({
  
}, initialState)

export default jobs;