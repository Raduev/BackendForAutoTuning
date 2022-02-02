const initialState = {
  cars: []
}

export const carsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'cars/load/fulfilled':
      return {
        ...state,
        cars: action.payload
      }
    default:
      return state
  }
}

export const loadCars = () => {
  return async (dispatch) => {

    try {
      let allCarsNoJSON = await fetch("/auto");
      let cars = await allCarsNoJSON.json()
      dispatch({type: 'cars/load/fulfilled', payload: cars})
    } catch (e) {
      console.log(e)
    }
  }
}


