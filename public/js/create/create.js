'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			author: function($stateParams, User) {
				return User.find( $stateParams.userId );
			}
		}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $state, Post, author) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	$scope.newPost = {
		name: author.username,
	};
	
	$scope.createNewPost = function() {
		Post.create( {
			title: $scope.newPost.title,
			author: author._id,
			body: $scope.newPost.body
		}).then( function( post ) {
			console.dir( post );
			$state.go('post', { postId: post._id });
		});
	}

}) 