import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const randomTypeGenerator = () => {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            return "rock";
        } else if (random == 1) {
            return "paper";
        } else {
            return "scissors";
        }
    };

    const [score, setScore] = useState(0);

    const [newElementType, setNewElementType] = useState(randomTypeGenerator());

    const [newElement, setNewElement] = useState(false);

    const [chosenHandId, setChosenHandId] = useState("");

    const [rulesWindow, setRulesWindow] = useState(false);

    const [result, setResult] = useState("")

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
            setResult("DRAW")
        } else if (
            (player1Choice === "rock" && player2Choice === "scissors") ||
            (player1Choice === "paper" && player2Choice === "rock") ||
            (player1Choice === "scissors" && player2Choice === "paper")
        ) {
            setScore(score + 1);
            setResult("YOU WIN")
        } else {
            setScore(score - 1);
            setResult("YOU LOSE")
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

        const targetId = e.target.id;

        const children = e.target.children;
        for (let i = 0; i < e.target.length; i++) {
            children[i].disabled = true
            
        }

        document.getElementById(targetId).disabled = true

        translateElement(50, 50, targetId, "0.4s");

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

        document.getElementById("triangle").style.opacity = "1";

        setTimeout(() => {
            // Configuraciones arbitrarias de posición. Plantear un modelo para que los movimientos de translateElement siempre transladen al elemento respecto a la posición fija del contenedor
            if (targetId == "paper") {
                translateElement(40, 100, targetId, "0.8s");
            } else if (targetId == "rock") {
                translateElement(-60, 100, targetId, "0.8s");
            } else {
                translateElement(-10, 0, targetId, "0.8s");
            }

            setChosenHandId(targetId);

            setNewElement(!newElement);

            setTimeout(() => {
                document.getElementById("playAgain").style.display = "flex";
            }, 1700);
        }, 600);
    };

    const newElementGenerated = () => {
        if (newElement) {
            setTimeout(() => {
                document.getElementById("newElement").style.opacity = "1";
                translateElement(110, 50, "newElement", "0.6s");

                setTimeout(() => {
                    determineWinner(chosenHandId, newElementType);
                }, 700);
            }, 900);
        }
    };

    useEffect(() => {
        {
            newElementGenerated({});
        }
    }, [newElement]);

    const [gameContainerVisible, setGameContainerVisible] = useState(true);

    const resetGameContainer = () => {
        document.getElementById("playAgain").style.display = "none";
        setGameContainerVisible(false);
        setNewElement(false);
        setNewElementType(randomTypeGenerator());
        setTimeout(() => {
            setGameContainerVisible(true);
        }, 0);
    };

    const closeRulesWindow = () => {
            setTimeout(() => {
                document.getElementById("rulesButton").disabled = false
            }, 500);
            document.getElementById("rulesWindowScreen").style.display = "none";
            translateElement(50, 50, "rulesWindow", "0.4s");
    };

    return (
        <DataContext.Provider
            value={{
                score,
                setScore,
                translateElement,
                sizeElement,
                handleOnClick,
                elementPositioner,
                determineWinner,
                newElement,
                newElementGenerated,
                gameContainerVisible,
                newElementType,
                resetGameContainer,
                setRulesWindow,
                rulesWindow,
                closeRulesWindow,
                result,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
