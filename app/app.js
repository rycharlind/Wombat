angular.module('wombatApp', [])
  .controller('ComponentsController', function() {
    
    var components = this;
    
    components.icons = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
 
    
    components.addIcon = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    
    components.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    
    components.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  

  });