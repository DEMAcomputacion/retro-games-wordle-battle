import Grid from "../Grid";
import React from "react";
import {screen, render, fireEvent} from '@testing-library/react'

describe('Comprueba el renderizado del componente RemoteGrid', () => {
    it('comprueba el renderizado', () => {
        render(<Grid guesses={[""]} />)
        screen.debug()
    })
})