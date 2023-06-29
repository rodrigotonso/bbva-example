import PropTypes from "prop-types";
import TodoItem from "./TodoItem/ToDoItem";
import { Button } from "@mui/material";

const ToDoList = ({ data, handleCheck }) => {
    return (
        <>
            {data.map((item, index) => (
                <>
                    <TodoItem
                        key={item?.id || index}
                        id={String(item?.id || index)}
                        label={item.task}
                        handleCheck={handleCheck}
                        checked={item.finished}
                    />
                    <Button variant="contained">X</Button>
                </>
            ))}
        </>
    );
};

export default ToDoList;

ToDoList.propTypes = {
    data: PropTypes.array,
};

ToDoList.defaultProps = {
    data: [],
};
