
angular.module('controllers.login', [])

.controller('LoginCtrl', function ($scope, $state) {
	
	switch($state.current.name) {

		case "login":

			$scope.login = function (params) {
				$state.go('timecheck')
			}

		break;

		case "register":

			

		break;

	}

})