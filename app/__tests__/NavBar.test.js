import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "@/components/common/navbar/NavBar.js";

test("renders all links", () => {
  render(<NavBar />);

  expect(screen.getByText("SOBRE MIM")).toBeInTheDocument();
  expect(screen.getByText("CONTACTOS")).toBeInTheDocument();
  expect(screen.getByText("SERVIÇOS")).toBeInTheDocument();
  expect(screen.getByText("PROJETOS")).toBeInTheDocument();
});
