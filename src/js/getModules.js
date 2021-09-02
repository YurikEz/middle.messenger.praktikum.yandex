"use strict";
exports.__esModule = true;
var handlebars_runtime_1 = require("handlebars/dist/handlebars.runtime");
var modules_1 = require("../../src/modules");
for (var _i = 0, _a = Object.entries(modules_1["default"]); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    handlebars_runtime_1["default"].registerPartial(key, value);
}
