import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import CustomField from "../CustomField/CustomField";
import CustomForm from "../CustomForm/CustomForm";
import { username, password as passwordSetings } from "../../constants/setings";
const FormLogin = ({ setIsLoading }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        setIsLoading(true);
        const response = "esteesmitoken"
        localStorage.setItem('token', response)
    };

    return (
        <CustomForm>
            <CustomField
                label={"email"}
                handleChange={(e) => setEmail(e.target.value)}
            />
            <CustomField
                label="password"
                type="password"
                handleChange={(e) => setPassword(e.target.value)}
            />
            <CustomButton text="Envíar" handleClick={handleSubmit} />
        </CustomForm>
    );
};

export default FormLogin;
