import { Link } from 'react-router-dom'

export default function MotorcycleCard({ bike }) {
    return (
        <div className="bg-dark rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <Link to={`/motorcycles/${bike.id}`}>
                <div className="relative overflow-hidden">
                    <img
                        src={bike.image}
                        alt={bike.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {bike.category}
                    </span>
                    {!bike.inStock && (
                        <span className="absolute top-4 right-4 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                            Out of Stock
                        </span>
                    )}
                    {bike.featured && bike.inStock && (
                        <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                        </span>
                    )}
                </div>
            </Link>
            <div className="p-6">
                <Link to={`/motorcycles/${bike.id}`}>
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-primary transition-colors">
                        {bike.name}
                    </h3>
                </Link>
                <p className="text-gray-400 text-sm mb-4">{bike.description}</p>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-400 text-sm">
                        <span className="block">Engine: {bike.engine}</span>
                        <span className="block">Power: {bike.power}</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">
                        ${bike.price.toLocaleString()}
                    </span>
                </div>
                <Link
                    to={`/motorcycles/${bike.id}`}
                    className="block w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-md font-semibold transition-colors text-center"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}