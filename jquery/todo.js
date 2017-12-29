var uniqueCounter = 0;

// template for the Todo items
function todoCreator(todoText, completed) {
    uniqueCounter = uniqueCounter + 1;
    var todoId = 'todo' + uniqueCounter;
    return '<li class="list-group-item">' +
        '  <div class="form-check" onchange="toggleComplete(this)">' +
        '    <input type="checkbox" class="form-check-input" id="' + todoId + '">' +
        '    <label class="form-check-label" for="' + todoId + '">' +
        (completed ? '<del>' + todoText + '</del>' : todoText) +
        '    </label>' +
        '  </div>' +
        '  <button onclick="deleteTodo(this)">Delete</button>' +
        '</li>';
}

// Add a todo to the list
function addTodo(todoText) {
    $('#todos').append(todoCreator(todoText));
}

// Remove the todo entirely
function deleteTodo(todo) {
    $(todo).parent().remove();
}

// Strike out the todo item when it is completed, remove strike when it is incomplete
function toggleComplete(todo) {
    var label = $(todo).find('label');
    if ($(todo).find('input').prop('checked')) {
        label.html('<del>' +
            label.text() +
            '</del>');
    } else {
        label.html(label.text());
    }
}

// When the form input is submitted, add the todo item
$("#addForm").on('submit', function(e) {
    e.preventDefault();
    var input = $("input#todoInput");
    addTodo(input.val());
    input.val("");
});
