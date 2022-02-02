const initialState = {
  user: [],
};

export const profilfeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/load/fulfilled":
      return {
        ...state,
        user: [action.payload],
      };
    default:
      return state;
  }
};

export const userLoad = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      dispatch({ type: "user/load/fulfilled", payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};


