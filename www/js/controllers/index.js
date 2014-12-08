
angular.module('controllers.index', [])

.controller('IndexCtrl', function ($scope, $state) {

	setTimeout(function () {
		$state.go('login')
	}, 1500)

})
