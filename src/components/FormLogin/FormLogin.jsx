import CustomButton from "../CustomButton/CustomButton";
import CustomField from "../CustomField/CustomField";
import CustomForm from "../CustomForm/CustomForm";

const FormLogin = ({ setIsLoading }) => {
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
};

export default FormLogin;
