import TextField from "@mui/material/TextField";

const CustomField = ({ label, type, handleChange }) => {
    return <TextField label={label} type={type} variant="outlined" onChange={handleChange}/>;
};

export default CustomField;
