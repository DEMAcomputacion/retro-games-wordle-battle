import RemoteGrid from "../RemoteGrid";
import React from "react";
import {screen, render, fireEvent} from '@testing-library/react'

describe('Comprueba el renderizado del componente RemoteGrid', () => {
    it('comprueba el renderizado', () => {
        render(<RemoteGrid guesses={[""]} />)
        screen.debug()
    })
})