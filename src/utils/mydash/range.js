/**
 * Создаем последовательность чисел
 * @param start
 * @param end
 * @param step
 * @param isRight
 * @returns {[]}
 */
export default (start = 0, end = start, step = 1, isRight) => {
  const isStartAndEnd = start && end && start !== end;
  const isZeroStep = step === 0;
  const isNegative = end < 0;

  let result = [];

  start = isStartAndEnd ? start : 0;

  if (isZeroStep) {
    for (let i = start; i < end; i++) {
      result.push(start);
    }
  } else {
    for (let i = start; isNegative ? i > end : i < end;) {
      result.push(i);

      i = isNegative ? i - step : i + step;
    }
  }

  return isRight ? result.reverse() : result;
};
