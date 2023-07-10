import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        // setCategories( categories => [inputValue, ...categories]); el set... contiene los valores que se tiene hasta el momento
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
            
        <form onSubmit={ onSubmit } aria-label="from" >
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
