export const logger = (state) => (next) => (action) => {
  console.log(action, state);
  next(action);
};

export const featured = (state) => (next) => (actionInfo) => {
  const feared = [{ name: 'john' }, ...actionInfo.action.payload];
  const actionUpdated = {
    ...actionInfo,
    action: {
      ...actionInfo.action,
      payload: feared,
    },
  };
  next(actionUpdated);
};
