import { render, fireEvent, screen } from "@testing-library/react";
import ModalSearch from "@/components/dashboard/services/ModalSearch";

const mockServices = [
  { projectType: "Design", type: "Design" },
  { projectType: "Decor", type: "Decor" },
  { projectType: "Home Staging", type: "Staging" },
];

const setServices = jest.fn();

describe("ModalSearch Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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
});
