const initialStateSign = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: localStorage.getItem("token")
};

export default function application(state = initialStateSign, action) {
  switch (action.type) {
    case "application/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "application/signup/fulfiled":
      return {
        ...state,
        signingUp: false,
        error:null
      };
    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
      case "application/signin/pending":
        return {
          ...state,
          signingIn: true,
          error: null,
        };
      case "application/signin/fulfiled":
        return {
          ...state,
          signingIn: false,
          token: action.payload,
          error: action.error
        };
      case "application/signin/rejected":
        return {
          ...state,
          signingIn: false,
          error: action.error,
        };
      
    default:
      return state;
  }
}

export const createUser = (login, password, firstName, lastName, number) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });

    const responce = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({ login, password, firstName, lastName, number }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await responce.json();

    if (json) {
      dispatch({ type: "application/signup/rejected", payload: json });
    } else {
      dispatch({ type: "application/signup/fulfiled", payload: json });
    }
  };
};

export const auth = (login, password) => {
  return async dispatch => {
    dispatch({ type: "application/signin/pending" });

    const responce = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
        // Authorization: "Bearer" + localStorage.getItem("token")
      },
    });

    const json = await responce.json();
    console.log(json)

    if (responce.status === 401) {
      dispatch({ type: "application/signin/rejected", error: json });
    } else {
      dispatch({ type: "application/signin/fulfiled", payload: json.token, error: json.error });
      localStorage.setItem("token", json.token)
    }
  }
}
