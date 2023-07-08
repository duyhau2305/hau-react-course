import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function List() {
  const [products, setProducts] = React.useState([
    { title: 'IPhone', price: 1000, isStock: true },
    { title: 'Ipad', price: 500, isStock: false },
    { title: 'Laptop', price: 1500, isStock: true },
  ]);
  const productData = products.map(product => ({
    ...product,
    id: uuidv4()
  }))
  console.log('List: ', { productData })

  return (
    <div>
      {productData.map(product => (
        <React.Fragment key={product.id}>
          <div>
            Id: {product.title} <br />
            Title: {product.name} <br />
            Price: {product.price} <br />
            Stock: {product.isStock ? 'In Stock' : 'Out of Stock'}
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  )
}


export default List;

// UI:    1, 2, 3, 4, 5
// index: 0, 1, 2, 3, 4
// delete: 3 => 1, 2, 4, 5
// index:       0, 1, 2, 3