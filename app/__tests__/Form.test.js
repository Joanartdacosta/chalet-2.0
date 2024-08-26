import { render, fireEvent, screen } from "@testing-library/react";
import Form from "@/components/dashboard/contacts/form/Form";

describe("Form Component", () => {
  test("renders the form correctly", () => {
    render(<Form />);

    expect(screen.getByText("PECA O SEU ORCAMENTO")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your message...")
    ).toBeInTheDocument();
    expect(screen.getByText("Enviar")).toBeInTheDocument();
  });

  test("changes button color and label when clicked", () => {
    render(<Form />);

    const button = screen.getByText("Enviar");

    expect(button).toHaveStyle({ background: "#e9dccf" });

    fireEvent.click(button);

    expect(button).toHaveStyle({ background: "#a89582" });
    expect(button.textContent).toBe("Enviado");
  });

  test.each([
    { placeholder: "Nome", value: "Joana", result: "Joana" },
    {
      placeholder: "Email",
      value: "joana@example.com",
      result: "joana@example.com",
    },
    {
      placeholder: "Enter your message...",
      value: "Hello Joana!",
      result: "Hello Joana!",
    },
  ])(
    "updates input with placeholder '%s' correctly",
    ({ placeholder, value, result }) => {
      render(<Form />);

      const inputElement = screen.getByPlaceholderText(placeholder);

      fireEvent.change(inputElement, { target: { value } });

      expect(inputElement.value).toBe(result);
    }
  );
});
