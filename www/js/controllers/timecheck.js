
angular.module('controllers.timecheck', [])

.controller('TimecheckCtrl', function ($scope, $state, $stateParams, Empresas) {

	switch($state.current.name) {

		case "timecheck":

			Empresas.all(function (empresas) {
				$scope.empresas = empresas
			})

		break

		case "timecheck-select":

			Empresas.find({ id: parseInt($stateParams.id) }, function (selected) {
				$scope.selected = selected

				Date.watch($scope, 'clock', 'ingreso', $scope.selected.register[0].timestamp)
			})

			$scope.ingreso = function () {
				
				$scope.selected.register.splice(0, 0, {
					time: moment().format("DD/MM/YYYY - HH:mm") + " hrs",
					type: "Ingreso",
					timestamp: new Date().getTime()
				})
				$scope.selected.ingreso = true

				Empresas.save($scope.selected)

				Date.watch($scope, 'clock', 'ingreso', $scope.selected.register[0].timestamp)

			}

			$scope.salida = function () {

				$scope.selected.register.splice(0, 0, {
					time: moment().format("DD/MM/YYYY - HH:mm") + " hrs",
					type: "Salida",
					timestamp: new Date().getTime()
				})
				$scope.selected.ingreso = false

				Empresas.save($scope.selected)
				
			}

		break
	
	}
	
})
