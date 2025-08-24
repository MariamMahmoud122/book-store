// import React, { useEffect, useState } from 'react';

// function Products() {
//   const [books, setBooks] = useState([]);

//   const [cartCount, setCartCount] = useState(0);

//   const handleAddToCart = () => {
//     setCartCount(prev => prev + 1);
//   };

//   useEffect(() => {
//     fetch('/books.json')
//       .then((res) => res.json())
//       .then((data) => setBooks(data))
//       .catch((err) => console.error('Failed to load books:', err));
//   }, []);

//   return (
//     <div style={{ padding: '30px' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>📚 Our Books</h2>
//       <div style={{
//         display: 'flex',
//         gap: '30px',
//         justifyContent: 'center',
//         flexWrap: 'wrap'
//       }}>
//         {books.map((book) => (
//           <div key={book.id} style={{
//             width: '220px',
//             border: '1px solid #ddd',
//             borderRadius: '10px',
//             padding: '15px',
//             textAlign: 'center',
//             boxShadow: '0 0 10px rgba(0,0,0,0.1)'
//           }}>
//             <img src={book.image} alt={book.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
//             <h5 style={{ marginTop: '15px' }}>{book.title}</h5>
//             <p style={{ color: 'green', fontWeight: 'bold' }}>${book.price}</p>
//             <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart 🛒</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
import React, { useEffect, useState } from 'react';

function Products({ onAddToCart }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books.json')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error('Failed to load books:', err));
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>📚 Our Books</h2>
      <div style={{
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {books.map((book) => (
          <div key={book.id} style={{
            width: '220px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}>
            <img src={book.image} alt={book.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <h5 style={{ marginTop: '15px' }}>{book.title}</h5>
            <p style={{ color: 'green', fontWeight: 'bold' }}>${book.price}</p>
            <button className="btn btn-primary" onClick={onAddToCart}>Add to Cart 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

