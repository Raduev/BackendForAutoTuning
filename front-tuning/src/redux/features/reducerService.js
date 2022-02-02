const initialState = {
  service: [],
  loading: false
};

export const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'service/load/fulfilled':  
    return{
        ...state,
        service: action.payload,
        loading: false
      };
      case 'service/load/pending':
          return{
              ...state,
              loading: true
          }
          default:
              return state
  }
};

export const loadService = () => {
  return async (dispatch) => {
    dispatch({ type: "service/load/pending" });
    try {
      let resp = await fetch("/services");
      let data = await resp.json();
      dispatch({ type: "service/load/fulfilled", payload: data });
    } catch (e) {
      console.log(e.message);
    }
  };
};
