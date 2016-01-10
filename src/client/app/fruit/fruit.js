(function() {
    'use strict';
    angular.module('app.fruit')
        .controller('FruitController', fruitController);
        
    function fruitController() {
        var vm = this;
        vm.fruit = [
            'Pear',
            'Banana',
            'Strawberry',
            'Apple',
            'Kiwi'    
        ];
    }
})();