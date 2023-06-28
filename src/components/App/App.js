import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import CustomField from "../CustomField/CustomField";
import CustomForm from "../CustomForm/CustomForm";
import "./App.css";

function App() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <CustomForm>
            <CustomField label={"email"} />
            <CustomField label="password" type="password" />
            <CustomButton
                text="Envíar"
                handleClick={() => setIsLoading(true)}
            />
        </CustomForm>
    );
}

export default App;
