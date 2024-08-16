import { render, fireEvent } from "@testing-library/react";
import FlipCard from "@/components/dashboard/advantages/card/FlipCard";

describe("FlipCard Component", () => {
  test("should flip the card on click", () => {
    const { container } = render(
      <FlipCard
        imgURL="https://example.com/image.jpg"
        alt="Example Image"
        title="Card Title"
        description="Card Description"
      />
    );

    const card = container.querySelector(".rotate-card");
    expect(card).toHaveClass("rotate-card");

    fireEvent.click(card);

    setTimeout(() => {
      expect(card).toHaveClass("rotate-y-180");
    }, 500);
  });
});
