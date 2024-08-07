(function () {
    'use strict';
    
angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {    
    var ctrlToBuy = this;
    ctrlToBuy.items = ShoppingListCheckOffService.getItems();
    ctrlToBuy.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
   var ctrlBought = this;
   ctrlBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var items = [];
    var boughtItems = [];

    items.push({name:"pizza", quantity:10});
    items.push({name:"cupcakes", quantity:10});
    items.push({name:"muffins", quantity:20});
    items.push({name:"brownies", quantity:15});
    items.push({name:"cookies", quantity:5});

    service.buyItem = function (itemIndex) {
        boughtItems.push(items[itemIndex]);
        items.splice(itemIndex, 1);
    }

    service.getItems = function () {
        return items;
    };

    service.getBoughtItems = function () {
        return boughtItems;
    };
}
    
})();