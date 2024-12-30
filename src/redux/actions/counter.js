export const increment = (number) => {
  return {
    type: "INCREAMENT",
    payload: number,
  };
};

export const decrement = (number) => {
    return {
      type: "DECREAMENT",
      payload: number,
    };
  };
  