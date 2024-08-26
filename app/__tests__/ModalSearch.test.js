import { render, fireEvent, screen } from "@testing-library/react";
import ModalSearch from "@/components/dashboard/services/ModalSearch";

const setServices = jest.fn();

test("renders input and button correctly", () => {
  render(<ModalSearch setServices={setServices} />);

  expect(
    screen.getByPlaceholderText("Procure pelo servico que pretende")
  ).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("updates input value correctly", () => {
  render(<ModalSearch setServices={setServices} />);

  const input = screen.getByPlaceholderText(
    "Procure pelo servico que pretende"
  );
  fireEvent.change(input, { target: { value: "Design" } });
  expect(input.value).toBe("Design");
});
