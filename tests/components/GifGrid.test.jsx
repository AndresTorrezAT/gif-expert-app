import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({ // remplaza al custom hook que esta dentro del GifGrid - ya no ingresa a ese
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
          
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: 'DEFx',
                title: 'Vegeta',
                url: 'https://localhost/vegeta.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false

        });

        render( <GifGrid category={ category } /> );
        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);

    })

});