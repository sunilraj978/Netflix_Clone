export const initialState = {
  user: null,
  login:null
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_LOGIN: "SET_LOGIN",
  CLEAR:"CLEAR"
};



const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_LOGIN:
      return{
        ...state,
        login:action.login
      }
      case actionTypes.CLEAR:
        return{
          ...state,
          login:action.login
        }
    default:
      return state;
  }
};

export default reducer;
