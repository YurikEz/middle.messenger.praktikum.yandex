"use strict";
exports.__esModule = true;
var isArray_1 = require("./isArray");
/**
 * Находим 1 элемент в массиве
 * @param value
 * @returns {*}
 */
exports["default"] = (function (value) {
    if ((0, isArray_1["default"])(value)) {
        var firstIndex = 0;
        return value[firstIndex];
    }
    return value === null || value === void 0 ? void 0 : value.length;
});
