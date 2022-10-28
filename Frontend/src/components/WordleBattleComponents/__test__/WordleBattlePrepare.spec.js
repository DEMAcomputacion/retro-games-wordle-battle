import React from "react";
import {screen, render, fireEvent} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import WordleBattlePrepare from '../WordleBattlePrepare'

const rend = () => (render(<WordleBattlePrepare />))

describe('Comprueba los elementos de la Pagina', () => {

    it('Comprueba que exista el texto Mi Id#', () => {
        rend()
        expect(screen.getByText(/mi id/i)).toBeInTheDocument()
    })
    it('Comprueba que exista el texto Contrincante', () => {
        rend()
        expect(screen.getByText(/contrincante/i)).toBeInTheDocument()
    })
    it('Comprueba que exista el texto Estado', () => {
        rend()
        expect(screen.getByText(/estado/i)).toBeInTheDocument()
    })
    it('comprueba que exista la imagen de copiar', () => {
        rend()
        const ico = screen.getByRole("img");
        expect(ico).toHaveAttribute("src", "copy-icon.png");
    })
    it('Comprueba que exista el boton Invitar', () => {
        rend()
        expect(screen.getByText(/invitar/i)).toBeInTheDocument()
    })
})

describe('Comprueba la funcionalidad del componente', () => {
    
    it('Comprueba que se pueda escribir en el input ID Contrincante', ()=>{
        rend()
        const idcontrincante = screen.getByLabelText('idContrincante')
        fireEvent.change(idcontrincante, {target: {value: 'id_random'}})
        expect(idcontrincante.value).toBe('id_random')
    })

    it('Comprueba que cambie el estado al hacer click en invitar', ()=>{
        rend()
        const invitar = screen.getByLabelText('invitar')
        fireEvent.click(invitar)
        expect(screen.getByText(/No puedes introducir tu propio ID#/i)).toBeInTheDocument()
    })



})