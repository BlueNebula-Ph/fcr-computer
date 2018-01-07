(function(){
	'use strict';

	angular
		.module("fcrApp", [])
		.controller("computeController", [function() {
			var vm = this;

			vm.feeds = 0;
			vm.totalWeight = 0;

			vm.expectedLw = () => {
				return vm.feeds * 50 / 2.1;
			};
			vm.weightSurplus = () => {
				return vm.expectedLw() - vm.totalWeight;
			};
			vm.actualFcr = () => {
				return vm.feeds * 50 / vm.totalWeight;
			};

			return vm;
		}]);
})();