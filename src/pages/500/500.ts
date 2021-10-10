import Block from '../../utils/Block';

export class _500 extends Block {
  render(): string {
    return `
      <section>
        {{{
            Title
              label="500"
              extendClass="title--big"
        }}}
        {{{
            Title
              label="Сохраняйте спокойстиве и возвращайтесь в свой чат"
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