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

  test("updates input values correctly", () => {
    render(<Form />);

    const nameInput = screen.getByPlaceholderText("Nome");
    const emailInput = screen.getByPlaceholderText("Email");
    const messageInput = screen.getByPlaceholderText("Enter your message...");

    fireEvent.change(nameInput, { target: { value: "Joana" } });
    fireEvent.change(emailInput, {
      target: { value: "joana@example.com" },
    });
    fireEvent.change(messageInput, { target: { value: "Hello Joana!" } });

    expect(nameInput.value).toBe("Joana");
    expect(emailInput.value).toBe("joana@example.com");
    expect(messageInput.value).toBe("Hello Joana!");
  });
});
