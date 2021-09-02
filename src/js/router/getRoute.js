"use strict";
exports.__esModule = true;
var index_1 = require("../../src/utils/mydash/index");
exports["default"] = (function () {
    var pathname = window.location.pathname;
    var currentRoute;
    if (pathname.length === 1 && pathname === '/') {
        currentRoute = 'login';
    }
    else {
        currentRoute = index_1["default"].lastItem(pathname.split('/').filter(index_1["default"].identity));
    }
    if (currentRoute === '500') {
        currentRoute = '_500';
    }
    if (pathname === '/profile/edit/data' && currentRoute === 'data') {
        currentRoute = 'profileEditData';
    }
    if (pathname === '/profile/edit/password' && currentRoute === 'password') {
        currentRoute = 'profileEditPassword';
    }
    return currentRoute;
});
