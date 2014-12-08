angular.module('starter.services', [])

.factory('Empresas', function (Storage) {
	var res = new Storage('Empresas')

	window.Empresas = res

	// Seed
	res.count(function (count) {
		if(count == 0) {
			console.log("Poblando " + res.name)
			res.save({ id: 1, name: 'Requies SpA', address: 'Rafael Cañas 114, Of 1A', ingreso: false, register: [] }, function () {
			res.save({ id: 2, name: 'Muebles López', address: 'Córdova y figueróa 1234', ingreso: false, register: [] }, function () {
			res.save({ id: 3, name: 'Universidad de Santiago', address: 'Alameda 1234', ingreso: false, register: [] }, function () {
				location.reload()
			})})})
		}
	})

	return res
})

.factory('User', function (Storage) {
	var res = new Storage('User')

	window.User = res
	return res
})



// Seed
// window.Empresas.save({ id: 1, name: 'Requies SpA', address: 'Rafael Cañas 114, Of 1A' })
// window.Empresas.save({ id: 2, name: 'Muebles López', address: 'Córdova y figueróa 1234' })
// window.Empresas.save({ id: 3, name: 'Universidad de Santiago', address: 'Alameda 1234' })

// .factory('Empresas', function ($window, $rootScope, $localForage) {

// 	$localForage.getItem('empresas').then(function (empresas) {
// 		if(empresas === undefined) {
// 			console.log("Populating empresas")
// 			var local = []
// 			local.push({ id: 1, name: 'Requies SpA', address: 'Rafael Cañas 114, Of 1A' })
// 			local.push({ id: 2, name: 'Muebles López', address: 'Córdova y figueróa 1234' })
// 			local.push({ id: 3, name: 'Universidad de Santiago', address: 'Alameda 1234' })

// 			local[0]['register'] = [
// 				{ time: '19/08/2014 - 16:30 hrs'},
// 				{ time: '19/08/2014 - 16:30 hrs'},
// 				{ time: '19/08/2014 - 16:30 hrs'}
// 			]

// 			local[1]['register'] = [
// 				{ time: '19/08/2014 - 16:30 hrs'}
// 			]

// 			local[2]['register'] = [
// 				{ time: '19/08/2014 - 16:30 hrs'},
// 				{ time: '19/08/2014 - 16:30 hrs'}
// 			]

// 			$localForage.setItem('empresas', local)
// 		}
// 	})

// 	return {
// 		all: function (next) {
// 			$localForage
// 			.getItem('empresas')
// 			.then(function (empresas) {
// 				next(empresas)
// 			})
// 		}

// 		, find: function (param, next) {
// 			$localForage
// 			.getItem('empresas')
// 			.then(function (empresas) {
// 				var selected = _.find(empresas, function (item) { return item.id === param })
// 				next(selected)
// 			})
// 		}
// 	}

// })
