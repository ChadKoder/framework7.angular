/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class calendar
 * @interface calendar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:04:08 GMT+0530 (IST)
 */

describe('Unit: calendar', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('calendar', {
            $scope: scope,
            $rootScope: rootScope,
            $stateParams: stateParams,
            $log: log,
            $q: q
        });
    }));

    it('this is the sample test', function() {
        
    });

})