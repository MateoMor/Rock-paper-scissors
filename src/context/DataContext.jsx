import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [score, setScore] = useState(12);

    const [result, setResult] = useState(true);

    function translateElement(x, y, containerId, elementId, duration = "1s") {
        const container = document.getElementById(containerId);
        const element = document.getElementById(elementId);

        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        // Calcula las coordenadas de desplazamiento respecto al contenedor.

        // Eliminar última resta de ambos para que el ángulo de referencia sea el notado y no el centro
        const offsetX =
            (containerRect.width * x) / 100 -
            (elementRect.left - containerRect.left) - elementRect.width / 2;
        const offsetY =
            (containerRect.height * y) / 100 -
            (elementRect.top - containerRect.top) - elementRect.height / 2;

        // Aplica la transformación de traducción al elemento
        element.style.transitionDuration = duration;
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    // handleOnClick sirve se activa cuando se presiona una mano
    const handleOnClick = (e) => {
        translateElement(50, 50, "triangle", e.target.id);
    };

    // sizeElement sirve para obtener el porcentage del tamaño de un elemento
    function sizeElement(elementId, axis, percentage) {
        const element = document.getElementById(elementId);

        if (axis == "x") {
            return (element.getBoundingClientRect().width * percentage) / 100;
        } else if (axis == "y") {
            return (element.getBoundingClientRect().height * percentage) / 100;
        }
    }

    // Función que permite asignarle a top, left, right y bottom propiedades con respecto al tamaño del contenedor
    const elementPositioner = (
        id,
        top = "auto",
        left = "auto",
        bottom = "auto",
        right = "auto",
    ) => {
        const [elementWidth, setElementWidth] = useState(0);
        const [elementHeight, setElementHeight] = useState(0);

        useEffect(() => {
            const handleSizeElement = () => {
                const width = sizeElement(id, "x", 100);
                const height = sizeElement(id, "y", 100);
                setElementWidth(width);
                setElementHeight(height);
            };

            handleSizeElement();
        }, [sizeElement]);

        useEffect(() => {
          
          const elementStyleMod = document.getElementById(id).style;

          if (typeof top === "number") {
            elementStyleMod.setProperty("top", `${elementHeight * top}px`);
          }

          if (typeof left === "number") {
            elementStyleMod.setProperty("left", `${elementHeight * left}px`)
          }

          if (typeof bottom === "number") {
            elementStyleMod.setProperty("bottom", `${elementHeight * bottom}px`);
          }

          if (typeof right === "number") {
            elementStyleMod.setProperty("right", `${elementHeight * right}px`);
          }

/*             const topMod =
                typeof top === "number" ? `${elementHeight * top}px` : "auto";
            const leftMod =
                typeof left === "number" ? `${elementHeight * left}px` : "auto";
            const rightMod =
                typeof right === "number"
                    ? `${elementHeight * right}px`
                    : "auto";
            const bottomMod =
                typeof bottom === "number"
                    ? `${elementHeight * bottom}px`
                    : "auto";


            elementStyleMod.setProperty("top", topMod);
            elementStyleMod.setProperty("left", leftMod);
            elementStyleMod.setProperty("bottom", bottomMod);
            elementStyleMod.setProperty("right", rightMod); */
        }, [elementHeight, elementWidth]);
    };

    return (
        <DataContext.Provider
            // value es un objeto en el que puedo compartir lo que deseo
            value={{
                score,
                setScore,
                result,
                setResult,
                translateElement,
                sizeElement,
                handleOnClick,
                elementPositioner,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
