'use strict';

/*Deja Stockées en Base via le SYNC
var categories = [
    {'id': 1, 'name': 'films'},
    {'id': 2, 'name': 'musiques'}
];*/

app.service('categoryProvider', function ($firebase) {
    
       var ref = new Firebase("https://blistering-torch-5921.firebaseio.com/");
    
    var sync = $firebase(ref);
    
    //Une fois stockée plus besoin
    //sync.$set('categories', categories);
    
    this.getCategories = function () {
        return categories;
    }

    this.create = function (category) {
        category['id'] = categories.length + 1;
        categories.push(category);

        return items;
    }
});