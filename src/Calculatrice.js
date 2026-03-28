import "./Calculatrice.css";
import { useState } from "react";

export default function Calculatrice() {
    const [display, setDisplay] = useState("0");
    const [firstValue, setFirstValue] = useState(0);
    const [secValue, setSecValue] = useState(0);
    const [operator, setOperator] = useState("");
    const [waitForSecond, setWaitForSecond] = useState(false);
    const [calculEffectue, setCalculEffectue] = useState(false);

    const inputNumber = (num) => {
        if (calculEffectue) {
            setDisplay(num);
            setFirstValue(parseFloat(num));
            setCalculEffectue(false);
            return;
        }
        if (waitForSecond) {
            setDisplay(display + num);
            setSecValue(parseFloat(num));
            setWaitForSecond(false);
        } 
        else {
            const newValue = display === "0" ? num : display + num;
            setDisplay(newValue);
            if (!operator) {
                setFirstValue(parseFloat(firstValue.toString() + num));
            } else {
                const parts = newValue.split(` ${operator} `);
                setSecValue(parseFloat(parts[1]));
            }
        }
    };

    const inputOperator = (op) => {
        if (calculEffectue) {
            setCalculEffectue(false);
            setFirstValue(firstValue);
            setDisplay(firstValue.toString() + " " + op + " ");
        } 
        else if (operator && !waitForSecond) {
            const res = executerCalcul(firstValue, parseFloat(secValue), operator);
            setFirstValue(res);
            setSecValue(0);
            setDisplay(res.toString() + " " + op + " ");
        } 
        else {
            setFirstValue(parseFloat(display));
            setDisplay(display + " " + op + " ");
        }

        setOperator(op);
        setWaitForSecond(true);
    };

    const calculer = () => {
        setSecValue(parseFloat(secValue));
        let res = 0;
        res = executerCalcul(firstValue, secValue, operator);

        setDisplay(firstValue.toString()+" "+operator+" "+secValue.toString()+" = "+"\n"+res.toString());
        setFirstValue(res);
        setSecValue(0);
        setOperator(null);
        setCalculEffectue(true);
    };

    const executerCalcul = (val1, val2, op) => {
        switch (op) {
            case "+": return val1 + val2;
            case "-": return val1 - val2;
            case "x": return val1 * val2;
            case "÷": return val2 === 0 ? "Erreur: division par 0" : val1 / val2;
            default: return val2;
        }
    };

    const effacer = () => {
        setDisplay("0");
        setFirstValue(0);
        setSecValue(0);
        setOperator(null);
        setWaitForSecond(false);
    };

    return (
        <div className = "calculatrice">
            <div className = "display">{display}</div>
            
            <button onClick={() => inputNumber("7")}>7</button>
            <button onClick={() => inputNumber("8")}>8</button>
            <button onClick={() => inputNumber("9")}>9</button>
            <button onClick={() => inputOperator("+")}>+</button> 

            <button onClick={() => inputNumber("4")}>4</button>
            <button onClick={() => inputNumber("5")}>5</button>
            <button onClick={() => inputNumber("6")}>6</button>
            <button onClick={() => inputOperator("-")}>-</button>

            <button onClick={() => inputNumber("1")}>1</button>
            <button onClick={() => inputNumber("2")}>2</button>
            <button onClick={() => inputNumber("3")}>3</button>
            <button onClick={() => inputOperator("x")}>x</button>

            <button onClick={() => inputNumber("0")}>0</button>
            <button onClick={calculer}>=</button>
            <button onClick={effacer}>C</button>
            <button onClick={() => inputOperator("÷")}>÷</button>

        </div>
    );

}
