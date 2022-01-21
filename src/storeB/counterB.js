export const INCREMENT_B = 'INCREMENT_B';

export const increment = () => ({
  type: INCREMENT_B,
});

export const defaultState = {
  value: {
    value: 0,
    rest: {
      array: [0],
      string: '0',
      object: { value: { value: 0 } }
    },
  },
};

export const counterB = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_B:
      return {
        ...state,
        value: {
          rest: state.value.rest,
          value: state.value.value + 1,
        },
      }
    default:
      return state;
  }
}