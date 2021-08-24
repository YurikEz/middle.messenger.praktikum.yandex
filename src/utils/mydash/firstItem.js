import isArray from './isArray';

/**
 * Находим 1 элемент в массиве
 * @param value
 * @returns {*}
 */
export default value => {
  if (isArray(value)) {
    const firstIndex = 0;
    return value[firstIndex];
  }

  return value?.length;
};