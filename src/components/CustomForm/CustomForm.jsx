const CustomForm = ({ children, handleSubmit }) => {
    return <form onSubmit={handleSubmit}>{children}</form>;
};

export default CustomForm;
