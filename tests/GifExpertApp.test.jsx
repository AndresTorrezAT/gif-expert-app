import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";



describe('Pruebas en <GifExpertApp />', () => {

    test('el primer render del GifExpert', () => {

        const {container} = render( <GifExpertApp /> );
        expect(container).toMatchSnapshot();

        // screen.debug();
    });
});