/**
 * @jest-environment jsdom
 */
import Block from './Block';

interface TestProps {}

class TestBlock extends Block<TestProps> {
  constructor(props: {}) {
    super(props);
  }

  componentWillUpdate() {}

  componentShouldUpdate() {
    return true;
  }

  render() {
    return '';
  }
}

describe('Block', () => {
  const createInstance = (props: {}) => new TestBlock(props);

  it('checking props on constructor', () => {
    const props = { test: 'test' };

    const instance = createInstance(props);

    expect(instance.props).toEqual(props);
  });

  it('check uniq id', () => {
    const props = { test: 'test' };

    const instance = createInstance(props);

    expect(typeof instance.id).toBe('string');
  });
});