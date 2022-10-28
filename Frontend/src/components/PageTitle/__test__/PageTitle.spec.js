import PageTitle from "..";
import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Comprueba el renderizado del componente", () => {
  
  test("Comprueba que aparezca el titulo", () => {
    render(<PageTitle text={"Titulo"} icon={"test.svg"} />);
    expect(screen.getByText(/Titulo/i)).toBeInTheDocument();
  });

  test("Comprueba que aparezca el Icono", () => {
    render(<PageTitle text={"Titulo"} icon={"test.svg"} />);
    const ico = screen.getByRole("img");
    expect(ico).toHaveAttribute("src", "test.svg");
  });
});
