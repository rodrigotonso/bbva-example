import CustomButton from "../CustomButton/CustomButton";
import CustomField from "../CustomField/CustomField";
import CustomForm from "../CustomForm/CustomForm";
import "./App.css";

function App() {
    return (
        <CustomForm>
            <CustomField label={"email"} />
            <CustomField label="password" type="password" />
            <CustomButton text="Envíar" />
        </CustomForm>
    );
}

export default App;
