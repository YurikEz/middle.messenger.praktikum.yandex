"use strict";
exports.__esModule = true;
/**
 * Проверяем на пустоту
 * @param value
 * @returns {boolean}
 */
exports["default"] = (function (value) {
    var isArray = Array.isArray(value);
    var isObject = typeof value === 'object';
    var isNumber = typeof value === 'number';
    var isBoolean = typeof value === 'boolean';
    var isNull = value === null;
    if (isNull || isNumber || isBoolean) {
        return true;
    }
    if (isArray) {
        return !value.length;
    }
    if (isObject) {
        return !((value === null || value === void 0 ? void 0 : value.size) || Object.keys(value).length);
    }
    return !value;
});
