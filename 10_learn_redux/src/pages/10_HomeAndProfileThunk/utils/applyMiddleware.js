const applyMiddleware = (store, middlewares) => {
  middlewares = middlewares.slice();
  middlewares.forEach((middleware) => {
    store.dispatch = middleware(store);
  });
};

export default applyMiddleware;
