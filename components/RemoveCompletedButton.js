class RemoveCompletedButton extends React.Component {
    handleClick() {
        removeCheckedItems();
    }

    render() {
        if(this.props.show) {
            return (
                <button onClick={this.handleClick} className="btn btn-outline-secondary mx-1">
                    Remove Completed
                </button>
            );
        }
        return null;
    }
}

RemoveCompletedButton.defaultProps = {
    show: false
};

ReactDOM.render(
    <RemoveCompletedButton />,
    document.querySelector('[data-react-component="RemoveCompletedButton"]')
);
