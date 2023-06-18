import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [score, setScore] = useState(12)

  const [result, setResult] = useState(true)

    return <DataContext.Provider
    // value es un objeto en el que puedo compartir lo que deseo
    value={{
      score,
      setScore,
      result,
      setResult
    }}
    >{children}</DataContext.Provider>;
};
