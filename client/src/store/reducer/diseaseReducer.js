const initState = {
  diabetes: {},
  Health: [],
  breastCancerPredictions: {},
  heartAttack: {}

}

const disesesReducer = (state = initState, action) => {
  switch (action.type) {
    case "DIABETES": return {
      ...state,
      diabetes: action.data
    }
    case "Health":
      return {
        ...state,
        Health: action.data
      }
    case "ClearHealth":
      return {
        ...state,
        Health: []
      }
    case "BREAST_CANCER":
      return {
        ...state,
        breastCancerPredictions: action.data
      }
      case "HEART_ATTACK":
      return {
        ...state,
        heartAttack: action.data
      }

    default: return {
      ...state
    }
  }

}

export default disesesReducer