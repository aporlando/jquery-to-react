class AddTodoInput extends React.Component {
    render() {
        return (
            <form className="form-inline d-inline" id="addForm">
                <input id="todoInput" className="form-control" type="text"/>
                <button id="addTodo" type="submit" className="btn btn-primary mx-1">Add</button>
            </form>
        );
    }
}
