const initState = {
  diabetes: {},
  Health: [],
  breastCancerPredictions: {},
  heartAttackPredictions: {},
  BreastCancerProgress:false
}

const disesesReducer = (state = initState, action) => {
  switch (action.type) {
    case "DIABETES": return {
      ...state,
      BreastCancerProgress:false,
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
        BreastCancerProgress:false,
        breastCancerPredictions: action.data

      }
      case "HEART_ATTACK":
      return {
        ...state,
        BreastCancerProgress:false,
        heartAttackPredictions: action.data
      }
      case "BREAST_CANCER_Progress":
      return {
        ...state,
        BreastCancerProgress:true

      }

    default: return {
      ...state
    }
  }

}

export default disesesReducer