const initialState = {
  name: ''
}

export default (state = initialState, {
  type,
  payload
}) => {
  switch (type) {

    case 'CHANGE/NAME':
      return {
        ...state, name: payload
      }

      default:
        return state
  }
}