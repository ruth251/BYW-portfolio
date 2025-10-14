import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { products } from "./Products"; 

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Product not found.</p>
        <Link to="/products">
          <Button className="ml-4 bg-green-600 hover:bg-green-700 text-white">
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 bg-white rounded-3xl shadow-lg p-8">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 flex justify-center items-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-auto object-contain rounded-2xl shadow-md"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">{product.name}</h2>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <p className="text-sm text-gray-500 font-medium mb-8">
            Category: {product.category}
          </p>

          <Link to="/products">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              ← Back to Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
