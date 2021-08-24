import isArray from './isArray';

/**
 * Находим последний элемент массива
 * @param value
 * @returns {*}
 */
export default value => {
  if (isArray(value)) {
    const lastIndex = value.length - 1;
    return value[lastIndex];
  }

  return value?.length;
};