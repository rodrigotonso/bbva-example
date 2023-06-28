import Button from "@mui/material/Button";

const CustomButton = ({ text, handleClick }) => {
    return (
        <Button variant="contained" onClick={handleClick}>
            {text}
        </Button>
    );
};

export default CustomButton;
