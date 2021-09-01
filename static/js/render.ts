export default (page: string) => {
    const root = <HTMLDivElement>document.getElementById('root');
    root.innerHTML = page;
};