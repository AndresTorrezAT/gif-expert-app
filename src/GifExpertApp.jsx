import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Puch', 'Dragon Ball']);

  const onAddCategory = ( newCategory ) => {
    // console.log(newCategory);
    setCategories([ newCategory, ...categories ]);
    // setCategories( cat => [ ...cat, 'Valorant' ]);
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategories={ setCategories } 
          onNewCategory={ (value) => onAddCategory(value) }
        />

        {/* Listado de Gif */}
        <ol>
          {
            categories.map( category => {
              return <li key={ category }>{ category }</li>
            })
          }

          {/* <li>ABC</li> */}
        </ol>

            {/* Gif Item */}
    </>
  )
}

// video 6

// AyOAbVAdFoCFnl4PTCgHaZ9MGtVnxSru