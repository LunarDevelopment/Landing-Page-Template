'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function PrivacyService($q, $http) {

    var privacyInfo = {
        title: "Privacy & Terms",
        description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: ""
    };
    
    var additionalInfo = [{
        title: "Header #1",
        description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "",
        imgsrc: "images/ang.png"
    }, {
        title: "Header #2",
       description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "",
        imgsrc: "images/angular.png"
    }, {
        title: "Header #3",
        description: ["Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore.", "Wayfarers Blue Bottle narwhal, chillwave mustache ethical Pitchfork Pinterest slow-carb viral before they sold out salvia brunch. Shabby chic mlkshk cred banjo, tote bag health goth iPhone American Apparel Intelligentsia mumblecore."],
        class: "",
        imgsrc: "images/browserify.png"
    }];

    var addInfo = function (newObj) {
        additionalInfo.push(newObj);
    }

    var getInfo = function () {
        return additionalInfo;
    }
     var getHead = function () {
        return privacyInfo;
    }
    
    return {
        addInfo: addInfo,
        getHead: getHead,
        getInfo: getInfo
    };

}

servicesModule.service('PrivacyService', PrivacyService);