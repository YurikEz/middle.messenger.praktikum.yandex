"use strict";
exports.__esModule = true;
require("./getStyle");
require("./getModules");
var foundedInputs_1 = require("./foundedInputs");
var getRoute_1 = require("./getRoute");
var router_1 = require("./router");
var render_1 = require("./render");
var validator_1 = require("./validator");
document.addEventListener('DOMContentLoaded', function () {
    var route = (0, getRoute_1["default"])();
    var page = (0, router_1["default"])(route);
    (0, render_1["default"])(page);
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function (item) { return item.addEventListener('click', handleButtonClick); });
    function handleButtonClick(e) {
        e.preventDefault();
        var elements = e.target.form.firstElementChild.children;
        var inputs = (0, foundedInputs_1["default"])(elements);
        var isValidate = (0, validator_1["default"])(inputs);
        console.log('isValidate', isValidate);
    }
});
