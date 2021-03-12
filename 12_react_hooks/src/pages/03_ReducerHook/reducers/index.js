export function init(initialCount) {
  return { counter: initialCount };
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "addNumber":
      return {
        ...state,
        counter: state.counter + Number(action.payload.number),
      };
    case "reset":
      // return { ...state, ...init(action.payload.counter) };
      return init(action.payload.counter);
    default:
      return state;
  }
};

export default counterReducer;
