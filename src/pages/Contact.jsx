import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-amber-800 text-xl" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-amber-800 text-xl" />
                  <span>hello@amigoscaffe.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-amber-800 text-xl" />
                  <span>123 Coffee Street<br />Cityville, ST 12345</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 7am - 8pm</p>
                  <p>Saturday - Sunday: 8am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-800 p-8 text-white">
              <h2 className="text-3xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded text-gray-800"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded text-gray-800"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded text-gray-800 h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white text-amber-800 px-6 py-2 rounded hover:bg-amber-100 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}