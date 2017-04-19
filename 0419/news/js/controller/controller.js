;
(function(){
	var controllers = angular.module('controller',[]);
	
    controllers.controller('indexCtrl',['$scope',function($scope){
		   $scope.name="long";
		   $scope.item=0;
		   $scope.dianji=function(num){
		   	   $scope.item=num;
		   }
	}]);
	
	//推荐页
	controllers.controller('tuijianCtrl',function($scope){
		   $scope.title="推荐";
		   
	});
	
	//娱乐页
	controllers.controller('yuleCtrl',function($scope){
		   $scope.title="娱乐";
	});
	
	//社会页
	controllers.controller('shehuiCtrl',function($scope){
		   $scope.title="社会";
	});
	
	//军事页
	controllers.controller('junshiCtrl',function($scope){
		   $scope.title="军事";
	});
})();	  