import "./App.css";
import { useState } from "react";
import { Button } from "./components/button/button";
function App() {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

    function positiveNumber() {
        return setNumber(Math.floor(Math.random() * 100) + 1);
    }

    function negativeNumber() {
        return setNumber(Math.floor(Math.random() * -100));
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <h1 className="number">{number}</h1>
                </div>
                <Button func={positiveNumber}>Gerar Números Positivos</Button>
                <Button func={negativeNumber}>Gerar Números Negativos</Button>
            </header>
        </div>
    );
}

export default App;
