import Block from '../../utils/Block';

export class _404 extends Block {
  render(): string {
    return `
      <section>
        {{{
            Title
              label="404"
              extendClass="title--big"
        }}}
        {{{
            Title
              label="Возможно эту страницу кто-то уволок..."
        }}}
        {{{
            Link
              label="Вернуться в чат"
              href=""
        }}}
      </section>
    `;
  }
}