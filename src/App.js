import "./App.css";
import React, { useState } from "react";

function App() {

    const [sixnumbers, setSixnumber] = useState(new Array(6).fill(0));
    const [tzoker, setTzoker] = useState(0);

    const handelGenerate = () => {

        setSixnumber(new Array(6).fill().map(() => Math.floor(Math.random() * 49) + 1));

        setTzoker(Math.floor(Math.random() * 10) + 1);
    }
   

    return (
        <div className="App">
            <div className="allnumbers">

                <div className="sixnumbers">

                    {sixnumbers.map((item, idx) => <input key={idx} value={item} disabled />)}
        </div>

                <div className="tzoker">
                    <input value={tzoker} disabled />
                </div>
            </div>

            <button onClick={handelGenerate}>Generate</button>
        </div>
    );
}

export default App;
