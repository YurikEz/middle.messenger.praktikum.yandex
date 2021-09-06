export default () => `
  <div class="open-chat {{#if this.selectedChat }}open-chat--active{{/if}}">
    {{#if this.selectedChat }}
      <div class="open-chat__header">
        <div class="open-chat__header-info">
          <div class="open-chat__header-avatar">
            {{#if this.avatar }}
              <img src="{{ this.avatar }}" alt="avatar">
            {{else}}
              <div class="open-chat__header-avatar-default"></div>
            {{/if}}
          </div>
          <div class="open-chat__header-title">{{ this.selectedChat.title }}</div>
        </div>
        <button class="open-chat__header-settings">
          <img src="/image/icons/dots.svg" alt="dots">
        </button>
      </div>
      <div class="open-chat__messages">
        {{ this.messages }}
      </div>
      <div class="open-chat__controls">
        <button class="open-chat__button-upload" type="button">
          <img src="/image/icons/upload.svg" alt="upload">
        </button>
        <input class="open-chat__input" type="text" name="message" placeholder="Сообщение">
        <button class="open-chat__button-send" type="button">
          <img src="/image/icons/send.svg" alt="send">
        </button>
      </div>
    {{else}}
      <div class="open-chat__empty">
        <h3 class="open-chat__empty-title">Выберите чат чтобы отправить сообщение</h3>
      </div>
    {{/if}}
  </div>
`;