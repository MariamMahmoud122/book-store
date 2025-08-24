import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to Our Bookstore</h1>
      <Link to="/products" className="btn btn-primary">
        عرض كل الكتب
      </Link>
    </div>
  );
}
export default Home ;