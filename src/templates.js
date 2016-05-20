module.exports={name: "app.templates"};//HEAD 
(function(app) {
try { app = angular.module("app.templates"); }
catch(err) { app = angular.module("app.templates", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("src/index.html","<!DOCTYPE html>\n" +
    "<html lang=\"en\" ng-app=\"app\">\n" +
    "<head>\n" +
    "  <meta charset=\"UTF-8\">\n" +
    "  <title>Test</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <users></users>\n" +
    "  <script src=\"build.js\" charset=\"utf-8\"></script>\n" +
    "</body>\n" +
    "</html>\n" +
    "")

$templateCache.put("src/user/user.component.html","<ul>\n" +
    "  <li ng-repeat=\"user in ::$ctrl.users\">{{::user}}</li>\n" +
    "</ul>\n" +
    "")
}]);
})();