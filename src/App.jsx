import { useState } from "react";
import "./App.css";

const App = () => {
    const [count, setCount] = useState(0);
    
    const increaseOnClick = () => {

        if (count >= 225) return;

        if (count < 10) {
            setCount(count + 1);
        } else if (count >= 10) {
            setCount(count * 2);
        }
    };

    return (
        <>
            <div className="container">
                <div>
                    <h1>Counter Widget With React</h1>

                    <div className="counter">{count}</div>
                    
                    <button onClick={increaseOnClick}>
                        increase counter
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;
