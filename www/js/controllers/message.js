
angular.module('controllers.message', [])

.controller('MessageCtrl', function ($scope, $state, $stateParams, Empresas) {

	switch($state.current.name) {

		case "message":

			Empresas.find({ id: parseInt($stateParams.id) }, function (selected) {
				$scope.selected = selected

				if($scope.selected.messages === undefined) {
					$scope.selected.messages = []
				}
			})

			$scope.send = function () {
				
				if($scope.newMessage != undefined && $scope.newMessage != "") {
					$scope.selected.messages.push({
						text: $scope.newMessage,
						timestamp: new Date().getTime()
					})

					Empresas.save($scope.selected)
					
					$scope.newMessage = ""
				}
				
			}

			$scope.delete = function (message) {
				// console.log("OMG")
				
				// console.log($scope.selected.messages)
				
				// _.each($scope.selected.messages, function (value, key) {
				// 	if(value != undefined)
				// 	if(value.timestamp == message.timestamp)
				// 		$scope.selected.messages.splice(key, 1)
				// })

				// Empresas.save($scope.selected)

			}

		break;

	}

})