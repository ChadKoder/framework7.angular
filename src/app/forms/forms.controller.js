'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class forms
 * @interface forms.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:05:11 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('forms', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "forms";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);