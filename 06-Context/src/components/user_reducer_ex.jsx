import { useReducer } from "react";


//Use reducer Concept
const initailState = {
  showTextFlag: false,
  showTextStyleFlag: false,
};

const hideText = "Hide_Text";
const showText = "Show_Text";
const changeStyle = "Change_Style";

function reducer(state, action) {
  switch (action.type) {
    case hideText:  
      return {
        ...state,
        showTextFlag : false
      };
    case showText:
      return {
        ...state,
        showTextFlag : true
      };
    case changeStyle:
        
      return {
        ...state,
        showTextStyleFlag : !state.showTextStyleFlag
      };

    default:
      return state;
  }
}

export default function UseReducerEx() {
  //Create a useReducer state
  const [state, dispatch]= useReducer(reducer, initailState);
 
  console.log(state);

  return (
    <div>
        {
            state?.showTextFlag ? <h2 style={{backgroundColor : state?.showTextStyleFlag ? 'Green' : 'red'}}>Use-Reducer Hook Example</h2> : null
        }

      <button
        onClick={() => {
          dispatch({ type: hideText });
        }}>Hide-Text</button>

      <button 
      onClick={()=> {
        dispatch({type : showText})
      }}>Show-Text</button>

      <button
        onClick={()=> {
        dispatch({type : changeStyle})
      }}>Style-Text</button>
    </div>
  );
}
