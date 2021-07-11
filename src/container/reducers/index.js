const initialState = {
  customers: [],
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        customers: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default rootReducer;
