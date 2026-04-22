import { useState } from 'react'
import { motorcycles } from '../../data/motorcycles'

export default function AdminMotorcycles() {
    const [searchTerm, setSearchTerm] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('all')

    const categories = ['all', ...new Set(motorcycles.map(m => m.category))]

    const filteredMotorcycles = motorcycles.filter(m => {
        const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = categoryFilter === 'all' || m.category === categoryFilter
        return matchesSearch && matchesCategory
    })

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">Manage Motorcycles</h2>
                    <p className="text-gray-400">Add, edit, or remove motorcycles from your inventory</p>
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                    <span>➕</span>
                    Add Motorcycle
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search motorcycles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>
                            {cat === 'all' ? 'All Categories' : cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* Motorcycles Table */}
            <div className="bg-dark rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-400 text-sm bg-darker">
                                <th className="px-6 py-4">Motorcycle</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Stock</th>
                                <th className="px-6 py-4">Featured</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMotorcycles.map((motorcycle) => (
                                <tr key={motorcycle.id} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={motorcycle.image}
                                                alt={motorcycle.name}
                                                className="w-16 h-12 object-cover rounded-lg"
                                            />
                                            <div>
                                                <p className="text-white font-medium">{motorcycle.name}</p>
                                                <p className="text-gray-500 text-sm">{motorcycle.engine}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                                            {motorcycle.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-white font-medium">
                                        ${motorcycle.price.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            motorcycle.inStock
                                                ? 'bg-green-500/20 text-green-400'
                                                : 'bg-red-500/20 text-red-400'
                                        }`}>
                                            {motorcycle.inStock ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {motorcycle.featured ? (
                                            <span className="text-yellow-400">⭐</span>
                                        ) : (
                                            <span className="text-gray-600">☆</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-gray-400 hover:text-primary transition-colors" title="Edit">
                                                ✏️
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors" title="View">
                                                👁️
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-400 transition-colors" title="Delete">
                                                🗑️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">
                    Showing {filteredMotorcycles.length} of {motorcycles.length} motorcycles
                </p>
                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-dark text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
                    <button className="px-4 py-2 bg-dark text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">2</button>
                    <button className="px-4 py-2 bg-dark text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}