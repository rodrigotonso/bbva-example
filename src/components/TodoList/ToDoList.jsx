import PropTypes from "prop-types";
import TodoItem from "./TodoItem/ToDoItem";

const ToDoList = ({ data, handleCheck }) => {
    return (
        <>
            {data.map((item, index) => (
                <TodoItem
                    key={item?.id || index}
                    label={item.task}
                    handleCheck={handleCheck}
                    checked={item.finished}
                />
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
