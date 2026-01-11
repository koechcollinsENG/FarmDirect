import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Farmer Marketplace</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/products" className="hover:text-yellow-300">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button className="bg-yellow-400 text-green-800 px-4 py-2 rounded hover:bg-yellow-500">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;