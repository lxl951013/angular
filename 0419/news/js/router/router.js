//路由模块
;
(function(){
	var router=angular.module('router',[]);
	router.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		
		$stateProvider.state('index',{
			url:'/index',
			templateUrl:'template/index1.html',
			controller:"indexCtrl",
		})
		//推荐页
		.state('index.tuijian',{
				url:'/tuijian',
				templateUrl:'template/tuijian.html',
				controller:'tuijianCtrl',
		})
		//娱乐也
		.state('index.yule',{
				url:'/yule',
				templateUrl:'template/yule.html',
				controller:'yuleCtrl',
		})
		//社会页
		.state('index.shehui',{
				url:'/shehui',
				templateUrl:'template/shehui.html',
				controller:'shehuiCtrl',
		})
		//军事页
		.state('index.junshi',{
				url:'/junshi',
				templateUrl:'template/junshi.html',
				controller:'junshiCtrl',
		})
		//新闻详情页
		.state("detail", {
				url: "/detail/:id",
				templateUrl: "template/list.html",
				controller: "listCtrl"
		});
			//默认的重定向
		$urlRouterProvider.when('','/index')
	}])
})();
		  