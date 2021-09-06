export default () => `
  <label class="input-field">
    <span class="input-field__label">{{ this.label }}</span>
    <input
      class="input-field__input"
      type="{{ this.type }}"
      name="{{ this.name }}"
      placeholder="{{ this.placeholder }}"
      autocomplete="{{ this.autocomplete }}"
      {{#if this.disabled }}
        disabled="{{ this.disabled }}"
      {{/if}}
      {{#if this.value }}
        value="{{ this.value }}"
      {{/if}}
    >
    {{#if this.hint }}
      <span class="input-field__description input-field__description_hint">{{ this.hintDescription }}</span>
    {{/if}}
  
    {{#if this.error }}
      <span class="input-field__description input-field__description_error">{{ this.errorDescription }}</span>
    {{/if}}
  </label>
`;