'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			allUsers: function(User) {
				return User.findAll();
			},
			allPosts: function(Post) {
				return Post.findAll();
			},
		}
	})
})

app.controller('MainController', function($scope, allPosts, allUsers) {

 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/

 	$scope.allPosts = allPosts;
 	$scope.allUsers = allUsers;


})


