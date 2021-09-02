import Title from "../../components/title";

const title = new Title({
  label: 'Click me thasdhas',
  extendClass: '',
});

console.log('title', title);

setTimeout(() => {
  console.log('2132')
  title.setProps({
    label: 'kek'
  })

}, 3000)

export default `
  <section class="section-wrapper">
    ${title._element.innerHTML}
  </section>
`;