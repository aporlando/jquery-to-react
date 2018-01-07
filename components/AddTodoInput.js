class AddTodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <form className="form-inline d-inline" id="addForm">
                <input id="todoInput" type="text"
                       value={this.state.text}
                       className="form-control"/>
                <button id="addTodo" type="submit" className="btn btn-primary mx-1">Add</button>
            </form>
        );
    }
}

ReactDOM.render(<AddTodoInput/>, document.querySelector('[data-react-component="AddTodoInput"]'));
