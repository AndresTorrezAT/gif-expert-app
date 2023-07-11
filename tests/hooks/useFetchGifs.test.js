import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook usFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One Puch') ); // esta es la forma de llamar a un hook ( los hooks solo se llaman dentro de componentes )
        const { images, isLoading } = result.current;

        // console.log( images, isLoading );
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        
    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs('One Puch') ); 

        await waitFor( // tiene que esperar a que los usestate finalicen para eso sirve esa funcion waitFor
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        // console.log( images, isLoading );
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});