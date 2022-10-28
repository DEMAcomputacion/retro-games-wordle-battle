import Row from "../Row";
import React from "react";
import {screen, render, fireEvent} from '@testing-library/react'

describe('Comprueba el renderizado del componente Row', () => {
    it('comprueba renderizado y funcionamiento', () => {
        render(<Row guess={""} currentGuess={'clase'} />)
        expect(screen.getByText(/c/i)).toBeInTheDocument()
        expect(screen.getByText(/l/i)).toBeInTheDocument()
        expect(screen.getByText(/a/i)).toBeInTheDocument()
        expect(screen.getByText(/s/i)).toBeInTheDocument()
        expect(screen.getByText(/e/i)).toBeInTheDocument()
    })
})