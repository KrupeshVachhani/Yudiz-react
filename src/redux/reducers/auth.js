import { USERS } from "../../constants";

const initialState = {
  user: null,
  isAuthenticated: false,
  role: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const lowercaseUsername = action.payload.toLowerCase().trim();
      const role = USERS[lowercaseUsername];

      return {
        user: lowercaseUsername,
        isAuthenticated: role === "admin",
        role: role,
      };

    case "LOGOUT":
      return {
        ...initialState, // Reset state to initial values
      };

    default:
      return state;
  }
};

export default authReducer;
