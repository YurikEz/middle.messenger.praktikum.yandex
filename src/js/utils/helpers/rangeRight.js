"use strict";
exports.__esModule = true;
var range_1 = require("./range");
/**
 * Создаем последовательность чисел range в обратном порядке
 * @param start
 * @param end
 * @param step
 * @returns {*[]}
 */
exports["default"] = (function (start, end, step) { return (0, range_1["default"])(start, end, step, true); });
