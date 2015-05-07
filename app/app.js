angular.module('wombatApp', ['components'])
  .controller('ComponentsController', function() {
    
    var components = this;
    
    var faicons = [
    	'fa-adjust',
		'fa-adn',
		'fa-align-center',
		'fa-align-justify',
		'fa-align-left',
		'fa-align-right',
		'fa-ambulance',
		'fa-anchor',
		'fa-android',
		'fa-angellist',
		'fa-angle-double-down',
		'fa-angle-double-left',
		'fa-angle-double-right'
    ];
    
    components.todo = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
      
    
    components.icons = [];
    for (i in faicons) {
		  components.icons.push({class:'fa ' + faicons[i]}); 
	   };
    
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