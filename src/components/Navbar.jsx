import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-amber-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-semibold">
          <FaCoffee className="text-2xl" />
          <span>Amigos Caffe</span>
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-amber-200 transition">Home</Link>
          <Link to="/menu" className="hover:text-amber-200 transition">Menu</Link>
          <Link to="/contact" className="hover:text-amber-200 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}