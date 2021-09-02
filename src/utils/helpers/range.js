"use strict";
exports.__esModule = true;
/**
 * Создаем последовательность чисел
 * @param start
 * @param end
 * @param step
 * @param isRight
 * @returns {[]}
 */
exports["default"] = (function (start, end, step, isRight) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = start; }
    if (step === void 0) { step = 1; }
    var isStartAndEnd = start && end && start !== end;
    var isZeroStep = step === 0;
    var isNegative = end < 0;
    var result = [];
    start = isStartAndEnd ? start : 0;
    if (isZeroStep) {
        for (var i = start; i < end; i++) {
            result.push(start);
        }
    }
    else {
        for (var i = start; isNegative ? i > end : i < end;) {
            result.push(i);
            i = isNegative ? i - step : i + step;
        }
    }
    return isRight ? result.reverse() : result;
});
