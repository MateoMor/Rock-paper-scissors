import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [score, setScore] = useState(12)

  const [result, setResult] = useState(true)

  function translateElement(x, y, containerId, elementId, duration = "1s") {
    const container = document.getElementById(containerId);
    const element = document.getElementById(elementId);
  
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
  
    // Calcula las coordenadas de desplazamiento respecto al contenedor
    const offsetX = (containerRect.width * x) / 100 - (elementRect.left - containerRect.left);
    const offsetY = (containerRect.height * y) / 100 - (elementRect.top - containerRect.top);
  
    // Aplica la transformación de traducción al elemento
    element.style.transitionDuration = duration;
    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

    return <DataContext.Provider
    // value es un objeto en el que puedo compartir lo que deseo
    value={{
      score,
      setScore,
      result,
      setResult,
      translateElement
    }}
    >{children}</DataContext.Provider>;
};
