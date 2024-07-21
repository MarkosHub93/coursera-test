(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
    $scope.textToCheck = "";
    $scope.message = "";
    $scope.color = "none";
    $scope.borderStyle = "none";

    $scope.checkIfTooMuch = function () {
        if ($scope.textToCheck == "") {
            $scope.message = "Please enter data first!";
            $scope.color = "red";
            $scope.borderStyle = "solid";
            return;
        }

        var numOfItems = calculateNumberOfItems($scope.textToCheck);
        
        if (numOfItems <= 3)
            $scope.message = "Enjoy!";
        else
            $scope.message = "Too much!";
        
        $scope.color = "green";
        $scope.borderStyle = "solid";
    }

    function calculateNumberOfItems (string) {
        var itemsArray = string.split(",");
        itemsArray = itemsArray.filter(function(e){return e.trim()}); 
        return itemsArray.length;
    }
}
})();