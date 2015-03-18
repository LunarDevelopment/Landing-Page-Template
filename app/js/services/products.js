'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function ProductsService($q, $http, $filter) {

    var selectedId = ''

    var productList = [{
        id: "1",
        name: "product_1",
        title: "The Grand Product #1",
        description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "turquoise",
        href: "app/project/product1",
        imgsrc: "images/ang.png"
    }, {
        id: "2",
        name: "product_2",
        title: "The Grand Product #2",
        description: ["Wayfarers Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "purple",
        href: "app/project/product2",
        imgsrc: "images/angular.png"
    }, {
        id: "3",
        name: "product_3",
        title: "The Grand Product #3",
        description: ["Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "orange",
        href: "app/project/product3",
        imgsrc: "images/browserify.png"
    }, {
        id: "4",
        name: "product_4",
        title: "The Grand Product #4",
        description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they ia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chre."],
        class: "pink",
        href: "app/project/product4",
        imgsrc: "images/element.png"
    }];

    var addProduct = function (newObj) {
        productList.push(newObj);
    }

    var getProducts = function () {
        return productList;
    }
    var setId = function (data) {
        selectedId = data;
    }

    var getSelectedProd = function () {
        var found = $filter('filter')(productList, {
            id: selectedId
        }, true);
        if (found.length) {
            return found[0];
        } else {
            return '0';
        }
    }

    return {
        addProduct: addProduct,
        getProducts: getProducts,
        setId: setId,
        getSelectedProd: getSelectedProd
    };

}

servicesModule.service('ProductsService', ProductsService);