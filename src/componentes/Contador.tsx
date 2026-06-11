import { useState } from "react";

export default function Contador() {

    let [contador, setContador] = useState(1);

    function incrementa() {
        setContador(contador+1);
        console.log("Contador: ", contador);
    }
    return (
        <p>
            <input value={contador} />
            <button onClick={incrementa}>+</button>
        </p>
    );
}