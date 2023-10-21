interface IButton {
  name: string;
  inputValue: string;
  title: string;
  isEnabled: boolean;
  clickFunction(): void;
  changeInputValue(e: Event): void;
}

export default IButton;
