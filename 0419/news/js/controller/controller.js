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
	controllers.controller('tuijianCtrl',function($scope,$http){
		   $scope.title="推荐";
		   //点击头部出现弹窗	 
		   $scope.isShowdialog=false;
		   $scope.djAlert=function(){
		   	  $scope.isShowdialog=true;
		   }
		   //加载更多
		   $scope.page=0;
		   $scope.arr=[];
		   //加载覆盖 条件
		   $scope.isLoad=false;
		   $scope.newsMore=function(){
		   	 $scope.isLoad=true;
		   	 function formatterDateTime() {
	            var date = new Date()
	            var month = date.getMonth() + 1
	            var datetime = date.getFullYear() + "" // "年"
		        + (month >= 10 ? month : "0" + month) + "" // "月"
		        + (date.getDate() < 10 ? "0" + date.getDate() : date
			    .getDate()) + "" + (date.getHours() < 10 ? "0" + date.getHours() : date
			    .getHours()) + "" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
			    .getMinutes()) + "" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
			    .getSeconds());
	            return datetime;
              }
		   	  $http({
		   	  	//  url:'js/news.json',
		   	  	url:'http://route.showapi.com/109-35',
		   	  	  method:'GET',
		   	  	  params:{
		   	  	 	"showapi_timestamp": formatterDateTime(),
		   	  	  	"showapi_appid": '26916',
		   	  	  	"showapi_sign": '72fa78be4c2045138d456456fb9a3a90',
		   	  	//    channel_id: 6,
		   	  	//  	page:$scope.page++,
		   	  	  }
		   	  }).then(function(data){
		   	  	    $scope.isLoad=false;
		   	    	$scope.arr=$scope.arr.concat(data.data.showapi_res_body.pagebean.contentlist);
		   	    //    console.log(data);
		   	    //    $scope.arr=$scope.arr.concat(data.data.news_list);
		   	    //    console.log($scope.arr);
		   	  	
		   	  })
		   }
		 $scope.newsMore();
		 
		 
		 
		 
	});
	
	//娱乐页
	controllers.controller('yuleCtrl',function($scope,$http){
		   $scope.title="娱乐";
		   //点击头部出现弹窗	 
		   $scope.isShowdialog=false;
		   $scope.djAlert=function(){
		   	  $scope.isShowdialog=true;
		   }
		   //加载更多
		   $scope.page=0;
		   $scope.arr=[];
		   //加载覆盖 条件
		   $scope.isLoad=false;
		   $scope.yuleMore=function(){
		   	    $scope.isLoad=true;
		        function formatterDateTime() {
	               var date = new Date()
	               var month = date.getMonth() + 1
	               var datetime = date.getFullYear() + "" // "年"
		           + (month >= 10 ? month : "0" + month) + "" // "月"
		           + (date.getDate() < 10 ? "0" + date.getDate() : date
			       .getDate()) + "" + (date.getHours() < 10 ? "0" + date.getHours() : date
			       .getHours()) + "" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
			       .getMinutes()) + "" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
			       .getSeconds());
	                return datetime;
                }
		        $http({
		   	  	  url:'http://route.showapi.com/109-35',
		   	  	  method:'GET',
		   	  	  params:{
		   	  	 	"showapi_timestamp": formatterDateTime(),
		   	  	  	"showapi_appid": '26916',
		   	  	 	"showapi_sign": '72fa78be4c2045138d456456fb9a3a90',
		   	  	  	page:$scope.page++,
		   	  	  }
		   	    }).then(function(data){
		   	    	$scope.isLoad=false;
		   	    //	$scope.arr=$scope.arr.concat(data.data.showapi_res_body.showapi_res_body.list);
		   	        $scope.arr=$scope.arr.concat(data.data.showapi_res_body.pagebean.contentlist);
		   	     //   console.log(data);
		   	    //    console.log($scope.arr);
		   	  	
		   	    })
		   	 
		   }
		   $scope.yuleMore();
		   
	});
	
	//社会页
	controllers.controller('shehuiCtrl',function($scope,$http){
		   $scope.title="社会";
		   //点击头部出现弹窗	 
		   $scope.isShowdialog=false;
		   $scope.djAlert=function(){
		   	  $scope.isShowdialog=true;
		   }
		   //加载更多
		   $scope.page=0;
		   $scope.arr=[];
		   
		   $scope.isLoad=false;
		   $scope.shehuiMore=function(){
		   	    $scope.isLoad=true;
		        function formatterDateTime() {
	               var date = new Date()
	               var month = date.getMonth() + 1
	               var datetime = date.getFullYear() + "" // "年"
		           + (month >= 10 ? month : "0" + month) + "" // "月"
		           + (date.getDate() < 10 ? "0" + date.getDate() : date
			       .getDate()) + "" + (date.getHours() < 10 ? "0" + date.getHours() : date
			       .getHours()) + "" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
			       .getMinutes()) + "" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
			       .getSeconds());
	                return datetime;
                }
		        $http({
		   	  	  url:'http://route.showapi.com/109-35',
		   	  	  method:'GET',
		   	  	  params:{
		   	  	 	"showapi_timestamp": formatterDateTime(),
		   	  	  	"showapi_appid": '26916',
		   	  	 	"showapi_sign": '72fa78be4c2045138d456456fb9a3a90',
		   	  	  	page:$scope.page++,
		   	  	  }
		   	    }).then(function(data){
		   	    	$scope.isLoad=false;
		   	    //	$scope.arr=$scope.arr.concat(data.data.showapi_res_body.showapi_res_body.list);
		   	        $scope.arr=$scope.arr.concat(data.data.showapi_res_body.pagebean.contentlist);
		   	     //   console.log(data);
		   	    //    console.log($scope.arr);
		   	  	
		   	    })
		   	 
		   }
		   $scope.shehuiMore();
	});
	
	//军事页
	controllers.controller('junshiCtrl',function($scope,$http){
		   $scope.title="军事";
		    //点击头部出现弹窗	 
		   $scope.isShowdialog=false;
		   $scope.djAlert=function(){
		   	  $scope.isShowdialog=true;
		   }
		    //加载更多
		   $scope.page=0;
		   $scope.arr=[];
		   $scope.isLoad=false;
		   $scope.junshiMore=function(){
		   	    $scope.isLoad=true;
		        function formatterDateTime() {
	               var date = new Date()
	               var month = date.getMonth() + 1
	               var datetime = date.getFullYear() + "" // "年"
		           + (month >= 10 ? month : "0" + month) + "" // "月"
		           + (date.getDate() < 10 ? "0" + date.getDate() : date
			       .getDate()) + "" + (date.getHours() < 10 ? "0" + date.getHours() : date
			       .getHours()) + "" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
			       .getMinutes()) + "" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
			       .getSeconds());
	                return datetime;
                }
		        $http({
		   	  	  url:'http://route.showapi.com/109-35',
		   	  	  method:'GET',
		   	  	  params:{
		   	  	 	"showapi_timestamp": formatterDateTime(),
		   	  	  	"showapi_appid": '26916',
		   	  	 	"showapi_sign": '72fa78be4c2045138d456456fb9a3a90',
		   	  	  	page:$scope.page++,
		   	  	  }
		   	    }).then(function(data){
		   	    	$scope.isLoad=false;
		   	    //	$scope.arr=$scope.arr.concat(data.data.showapi_res_body.showapi_res_body.list);
		   	        $scope.arr=$scope.arr.concat(data.data.showapi_res_body.pagebean.contentlist);
		   	     //   console.log(data);
		   	     //   console.log($scope.arr);
		   	  	
		   	    })
		   	 
		   }
		   $scope.junshiMore();
	});
	
	//新闻详情页
	controllers.controller('listCtrl',function($scope,$location,$http,$state){
		   // console.log($location.search());
		   // console.log($state.params); //点击传过来的id
		    $scope.isLoad=false;
		    function formatterDateTime() {
	               var date = new Date()
	               var month = date.getMonth() + 1
	               var datetime = date.getFullYear() + "" // "年"
		           + (month >= 10 ? month : "0" + month) + "" // "月"
		           + (date.getDate() < 10 ? "0" + date.getDate() : date
			       .getDate()) + "" + (date.getHours() < 10 ? "0" + date.getHours() : date
			       .getHours()) + "" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
			       .getMinutes()) + "" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
			       .getSeconds());
	                return datetime;
                }
		    $scope.isLoad=true;
		    $http({
		    	
		   	   url:'http://route.showapi.com/109-35',
		   	   method:"GET",
		   	   params:{
		   	   	    "showapi_timestamp": formatterDateTime(),
		   	  	  	"showapi_appid": '26916',
		   	  	  	"showapi_sign": '72fa78be4c2045138d456456fb9a3a90',
		   	   	    id:$state.params.channelId
		   	   }
		    }).then(function(data){	
		    	$scope.isLoad=false;
		    //	console.log(data);
		    	$scope.news = data.data.showapi_res_body.pagebean.contentlist;
		    //	console.log($scope.news);
		    //	console.log($state.params.id);
		    	
		    	
		    	for(var i=0;i<($scope.news).length;i++){
		    		
		    		if($state.params.id==$scope.news[i].channelId){
		    			$scope.news=$scope.news[i];
		    		//	console.log($scope.news);
		    	//	console.log($scope.news[i].channelId);
		    			
		    		}
		    		
		    	}
		    	

		    })
	});
})();	  