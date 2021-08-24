// TODO: Плохой подхож, исправить при написании более продвинутого роутинга
/**
 * Переключаем шаблоны
 * @param root
 * @param template
 * @returns {*}
 */
export default (root, template) => root.innerHTML = template;