export const contractAddToStore = (state, dispatch) => ({
  address,
  contract
}) =>
  dispatch({
    type: "CONTRACT_INIT_FROM_LIBRARY",
    id: address,
    payload: contract
  });
