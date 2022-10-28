import Grid from "../Grid";
import React from "react";
import {screen, render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


const guesses =  [
{key: 's', color: 'grey'},
{key: 'd', color: 'grey'},
{key: 'f', color: 'green'},
{key: 'g', color: 'grey'},
{key: 'h', color: 'grey'},
]

describe('Comprueba el renderizado del componente Grid', () => {
    test('comprueba el renderizado', () => {
        const view = render(<Grid guesses={[[guesses],[guesses],"","","",""]} currentGuess={guesses} turn={"1"} />)
        view.debug()
    })
})