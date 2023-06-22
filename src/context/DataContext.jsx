import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [score, setScore] = useState(0);

    const [result, setResult] = useState(true);

    const [newElement, setNewElement] = useState(false);

    const translateElement = (x, y, elementId, duration = "1s") => {
        const element = document.getElementById(elementId);
        const container = element.parentNode;

        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        // Calcula las coordenadas de desplazamiento respecto al contenedor.

        // Eliminar última resta de ambos para que el ángulo de referencia sea el notado y no el centro
        const offsetX =
            (containerRect.width * x) / 100 -
            (elementRect.left - containerRect.left) -
            elementRect.width / 2;
        const offsetY =
            (containerRect.height * y) / 100 -
            (elementRect.top - containerRect.top) -
            elementRect.height / 2;

        // Aplica la transformación de traducción al elemento
        element.style.transitionDuration = duration;
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    // sizeElement sirve para obtener el porcentage del tamaño de un elemento
    const sizeElement = (elementId, axis, percentage) => {
        const element = document.getElementById(elementId);

        if (axis == "x") {
            return (element.getBoundingClientRect().width * percentage) / 100;
        } else if (axis == "y") {
            return (element.getBoundingClientRect().height * percentage) / 100;
        }
    };

    // Función que permite asignarle a top, left, right y bottom propiedades con respecto al tamaño del contenedor. Para asignar con respecto al contenedor, <<reference = "container">>.
    // Las propiedades son porcentuales a lo que hagan referencia
    const elementPositioner = (
        id,
        reference = "element",
        top = "auto",
        left = "auto",
        bottom = "auto",
        right = "auto"
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

            // En caso de que reference no sea "container", las propiedades hacen referencia al tamaño del elemento
            if (reference != "container") {
                if (typeof top === "number") {
                    elementStyleMod.setProperty(
                        "top",
                        `${elementHeight * top}px`
                    );
                }

                if (typeof left === "number") {
                    elementStyleMod.setProperty(
                        "left",
                        `${elementHeight * left}px`
                    );
                }

                if (typeof bottom === "number") {
                    elementStyleMod.setProperty(
                        "bottom",
                        `${elementHeight * bottom}px`
                    );
                }

                if (typeof right === "number") {
                    elementStyleMod.setProperty(
                        "right",
                        `${elementHeight * right}px`
                    );
                }
            } // En caso de que la propiedad reference sea "container", las propiedades hacen referencia al tamaño del elemento padre
            else {
                // Esto encuentra la altura y longitud del elemento padre
                const ContainerWidth = document
                    .getElementById(id)
                    .parentNode.getBoundingClientRect().width;
                const ContainerHeight = document
                    .getElementById(id)
                    .parentNode.getBoundingClientRect().height;

                if (typeof top === "number") {
                    elementStyleMod.setProperty(
                        "top",
                        `${(ContainerHeight * top) / 100 - elementHeight / 2}px`
                    );
                }

                if (typeof left === "number") {
                    elementStyleMod.setProperty(
                        "left",
                        `${(ContainerWidth * left) / 100 - elementWidth / 2}px`
                    );
                }

                if (typeof bottom === "number") {
                    elementStyleMod.setProperty(
                        "bottom",
                        `${
                            (ContainerHeight * bottom) / 100 - elementHeight / 2
                        }px`
                    );
                }

                if (typeof right === "number") {
                    elementStyleMod.setProperty(
                        "right",
                        `${(ContainerWidth * right) / 100 - elementWidth / 2}px`
                    );
                }
            }
        }, [elementHeight, elementWidth]);
    };

    const determineWinner = (player1Choice, player2Choice) => {
        if (player1Choice === player2Choice) {
            return "draw";
        } else if (
            (player1Choice === "rock" && player2Choice === "scissors") ||
            (player1Choice === "paper" && player2Choice === "rock") ||
            (player1Choice === "scissors" && player2Choice === "paper")
        ) {
            return "player1";
        } else {
            return "player2";
        }
    };

    const hideChildrenExceptOne = (parentId, childId) => {
        const children = document.getElementById(parentId).children;
        for (let i = 0; i < children.length; i++) {
            if (children[i].id !== childId) {
                children[i].style.display = "none";
            }
        }
    };

    // handleOnClick sirve se activa cuando se presiona una mano
    const handleOnClick = (e) => {
        /* const posIniConX = document.getElementById(e.target.id).getBoundingClientRect().left - document.getElementById(e.target.id).parentNode.getBoundingClientRect().left

        //console.log(posIniConX)

        const posIniConY = document.getElementById(e.target.id).getBoundingClientRect().top - document.getElementById(e.target.id).parentNode.getBoundingClientRect().top

        //console.log(posIniConY) */

        const targetId = e.target.id;

        translateElement(50, 50, targetId, "0.6s");

        document
            .getElementById(targetId)
            .parentNode.style.setProperty(
                "height",
                `${
                    document.getElementById("triangle").getBoundingClientRect()
                        .height
                }px`
            );

        document
            .getElementById(targetId)
            .parentNode.style.setProperty(
                "width",
                `${
                    document.getElementById("triangle").getBoundingClientRect()
                        .width
                }px`
            );

        hideChildrenExceptOne("gameContainerDiv", targetId);

        document.getElementById("triangle").style.display = "none";

        setTimeout(() => {
            // Configuraciones arbitrarias de posición. Plantear un modelo para que los movimientos de translateElement siempre transladen al elemento respecto a la posición fija del contenedor
            if (targetId == "paper") {
                translateElement(40, 100, targetId);
            } else if (targetId == "rock") {
                translateElement(-60, 100, targetId);
            } else {
                translateElement(-10, 0, targetId);
            }

            setNewElement(!newElement);

            /* const posFinConX = document.getElementById(e.target.id).getBoundingClientRect().left - document.getElementById(e.target.id).parentNode.getBoundingClientRect().left

        //console.log(posFinConX)

        const posFinConY = document.getElementById(e.target.id).getBoundingClientRect().top - document.getElementById(e.target.id).parentNode.getBoundingClientRect().top

        //console.log(posFinConY)

        const destinationX = 0 * document.getElementById(e.target.id).parentNode.getBoundingClientRect().left / 100 - posFinConX - posIniConX
        const destinationY = 0 * document.getElementById(e.target.id).parentNode.getBoundingClientRect().top / 100 - posFinConY - posIniConY

        console.log(document.getElementById(e.target.id).parentNode.getBoundingClientRect().left)

            document.getElementById(e.target.id).style.transform = `translate(${destinationX}px, ${destinationY}px)` */
        }, 1000);
    };

    const newElementAnimation = () => {
        if (newElement) {
            setTimeout(() => {
                document.getElementById("newElement").style.display = "block";
                translateElement(110, 50, "newElement");
            }, 2000);
        }
    };

    const [gameContainerVisible, setGameContainerVisible] = useState(true);

  const resetGameContainer = () => {
    setGameContainerVisible(false); 
    setTimeout(() => {
      setGameContainerVisible(true); 
    }, 0);
  };

    return (
        <DataContext.Provider
            value={{
                score,
                setScore,
                result,
                setResult,
                translateElement,
                sizeElement,
                handleOnClick,
                elementPositioner,
                determineWinner,
                newElement,
                newElementAnimation,
                gameContainerVisible,
                resetGameContainer
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
