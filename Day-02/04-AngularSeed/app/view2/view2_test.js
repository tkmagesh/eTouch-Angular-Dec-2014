'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      var scope = $rootScope.$new();
      var view2Ctrl = $controller('View2Ctrl', {$scope : scope});
      //view2Ctrl();
      expect(scope.message).toBe("Welcome");
      expect(view2Ctrl).toBeDefined();
    }));

    it('should should set the welcome message', inject(function($controller, $rootScope) {
      //spec body
      var scope = $rootScope.$new();
      var view2Ctrl = $controller('View2Ctrl', {$scope : scope});
      //view2Ctrl();
      scope.setMessage("Welcome to Angular")
      expect(scope.message).toBe("Welcome to Angular");
      expect(view2Ctrl).toBeDefined();
    }));

    it('should call the getAll method of taskService', inject(function($controller, $rootScope) {
      //spec body
      var scope = $rootScope.$new();
      var taskService = {
      		getAll : function(){}
      };
      spyOn(taskService, "getAll");

      var view2Ctrl = $controller('View2Ctrl', {$scope : scope, taskService : taskService});
      //view2Ctrl();
      expect(taskService.getAll).toHaveBeenCalled();
    }));

    it('should call the getAll method of taskService with the message set using setMessage', inject(function($controller, $rootScope) {
      //spec body
      var scope = $rootScope.$new();
      
      var taskService = {
      		getAll : function(){}
      };
      spyOn(taskService, "getAll");

      var view2Ctrl = $controller('View2Ctrl', {$scope : scope, taskService : taskService});
      

      //view2Ctrl();
      expect(taskService.getAll).toHaveBeenCalledWith("Welcome");
    }));
  });
});