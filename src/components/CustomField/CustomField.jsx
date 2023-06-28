import TextField from "@mui/material/TextField";

const CustomField = ({ label, type }) => {
    return <TextField label={label} type={type} variant="outlined" />;
};

export default CustomField;
