"use strict";
exports.__esModule = true;
var isArray_1 = require("./isArray");
/**
 * Находим последний элемент массива
 * @param value
 * @returns {*}
 */
exports["default"] = (function (value) {
    if ((0, isArray_1["default"])(value)) {
        var lastIndex = value.length - 1;
        return value[lastIndex];
    }
    return value === null || value === void 0 ? void 0 : value.length;
});
