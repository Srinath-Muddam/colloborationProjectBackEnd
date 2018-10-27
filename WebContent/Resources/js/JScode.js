
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/blog", {
        templateUrl : "Blog/blog.html",
        controller: "BlogCtrl",
        	
    })
    .when("/jobs", {
        templateUrl : "Job/job.html",
        controller: "JobCtrl",
        	
    });
    
});




app.controller('BlogCtrl', function ($scope, $http)
        {

//postBlog('abc','java','harsha','11/10/2018','language something');
$scope.postBlog = function (t, desc, wby,d_blog,brf) {

var blogData = {

        title: t,

        description: desc,

        writtenby: wby,
        
        date_blog:d_blog,
        
        brief:brf
        

};//blogData  object

//Call the services

$http.post('http://localhost:4080/project2/createblog',
        JSON.stringify(blogData)).then(function (response) {

if (response.data)

$scope.msg = "Blog  Created Successfully!";

},
function (response) {

$scope.msg = "Service not Exists";

$scope.statusval = response.status;

$scope.statustext = response.statusText;

$scope.headers = response.headers();

}); //then

}; //postBlog

}); //controller









app.controller('JobCtrl', function ($scope, $http)
        {


$scope.postJob = function (role, loc, exp,skills,sal) {

var JobData = {

		jobRole: role,

		jobLocation: loc,

		experienceRequired: exp,
        
		skillsRequired:skills,
        
		salary:sal
        

};//blogData  object

//Call the services

$http.post('http://localhost:4080/project2/addJobdetails',
        JSON.stringify(JobData)).then(function (response) {

if (response.data)

$scope.msg = "Job Posted Successfully!";

},
function (response) {

$scope.msg = "Service not Exists";

$scope.statusval = response.status;

$scope.statustext = response.statusText;

$scope.headers = response.headers();

}); //then

}; //postBlog

}); //controller








app.controller("jobdata", function ($scope, $http) {

    

    
    $http.get('http://localhost:4080/project2/showjobs').success(function(d,a,s,f)
 		   
    {
 	   $scope.data=d;
 	   
 	   
 	   
    }//fun
    );//success

    

});//controller




app.controller("blogdata", function ($scope, $http) {

    

    
    $http.get('http://localhost:4080/project2/showblogs').success(function(d,a,s,f)
 		   
    {
 	   $scope.data=d;
 	   
 	   $scope.res=a;
 	   
    }//fun
    );//success

    

});//controller




