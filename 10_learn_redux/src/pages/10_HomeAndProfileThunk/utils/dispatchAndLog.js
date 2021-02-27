function outputActionLog(store) {
  const next = store.dispatch;

  function dispatchAndLog(action) {
    console.log("utils dispatching:", action);
    next(action);
    console.log("utils dispatched:", action);
    console.log("新的state:", store.getState());
  }
  // store.dispatch = dispatchAndLog;
  return dispatchAndLog;
}

export default outputActionLog;
