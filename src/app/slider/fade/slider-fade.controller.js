'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class slider-fade
 * @interface slider-fade.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:31:57 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('slider-fade', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "slider-fade";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);