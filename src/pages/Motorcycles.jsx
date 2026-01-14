import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MotorcycleCard from '../components/MotorcycleCard'
import { motorcycles, categories } from '../data/motorcycles'

export default function Motorcycles() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filter, setFilter] = useState(searchParams.get('category') || 'All')
    const [sortBy, setSortBy] = useState('featured')
    const [priceRange, setPriceRange] = useState([0, 30000])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const category = searchParams.get('category')
        if (category) setFilter(category)
    }, [searchParams])

    const handleFilterChange = (category) => {
        setFilter(category)
        if (category === 'All') {
            searchParams.delete('category')
        } else {
            searchParams.set('category', category)
        }
        setSearchParams(searchParams)
    }

    let filteredBikes = filter === 'All'
        ? motorcycles
        : motorcycles.filter(bike => bike.category === filter)

    filteredBikes = filteredBikes.filter(bike =>
        bike.price >= priceRange[0] && bike.price <= priceRange[1]
    )

    if (searchTerm) {
        filteredBikes = filteredBikes.filter(bike =>
            bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bike.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }

    filteredBikes = [...filteredBikes].sort((a, b) => {
        switch (sortBy) {
            case 'price-low': return a.price - b.price
            case 'price-high': return b.price - a.price
            case 'name': return a.name.localeCompare(b.name)
            case 'power': return parseInt(b.power) - parseInt(a.power)
            default: return b.featured - a.featured
        }
    })

    return (
        <div className="pt-16 min-h-screen bg-darker">
            {/* Hero Banner */}
            <section className="bg-gradient-to-r from-dark to-darker py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Motorcycles</h1>
                    <p className="text-xl text-gray-400">Find your perfect ride from our premium collection</p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters */}
                <div className="bg-dark rounded-xl p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Search */}
                        <div className="flex-1">
                            <label className="block text-gray-400 text-sm mb-2">Search</label>
                            <input
                                type="text"
                                placeholder="Search motorcycles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary"
                            />
                        </div>

                        {/* Sort */}
                        <div className="w-full lg:w-48">
                            <label className="block text-gray-400 text-sm mb-2">Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full bg-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name">Name A-Z</option>
                                <option value="power">Power (HP)</option>
                            </select>
                        </div>

                        {/* Price Range */}
                        <div className="w-full lg:w-64">
                            <label className="block text-gray-400 text-sm mb-2">
                                Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="30000"
                                step="1000"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                className="w-full accent-primary"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mt-6">
                        <label className="block text-gray-400 text-sm mb-2">Category</label>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => handleFilterChange(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        filter === category
                                            ? 'bg-primary text-white'
                                            : 'bg-darker text-gray-400 hover:bg-gray-700'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-400">
                        Showing {filteredBikes.length} {filteredBikes.length === 1 ? 'motorcycle' : 'motorcycles'}
                    </p>
                </div>

                {/* Grid */}
                {filteredBikes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBikes.map(bike => (
                            <MotorcycleCard key={bike.id} bike={bike} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🏍️</div>
                        <h3 className="text-2xl font-bold text-white mb-2">No motorcycles found</h3>
                        <p className="text-gray-400 mb-6">Try adjusting your filters or search term</p>
                        <button
                            onClick={() => {
                                setFilter('All')
                                setSearchTerm('')
                                setPriceRange([0, 30000])
                                setSearchParams({})
                            }}
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition-colors"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}