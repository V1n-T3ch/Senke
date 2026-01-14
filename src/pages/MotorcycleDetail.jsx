import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMotorcycleById, getRelatedMotorcycles } from '../data/motorcycles'
import MotorcycleCard from '../components/MotorcycleCard'

export default function MotorcycleDetail() {
    const { id } = useParams()
    const bike = getMotorcycleById(id)
    const [selectedImage, setSelectedImage] = useState(0)
    const [showInquiry, setShowInquiry] = useState(false)

    if (!bike) {
        return (
            <div className="pt-16 min-h-screen bg-darker flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🏍️</div>
                    <h2 className="text-2xl font-bold text-white mb-4">Motorcycle not found</h2>
                    <Link to="/motorcycles" className="text-primary hover:text-primary-dark">
                        ← Back to all motorcycles
                    </Link>
                </div>
            </div>
        )
    }

    const relatedBikes = getRelatedMotorcycles(id, bike.category)

    const specs = [
        { label: 'Engine', value: bike.engine },
        { label: 'Power', value: bike.power },
        { label: 'Torque', value: bike.torque },
        { label: 'Weight', value: bike.weight },
        { label: 'Top Speed', value: bike.topSpeed },
        { label: 'Fuel Capacity', value: bike.fuelCapacity },
        { label: 'Seat Height', value: bike.seatHeight },
    ]

    return (
        <div className="pt-16 min-h-screen bg-darker">
            {/* Breadcrumb */}
            <div className="bg-dark py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm">
                        <Link to="/" className="text-gray-400 hover:text-primary">Home</Link>
                        <span className="text-gray-600 mx-2">/</span>
                        <Link to="/motorcycles" className="text-gray-400 hover:text-primary">Motorcycles</Link>
                        <span className="text-gray-600 mx-2">/</span>
                        <span className="text-white">{bike.name}</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Gallery */}
                    <div>
                        <div className="bg-dark rounded-xl overflow-hidden mb-4">
                            <img
                                src={bike.gallery[selectedImage]}
                                alt={bike.name}
                                className="w-full h-96 object-cover"
                            />
                        </div>
                        <div className="flex gap-4">
                            {bike.gallery.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedImage(i)}
                                    className={`flex-1 rounded-lg overflow-hidden border-2 transition-colors ${
                                        selectedImage === i ? 'border-primary' : 'border-transparent'
                                    }`}
                                >
                                    <img src={img} alt="" className="w-full h-20 object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div>
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                                    {bike.category}
                                </span>
                                <h1 className="text-4xl font-bold text-white">{bike.name}</h1>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-bold text-primary">${bike.price.toLocaleString()}</div>
                                <div className={`text-sm ${bike.inStock ? 'text-green-500' : 'text-red-500'}`}>
                                    {bike.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-400 text-lg mb-6">{bike.longDescription}</p>

                        {/* Colors */}
                        <div className="mb-6">
                            <h3 className="text-white font-semibold mb-2">Available Colors</h3>
                            <div className="flex gap-2">
                                {bike.colors.map((color, i) => (
                                    <span key={i} className="bg-dark px-4 py-2 rounded-lg text-gray-300 text-sm">
                                        {color}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                            <h3 className="text-white font-semibold mb-2">Key Features</h3>
                            <div className="flex flex-wrap gap-2">
                                {bike.features.map((feature, i) => (
                                    <span key={i} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button
                                onClick={() => setShowInquiry(true)}
                                className="flex-1 bg-primary hover:bg-primary-dark text-white py-4 rounded-md font-semibold transition-colors"
                            >
                                Inquire Now
                            </button>
                            <Link
                                to="/financing"
                                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 rounded-md font-semibold transition-colors text-center"
                            >
                                Calculate EMI
                            </Link>
                            <Link
                                to="/contact"
                                className="flex-1 border-2 border-white text-white hover:bg-white hover:text-dark py-4 rounded-md font-semibold transition-colors text-center"
                            >
                                Schedule Test Ride
                            </Link>
                        </div>

                        {/* Specs */}
                        <div className="bg-dark rounded-xl p-6">
                            <h3 className="text-white font-semibold mb-4">Specifications</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between py-2 border-b border-gray-800">
                                        <span className="text-gray-400">{spec.label}</span>
                                        <span className="text-white font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Bikes */}
                {relatedBikes.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-white mb-8">Similar Motorcycles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedBikes.map(bike => (
                                <MotorcycleCard key={bike.id} bike={bike} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Inquiry Modal */}
            {showInquiry && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-dark rounded-xl p-8 max-w-md w-full">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-white">Inquire About {bike.name}</h3>
                            <button onClick={() => setShowInquiry(false)} className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-darker border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-darker border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-darker border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={3}
                                className="w-full bg-darker border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-md font-semibold transition-colors"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}