import React from 'react'
import Button from '../components/Button';

function UseEffect() {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    console.log('useEffect no dependency');
    return () => {
      console.log('clean up useEffect no dependency')
    }
  })

  React.useEffect(() => {
    console.log('useEffect has empty array');

    return () => {
      console.log('clean up useEffect has empty array')
    }
  }, []); // run once time during component mount

  React.useEffect(() => {
    console.log('useEffect has array dependency') 
    fetch(`https://jsonplaceholder.typicode.com/albums?_limit=10&_page=${page}`)
      .then(response => response.json())
      .then(json => setProducts(json))

    return () => {
      console.log('clean up useEffect has array dependency')
    }
  }, [page]); // re-run when denpendency change


  React.useLayoutEffect(() => {
    console.log('useLayoutEffect no dependency');
    return () => {
      console.log('clean up useLayoutEffect no dependency')
    }
  })

  function handeNextPage() {
    setPage(prevState => prevState + 1)
  }

  function handlePrevPage() {
    setPage(prevState => prevState - 1)
  }

  console.log('------------------')
  console.log('render component')
  return (
    <div>
      <h2>UseEffect</h2>
      {products.map(product => (
        <div key={product.id}>
          Id: {product.id} <br />
          Title: {product.title} <br />
        </div>
      ))}

      <Button text="Prev Page" handleClick={handlePrevPage} />
      <Button text="Next Page" handleClick={handeNextPage} />
    </div>
  )
}

export default UseEffect