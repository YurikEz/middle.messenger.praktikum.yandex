/**
 * Находим все input формы
 * @param elements
 * @returns {[]}
 */
export default (elements) => {
  const result: HTMLInputElement[] = [];

  for (let key in elements) {
    if (elements.hasOwnProperty(key) && elements[key].classList.contains('input-field')) {
      result.push(elements[key].control);
    }
  }

  return result;
}