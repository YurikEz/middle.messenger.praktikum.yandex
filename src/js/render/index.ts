import getTemplate from './getTemplate';

export default (route: string) => {
  const root = <HTMLDivElement>document.getElementById('root');
  root.innerHTML = getTemplate(route);
};