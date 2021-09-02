"use strict";
exports.__esModule = true;
var pages_1 = require("../../src/pages");
var getState_1 = require("./getState");
exports["default"] = (function (route) {
    var checkRoute = pages_1["default"].hasOwnProperty(route);
    var currentRoute = checkRoute ? route : '_404';
    var currentPage = function (context, options) {
        return pages_1["default"][currentRoute](context, options);
    };
    var currentState = getState_1["default"][currentRoute];
    return currentPage(currentState);
});
