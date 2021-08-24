/**
 * Проверяем на пустоту
 * @param value
 * @returns {boolean}
 */
export default value => {
  const isArray = Array.isArray(value);
  const isObject = typeof value === 'object';
  const isNumber = typeof value === 'number';
  const isBoolean = typeof value === 'boolean';
  const isNull = value === null;

  if (isNull) {
    return isNull;
  }

  if (isNumber) {
    return isNumber;
  }

  if (isBoolean) {
    return isBoolean;
  }

  if (isArray) {
    return !value.length;
  }

  if (isObject) {
    return !(value?.size || Object.keys(value).length);
  }

  return !value;
};