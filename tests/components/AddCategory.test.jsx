import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } /> );

        const input = screen.getByRole('textbox');

        // screen.debug(); // para ver el html simurado

        fireEvent.input( input, { target: { value: 'Saitama' } } ); // el evento input es como si el usuario escribiera

        expect( input.value ).toBe('Saitama');

        
    })

    test('debe de llamar onNewCategory si el input tiene  un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); // esto es un MOCK una funcion simulada // funcion de testing

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox'); // estos son referencias al html que tiene la ultima modificacion en todo momento
        const form = screen.getByRole('form'); // estos son referencias al html que tiene la ultima modificacion en todo momento

        fireEvent.input( input, { target: { value: 'Saitama' } } );
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe(''); // el input funciona por que es una referencia en tiempo real

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    })

    test('no debe de llamar el onNewCategory si el inpu esta vacio', () => {

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);

        
    })

})