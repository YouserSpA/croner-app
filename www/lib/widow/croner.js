
Date.diff = function () {
	console.log("Ejecutando Date.diff()")

	if(arguments.length != 1 || typeof arguments[0] != "number") {
		throw("wrong number of arguments or types at Date.diff (Croner)")
		return
	}

	var then = arguments[0]
	var now = new Date().getTime()
	var res = (now - then)	

	var hours = 	Math.floor(res / (1000 * 60 * 60))
	res -= hours * (1000 * 60 * 60)

	var minutes = 	Math.floor(res / (1000 * 60))
	res -= minutes * (1000 * 60)

	var seconds = 	Math.floor(res / (1000))
	res -= seconds * (1000)

	return (((hours < 10) ? "0" : "") +
		hours 
		+ ":" + 
		((minutes < 10) ? "0" : "") +
		minutes 
		+ ":" + 
		((seconds < 10) ? "0" : "") +
		seconds);

}

Date.watch = function () {
	console.log("Ejecutando Date.watch()")

	if(arguments.length != 4 || typeof arguments[1] != "string" || typeof arguments[2] != "string" || typeof arguments[3] != "number") {
		console.log(arguments)
		throw("wrong number of arguments or types at Date.watch (Croner)")
		return
	}

	var scope = arguments[0]
	var clock = arguments[1]
	var stop = arguments[2]
	var then = arguments[3]

	scope[clock] = Date.diff(then)
	console.log(scope[clock])
	if(!scope.$$phase)
		scope.$apply()

	if(scope.selected[stop]) {
		setTimeout(function() {
			Date.watch(scope, clock, stop, then)
		}, 500)
	}
}
