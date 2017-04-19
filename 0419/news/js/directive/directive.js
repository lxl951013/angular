//组件、命令模块
;
(function(){
    var directives=angular.module('directive',[]);
    //头部组件
    directives.directive('xheader',function(){
		return {
		   		templateUrl:'directive/xheader.html'	
		}
	});
	
	//尾部组件
    directives.directive('xfooter',function(){
		return {
		   		templateUrl:'directive/xfooter.html'	
		}
	});
	//轮播图组件
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
})();