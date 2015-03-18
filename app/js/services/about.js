'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function AboutService($q, $http) {

    var aboutInfo = {
        title: "About Us",
        description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: ""
    };
    
    var additionalInfo = [{
        title: "Promo #1",
       description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "",
        imgsrc: "images/ang.png"
    }, {
        title: "Promo #2",
       description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "",
        imgsrc: "images/angular.png"
    }, {
        title: "Promo #3",
        description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "",
        imgsrc: "images/browserify.png"
    }, {
        title: "Promo #4",
       description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "",
        imgsrc: "images/small.png"
    }, {
        title: "Promo #5",
       description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "",
        imgsrc: "images/element.png"
    }];

    var addInfo = function (newObj) {
        additionalInfo.push(newObj);
    }

    var getInfo = function () {
        return additionalInfo;
    }
     var getHead = function () {
        return aboutInfo;
    }
    
    return {
        addInfo: addInfo,
        getHead: getHead,
        getInfo: getInfo
    };

}

servicesModule.service('AboutService', AboutService);