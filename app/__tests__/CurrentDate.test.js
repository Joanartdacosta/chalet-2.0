import { render } from "@testing-library/react";
import CurrentDate from "@/components/common/footer/CurrentDate";

describe("CurrentDate Component", () => {
  test("renders the copyright text correctly", () => {
    const { getByText } = render(<CurrentDate />);

    expect(getByText("© CHALET - Mariana Batista Ramadas")).toBeInTheDocument();
  });

  test("renders the current year correctly", () => {
    const currentYear = new Date().getFullYear();
    const { getByText } = render(<CurrentDate />);

    expect(
      getByText(`${currentYear} website developed by Joana Costa`)
    ).toBeInTheDocument();
  });
});
