import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

const getInitialState = () => {
  try {
    const data = localStorage.getItem("data");
    return data
      ? JSON.parse(data)
      : [
          { status: 0, title: "Backlog", tasks: [] },
          { status: 1, title: "Ready", tasks: [] },
          { status: 2, title: "In Progress", tasks: [] },
          { status: 3, title: "Finished", tasks: [] },
        ];
  } catch (error) {
    console.error("Error parsing localStorage data", error);
    return [
      { status: 0, title: "Backlog", tasks: [] },
      { status: 1, title: "Ready", tasks: [] },
      { status: 2, title: "In Progress", tasks: [] },
      { status: 3, title: "Finished", tasks: [] },
    ];
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [], getInitialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
