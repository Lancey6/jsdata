'use  strict';

app.factory('User', function(DS) {
	
  /*
    create a User jsdata resource 
  */

  var user = DS.defineResource({
    name: 'users'
  })

  return user;

})

