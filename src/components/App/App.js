import { useState } from "react";
import FormLogin from "../FormLogin/FormLogin";
import "./App.css";

function App() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {localStorage.getItem("token") ? (
                <p>Estas logueado</p>
            ) : (
                <p>Logueate!</p>
            )}
            <FormLogin setIsLoading={setIsLoading} />
        </>
    );
}

export default App;
