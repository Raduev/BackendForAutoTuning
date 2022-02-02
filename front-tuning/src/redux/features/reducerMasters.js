const initialState = {
  masters: [],
  loading: false
};


export const masterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "master/load/fulfilled":
      return {
        ...state,
        masters: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};


export const loadMaster = () => {
  return async (dispatch) => {
    try {
        let res = await fetch("/master")
        let data = await res.json()
      console.log(res)
        dispatch({type: "master/load/fulfilled", payload: data})
    } catch (error) {
        console.log(error.message)
    }
  };
};



