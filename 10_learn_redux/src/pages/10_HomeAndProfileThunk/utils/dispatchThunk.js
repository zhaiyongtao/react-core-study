function patchThunk(store) {
  const next = store.dispatch;

  function dispatchAndThunk(action) {
    console.log("dispatchAndThunk");
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }
  // store.dispatch = dispatchAndThunk;
  return dispatchAndThunk;
}

export default patchThunk;
