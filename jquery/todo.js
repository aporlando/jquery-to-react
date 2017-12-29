function addTodo(todoText, completed) {
    $('#todos').append(
        '<li>' +
        todoText +
        '</li>'
    );
}

function deleteTodo() {

}

function completeTodo() {

}

$("#addForm").on('submit', function(e) {
    e.preventDefault();
    console.log($("input#todoInput").val());
    var input = $("input#todoInput");
    addTodo(input.val());
    input.val("");
});
