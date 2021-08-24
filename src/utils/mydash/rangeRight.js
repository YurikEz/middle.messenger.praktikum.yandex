import range from './range';
/**
 * Создаем последовательность чисел range в обратном порядке
 * @param start
 * @param end
 * @param step
 * @param isRight
 * @returns {*[]}
 */
export default (start, end, step, isRight = true) => range(start, end, step, isRight);