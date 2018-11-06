import { render } from '../src/js/mini';
import { App } from '../src/js/components/app';
import { Word } from '../src/js/components/word';
import { Char } from '../src/js/components/char';
import { Logo } from '../src/js/components/logo';
import { GithubCorner } from '../src/js/components/github-corner';
import { ChangeButton } from '../src/js/components/change-button';
import { Rebus } from '../src/js/components/rebus';

jest.mock('../src/js/store', () => ({
  connect: arg => arg
}));

const mockState = {
  current: 0,
  animation: 'none',
  rebuses: [
    {
      symbols: ['😍', '👍', '😍'],
      words: ['one', 'two'],
      input: [...Array(6)],
      isAnswered: false
    }
  ]
};

describe('Tests for components', () => {
  describe('App', () => {
    it('renders correctly', () => {
      const wrapper = App(Logo());
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render()).toMatchSnapshot();
    });
  });
  describe('Rebus', () => {
    it('renders correctly', () => {
      const props = mockState;
      const wrapper = Rebus(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
    });
    it('renders correctly (when rebus is answered)', () => {
      const props = { ...mockState };
      props.rebuses[0].isAnswered = true;
      const wrapper = Rebus(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
    });
    it('renders correctly (with animation class)', () => {
      const props = { ...mockState, animation: 'flip-vertical-right' };
      const wrapper = Rebus(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
      props.rebuses[0].isAnswered = false;
    });
  });
  describe('Word', () => {
    it('renders correctly', () => {
      const props = { word: 'one', wordIndex: 0, charInput: jest.fn() };
      const wrapper = Word(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
    });
    it('correctly registers onInput handlers for each char', () => {
      const onInput = jest.fn();
      const props = { ...mockState, word: 'one', wordIndex: 0, charInput: onInput };
      const root = document.createElement('div');
      render(Word(props), root);
      const inputElement = root.querySelector('input');
      inputElement.value = 'T';
      inputElement.dispatchEvent(new Event('input'));
      expect(onInput).toHaveBeenCalledWith('T', 0, 0);
    });
    it('jumps to next input field when a letter is pressed', () => {
      const onInput = jest.fn();
      const props = { ...mockState, word: 'one', wordIndex: 0, charInput: onInput };
      const root = document.createElement('div');
      render(Word(props), root);
      const inputs = root.querySelectorAll('input');
      inputs[0].focus();
      inputs[0].value = 'T';
      inputs[0].dispatchEvent(new Event('input'));
      expect(inputs[1] === document.activeElement).toEqual(true);
    });
    it('remains on the same input field when a character that is not a letter is pressed', () => {
      const onInput = jest.fn();
      const props = { ...mockState, word: 'one', wordIndex: 0, charInput: onInput };
      const root = document.createElement('div');
      render(Word(props), root);
      const inputs = root.querySelectorAll('input');
      inputs[0].focus();
      inputs[0].value = '!';
      inputs[0].dispatchEvent(new Event('input'));
      expect(inputs[0] === document.activeElement).toEqual(true);
    });
    it('jumps to the previous input field when pressing backspace in empty field', () => {
      const onInput = jest.fn();
      const props = { ...mockState, word: 'one', wordIndex: 0, charInput: onInput };
      const root = document.createElement('div');
      render(Word(props), root);
      const inputs = root.querySelectorAll('input');
      const mockEvent = new Event('keydown');
      mockEvent.key = 'Backspace';
      inputs[1].focus();
      inputs[1].dispatchEvent(mockEvent);
      expect(inputs[0] === document.activeElement).toEqual(true);
    });
    it('remains on the same input field when pressing backspace in non empty field', () => {
      const onInput = jest.fn();
      const props = { ...mockState, word: 'one', wordIndex: 0, charInput: onInput };
      const root = document.createElement('div');
      render(Word(props), root);
      const inputs = root.querySelectorAll('input');
      const mockEvent = new Event('keydown');
      mockEvent.key = 'Backspace';
      inputs[1].focus();
      inputs[1].value = 'T';
      inputs[1].dispatchEvent(mockEvent);
      expect(inputs[1] === document.activeElement).toEqual(true);
    });
  });
  describe('Char', () => {
    it('renders correctly (without value)', () => {
      const props = { ...mockState, wordIndex: 0, charIndex: 1 };
      const wrapper = Char(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
    });
    it('renders correctly (with value and single word)', () => {
      const props = { ...mockState, wordIndex: 0, charIndex: 1 };
      props.rebuses[0].input[1] = 'c';
      const wrapper = Char(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
    });
    it('renders correctly (with value and multiple words)', () => {
      const props = { ...mockState, wordIndex: 1, charIndex: 1 };
      props.rebuses[0].input[4] = 'c';
      const wrapper = Char(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
    });
    it('disables inputs when rebus is answered', () => {
      const props = mockState;
      props.rebuses[0].isAnswered = true;
      const root = document.createElement('div');
      render(Char(props), root);
      const input = root.querySelector('input');
      expect(input.disabled).toEqual(true);
    });
  });
  describe('ChangeButton', () => {
    it('renders correctly (without className prop)', () => {
      const props = {};
      const wrapper = ChangeButton(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
    });
    it('renders correctly (with className prop)', () => {
      const props = { className: 'test' };
      const wrapper = ChangeButton(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
    });
  });
  describe('GithubCorner', () => {
    it('renders correctly', () => {
      const props = { url: 'test' };
      const wrapper = GithubCorner(props);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render(props)).toMatchSnapshot();
    });
  });
  describe('Logo', () => {
    it('renders correctly', () => {
      const wrapper = Logo();
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.render()).toMatchSnapshot();
    });
  });
});
