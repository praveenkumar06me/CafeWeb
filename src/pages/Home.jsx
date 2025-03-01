import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[500px] bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Amigos Caffe</h1>
            <p className="text-xl">Your home away from home</p>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2020, Amigos Caffe was born from a passion for great coffee and community.
              We believe in creating a warm, welcoming space where people can gather, work, or simply
              enjoy a moment of peace with a perfect cup of coffee.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Visit Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Monday - Friday: 7am - 8pm<br />
              Saturday - Sunday: 8am - 6pm<br /><br />
              123 Coffee Street<br />
              Cityville, ST 12345<br />
              Phone: (555) 123-4567
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}