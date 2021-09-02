"use strict";
exports.__esModule = true;
/**
 * Находим все input формы
 * @param elements
 * @returns {[]}
 */
exports["default"] = (function (elements) {
    var result = [];
    for (var key in elements) {
        if (elements.hasOwnProperty(key) && elements[key].classList.contains('input-field')) {
            result.push(elements[key].control);
        }
    }
    return result;
});
