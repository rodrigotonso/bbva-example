import PropTypes from "prop-types";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const TodoItem = ({ id, label, handleCheck, checked }) => {
    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox id={id} onChange={(e)=>handleCheck(e)} checked={checked} />
                    }
                    label={label}
                />
            </FormGroup>
        </>
    );
};

export default TodoItem;

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleCheck: PropTypes.func.isRequired,
    checked: PropTypes.bool,
};

TodoItem.defaultProps = {
    label: "Texto Default",
    checked: false,
};
