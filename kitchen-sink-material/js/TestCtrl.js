angular.module('AngularApp')
.controller('TestCtrl', ['$scope', function(){
	$scope.testResult = 'Off';
	
	$scope.testClick1 = function (){
		//myApp.alert('clicked this test, it is bound!');
		if ($scope.testResult === 'Off'){
			$scope.testResult = 'On';
		} else {
			$scope.testResult = 'Off';
		}
	};
	
});