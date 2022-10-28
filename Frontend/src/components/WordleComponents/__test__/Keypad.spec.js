import Keypad from "../Keypad";
import React from "react";
import { screen, render } from "@testing-library/react";

describe('Prueba el renderizado y funcionamiento del componente Keypad', () => {
    it('Renderizado')
    render(<Keypad keys="a" usedKeys={["a", "b"]} />)
    screen.debug()
})