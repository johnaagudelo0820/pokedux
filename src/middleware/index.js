export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featured = (_state) => (next) => (actionInfo) => {
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
