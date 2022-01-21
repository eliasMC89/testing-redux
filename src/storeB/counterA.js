export const INCREMENT_A = 'INCREMENT_A';

export const increment = () => ({
  type: INCREMENT_A,
});

export const defaultState = {
  value: {
    value: {
      value: 0,
      array: [0],
      string: '0',
      object: { value: { value: 0 } }
    },
  },
};

export const counterA = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_A:
      return {
        ...state,
        value: {
          value: {
            ...state.value.value,
            value: state.value.value.value + 1,
          },
        },
      }
    default:
      return state;
  }
}