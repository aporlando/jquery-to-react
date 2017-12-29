var uniqueCounter = 0;
function addTodo(todoText, completed) {
    uniqueCounter = uniqueCounter+1;
    var todoId = 'todo' + uniqueCounter;
    $('#todos').append(
        '<li class="list-group-item" data-item="' + todoId + '">' +
        '  <div class="form-check" onchange="completeTodo(this)">' +
        '    <input type="checkbox" class="form-check-input" id="' + todoId + '">' +
        '    <label class="form-check-label" for="' + todoId + '">' +
        (completed ? '<del>' + todoText + '</del>' : todoText) +
        '    </label>' +
        '  </div>' +
        '  <button onclick="deleteTodo(this)">Delete</button>' +
        '</li>'
    );
}

function deleteTodo(todo) {
    console.log('complete item', todo);
    $(todo).parent().remove();
}

function completeTodo(todo) {
    var label = $(todo).find('label');
    if ($(todo).find('input').prop('checked')) {
        label.html('<del>' +
            label.text() +
            '</del>');
    } else {
        label.html(label.text());
    }
}

$("#addForm").on('submit', function(e) {
    e.preventDefault();
    console.log($("input#todoInput").val());
    var input = $("input#todoInput");
    addTodo(input.val());
    input.val("");
});
