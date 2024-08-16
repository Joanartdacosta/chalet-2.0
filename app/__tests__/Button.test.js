import { render } from "@testing-library/react";
import Button from "@/components/common/buttons/Button";

describe("Button Component", () => {
  test("renders a button with href prop and navigates to the correct URL", () => {
    render(<Button href="/test-url" label="Test Link" />);
    const buttonElement = document.querySelector("a");
    expect(buttonElement).toHaveAttribute("href", "/test-url");
  });

  test("renders a button with onClick prop and handles click event", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = document.querySelector("button");

    buttonElement.click();
    expect(handleClick).toHaveBeenCalled();
  });
});
