
angular.module('widow.storage', ['LocalForageModule']) 

.factory('Storage', function ($localForage) {
	
	var res = function (name, url) {

		// Table name
		this.name = name.toLowerCase()

		// Resource URL
		this.url = url

		console.log('Construyendo un objeto Storage de nombre "' + this.name + '"')

		$localForage
		.getItem(this.name)
		.then(function (items) {
			if(items == undefined) {
				$localForage.setItem(name.toLowerCase(), [])
			}
		})

	}

	res.prototype.all = function (next) {
		console.log("Ejecutando Storage.all()")

		$localForage
		.getItem(this.name)
		.then(function (items) { // Rows
			next(items)
		})

	}

	res.prototype.find = function (query, next) {
		console.log("Ejecutando Storage.find(query, next)")

		$localForage
		.getItem(this.name)
		.then(function (items) { // Rows
			next(
				_.find(items, function (item) { // Find
					var res = true
					_.each(query, function (value, key) {
						res = res * ( item[key] === value )
					})
					return res === 1 // return Boolean
				})
			)
		})
	}

	res.prototype.save = function (dude, next) {
		console.log("Ejecutando Storage.save(dude, next)")
		var self = this

		if(dude.id === undefined)
			dude.id = "tmp-" + new Date().getTime()

		$localForage
		.getItem(this.name)
		.then(function (items) {
			var flag = true
			_.each(items, function (value, key) {
				if(value.id == dude.id) {
					items[key] = dude // Update
					flag = false
				}
			})
			if(flag)
				items.push(dude) // Insert
			
			$localForage
			.setItem(self.name, items)
			.then(function (items) {
				if(next)
					next(dude)
			})

		})
	}

	// Util
	res.prototype.clear = function (next) { // Clear the table
		console.log("Ejecutando Storage.clear(" + this.name + ")")

		$localForage
		.setItem(this.name, [])
		.then(next)
	}

	res.prototype.count = function (next) {
		console.log("Ejecutando Storage.count()")

		$localForage
		.getItem(this.name)
		.then(function (items) {
			if(items == undefined)
				next(0)
			else
				next(items.length)
		})
	}


	return res

})
