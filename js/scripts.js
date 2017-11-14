var todos = [];
for(let i = 0; i <= 3; i++) {
  let todo = [];
  var userTodo = prompt('What is something you want to get done?', 'Netflix');
  var dueDate = prompt('How long should this take you?', '1');
  dueDate = parseInt(dueDate);
  if(dueDate == NaN) {
    alert(' Oh Noooooooo');
  } else {
    todo.push(userTodo, dueDate);
    todos.push(userTodo);
  }
    if(todos.length == 3) {
    break;
  } else {
    continue;
  }
}
    let v = 0;
    while(v < 2) {
      todos[v][1]
}
