import { motion } from 'framer-motion';
import { menuItems } from '../data/menu';

export default function Menu() {
  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Menu
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuSection title="Coffee & Drinks" items={menuItems.coffee} delay={0.2} />
          <MenuSection title="Fresh Pastries" items={menuItems.pastries} delay={0.4} />
          <MenuSection title="Sandwiches" items={menuItems.sandwiches} delay={0.6} />
        </div>
      </div>
    </div>
  );
}

function MenuSection({ title, items, delay }) {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-amber-800">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-amber-100 pb-4 last:border-0">
            <div className="flex justify-between">
              <h3 className="font-medium">{item.name}</h3>
              <span className="text-amber-800">${item.price}</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}