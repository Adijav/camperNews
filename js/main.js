var app = angular.module("camperNews",[]);

app.controller('CamperNewsController',function($http,$scope){

	var camperNews = this;
	camperNews.article = [];

	$http.get("http://www.freecodecamp.com/news/hot")
    .success(function(response) {
    	response.forEach(function(item){
    		if(item.storyLink.length>45)
    			item.storyLink = item.storyLink.substring(0, 45)+'...';

    		var timeStamp = new Date(item.timePosted);
    			month = timeStamp.getMonth()+1;
    			day = timeStamp.getDate();
    			year = timeStamp.getFullYear();


    		$('.campNewsContainer').append('<div class="col-lg-4"><div class="userAvatar" style="background-image:url(' + item.author.picture + ')" ><a href="'+item.link+'" target=_blank class="articles">'+item.storyLink+'</a><div class="timeStamp">'+month+'/'+day+'/'+year+' -by '+item.author.username+'</div></div></div>');
    	});
    	$('.articles').circleType({radius:160});
    	$('.timeStamp').circleType({radius:160,dir:-1});
    	//$('.timeStamp').css({'top':215});
    });
});