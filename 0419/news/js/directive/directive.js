//组件、命令模块
;
(function(){
    var directives=angular.module('directive',[]);
    //公共头部组件
    directives.directive('xheader',function(){
		return {
		   		templateUrl:'directive/xheader.html'	
		}
	});
	
	//公共尾部组件
    directives.directive('xfooter',function(){
		return {
		   		templateUrl:'directive/xfooter.html'	
		}
	});
	//公共加载组件
    directives.directive('xload',function(){
		return {
		   		templateUrl:'directive/xload.html'	
		}
	});
	
	//公共弹窗组件
    directives.directive('xalert',function(){
		return {
		   		templateUrl:'directive/xalert.html'	
		}
	});
	
	//推荐页搜索框组件
	directives.directive('xsearch',function(){
		return {
		   		templateUrl:'directive/xsearch.html'	
		}
	});
	
	
	//推荐页轮播图组件
    directives.directive('lunbotu',function(){
		return {
		   		templateUrl:'directive/lunbotu.html',
		   		link:function(scope,ele,attr){
		   		   var swiper = new Swiper('.swiper-container', {
					    pagination: '.swiper-pagination',
					    paginationClickable: true
				   });	
		   		}
		   		
		}
	});
	
	//新闻列表组件
    directives.directive('newslist',function(){
		return {
		   		templateUrl:'directive/newslist.html'	
		}
	});
	
	//娱乐列表组件
    directives.directive('yulelist',function(){
		return {
		   		templateUrl:'directive/yulelist.html'
		}
	});
	
	//社会列表组件
    directives.directive('shehuilist',function(){
		return {
		   		templateUrl:'directive/shehuilist.html'
		}
	});
	
	//军事列表组件
    directives.directive('junshilist',function(){
		return {
		   		templateUrl:'directive/junshilist.html'
		}
	});
})();