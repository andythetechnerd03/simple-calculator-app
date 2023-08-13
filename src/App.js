import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import * as React from 'react';
import ButtonBox from "./components/ButtonBox";
import NewButton from "./components/Button";
import CalcProvider from "./context/CalcContext";

const btnValues = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "⌫","="]
];

function App() {
    return (
        <CalcProvider>
            <Wrapper>
                <Screen />
                <ButtonBox>
                    {btnValues.flat().map((btn, index) => (
                        <NewButton key={index}
                                value={btn}
                                variant="contained"
                                sx={{width: "25%"}}
                        />
                    ))}
                </ButtonBox>
            </Wrapper>
        </CalcProvider>
    );
}

export default App;