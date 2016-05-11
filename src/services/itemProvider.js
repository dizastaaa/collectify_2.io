'use strict';

/*Deja stockées en base
var items = [
    {'name': 'Django Unchained', 'category_id': 1},
    {'name': 'Forrest Gump', 'category_id': 1}
];*/

app.service('itemProvider', function ($firebase) {
    
    var ref = new Firebase("https://blistering-torch-5921.firebaseio.com/items");
    
    var sync = $firebase(ref);
    
    //Seulement la première fois lors de l'insertion des données
    //sync.$set('items', items);
    
    this.getItems = function () {
        return items;
    };
    
    this.create = function (item) {
        items.push(item);

        return items;
    };
});