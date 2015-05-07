angular.module('components', [])
 
  .directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      },
      template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  })
 
  .directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsController) {
        tabsController.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  })

  
  .directive('toolbox', function() {
    return {
      restrict: 'E',
      scope: {title: '@'},
      transclude: true,
      template:
        "<div class='toolbox drag resize ui-widget-content'>" +
          "<div class='toolbox-title ui-widget-header'>{{title}}</div>" +
          "<div class='toolbox-body' ng-transclude></div>" +
        "</div>",
      replace: true
    };
    

    /* only works with HTTP
  .directive('toolbox', function() {
    return {
      restrict: 'E',
      scope: {title: '@'},
      transclude: true,
      templateUrl:'templates/toolbox.html',
      replace: true
    };
    */

  });


$(function() {
  $('.drag').draggable({handle:'.toolbox-title'});
  $('.resize').resizable({
    maxHeight:500,
    maxWidth:500,
    minHeight:200,
    minWidth:100
  });
  $('.component').draggable({
    helper:'clone'
  });
  $('#main').droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    accept:'.component',
    drop: function(event, ui) {
      console.log(ui.draggable);
      $('#main').append(ui.draggable.clone());
    }
  });
});