import { useState } from "react";
import FormLogin from "../FormLogin/FormLogin";
import "./App.css";

function App() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {isLoading ? (
                <p>Procesando solicitud</p>
            ) : (
                <FormLogin setIsLoading={setIsLoading} />
            )}
        </>
    );
}

export default App;
