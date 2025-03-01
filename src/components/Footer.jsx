import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Amigos Caffe</h3>
            <p className="mt-2">123 Coffee Street</p>
            <p>Cityville, ST 12345</p>
          </div>
          <div className="flex space-x-6">
            <FaFacebook className="text-2xl hover:text-amber-200 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-amber-200 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-amber-200 cursor-pointer" />
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Amigos Caffe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}