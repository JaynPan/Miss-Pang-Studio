import React from "react"
import HomeBanner from "../images/white-flowers.jpg"
import WorksBanner from "../images/holding-flower.jpg"
import WorkBanner from "../images/work.jpg"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  isHomePage: true,
  banner: HomeBanner,
}

function reducer(state, action) {
  switch (action.type) {
    case "SWITCH_BANNER": {
      return {
        ...state,
        banner: action.banner,
      }
    }
    case "PAGE_NAME": {
      let banner = ""

      if (action.page === "home") {
        banner = HomeBanner
      } else if (action.page === "works") {
        banner = WorksBanner
      } else if (action.page === "work") {
        banner = WorkBanner
      }

      return {
        ...state,
        banner,
        isHomePage: action.page === "home",
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
