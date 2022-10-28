import RemoteRow from "../RemoteRow";
import React from "react";
import {screen, render, fireEvent} from '@testing-library/react'

const rend = () => (render(<RemoteRow />))

describe('Comprueba el renderizado del componente RemoteRow', () => {
    it('comprueba el renderizado', () => {
        render(<RemoteRow guess={""} currentGuess={'clase'} />)
        expect(screen.getByText(/c/i)).toBeInTheDocument()
        expect(screen.getByText(/l/i)).toBeInTheDocument()
        expect(screen.getByText(/a/i)).toBeInTheDocument()
        expect(screen.getByText(/s/i)).toBeInTheDocument()
        expect(screen.getByText(/e/i)).toBeInTheDocument()
    })
})