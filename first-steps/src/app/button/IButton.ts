interface IButton {
  name: string;
  inputValue: string;
  title: string;
  isEnabled: boolean;
  clickFunction(): void;
  changeInputValue(e: Event): void;
  renderValue(): string;
}

export default IButton;
