
const Todo = (props) => {

    const {todo, toggleTodo} = props;

    function checkBox() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={checkBox} />
                {todo.name}
            </label>
        </div>
    );
};

export default Todo;