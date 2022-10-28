import React from "react";
import {screen, render, fireEvent} from '@testing-library/react'
import {Wordle} from '../Wordle'

const rend = () => (render(<Wordle />))

describe('Comprueba los elementos de la Pagina', () => {

    it('Comprueba que se muestre el texto WordleBattle', () => {
        rend()
        expect(screen.getByText(/WORDLE/i)).toBeInTheDocument()
    })
    it('comprueba que exista la imagen de copiar', () => {
        rend()
        expect(screen.getByRole('img', /wordle/i)).toBeInTheDocument()
    })
    it('Comprueba que exista el boton ENTER en el teclado en pantalla', () => {
        rend()
        expect(screen.getByText(/ENTER/i)).toBeInTheDocument()
    })
    it('Comprueba que exista el boton BORRAR en el teclado en pantalla', () => {
        rend()
        expect(screen.getByText(/BORRAR/i)).toBeInTheDocument()
    })
})

describe('Comprueba la funcionalidad del componente', () => {
    
    it('Comprueba que se pueda escribir en el input ID Contrincante', ()=>{
        rend()
        fireEvent.keyDown(window, {key: 'A', code: 'KeyA'})
        expect(screen.getByText(/^A$/i)).toBeInTheDocument()
    })
})