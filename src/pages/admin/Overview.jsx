import { motorcycles } from '../../data/motorcycles'

export default function Overview() {
    const stats = [
        { label: 'Total Motorcycles', value: motorcycles.length, icon: '🏍️', change: '+12%' },
        { label: 'Total Orders', value: 156, icon: '📦', change: '+8%' },
        { label: 'Total Revenue', value: '$234,500', icon: '💰', change: '+23%' },
        { label: 'New Inquiries', value: 24, icon: '💬', change: '+5%' },
    ]

    const recentOrders = [
        { id: '#ORD-001', customer: 'John Doe', bike: 'Thunder Bolt 1000', amount: '$12,999', status: 'Completed' },
        { id: '#ORD-002', customer: 'Jane Smith', bike: 'Road King Classic', amount: '$18,500', status: 'Processing' },
        { id: '#ORD-003', customer: 'Mike Johnson', bike: 'Street Fighter X', amount: '$14,500', status: 'Pending' },
        { id: '#ORD-004', customer: 'Sarah Williams', bike: 'Desert Runner 450', amount: '$8,999', status: 'Completed' },
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-500/20 text-green-400'
            case 'Processing': return 'bg-blue-500/20 text-blue-400'
            case 'Pending': return 'bg-yellow-500/20 text-yellow-400'
            default: return 'bg-gray-500/20 text-gray-400'
        }
    }

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-dark rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl">{stat.icon}</span>
                            <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Recent Orders & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-dark rounded-xl p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Recent Orders</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-400 text-sm border-b border-gray-800">
                                    <th className="pb-4">Order ID</th>
                                    <th className="pb-4">Customer</th>
                                    <th className="pb-4">Motorcycle</th>
                                    <th className="pb-4">Amount</th>
                                    <th className="pb-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="border-b border-gray-800 last:border-0">
                                        <td className="py-4 text-primary font-medium">{order.id}</td>
                                        <td className="py-4 text-white">{order.customer}</td>
                                        <td className="py-4 text-gray-400">{order.bike}</td>
                                        <td className="py-4 text-white font-medium">{order.amount}</td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-dark rounded-xl p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
                    <div className="space-y-3">
                        <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
                            <span>➕</span>
                            <span>Add New Motorcycle</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                            <span>📊</span>
                            <span>Generate Report</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                            <span>📧</span>
                            <span>Send Newsletter</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                            <span>💾</span>
                            <span>Backup Data</span>
                        </button>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-bold text-white mb-4">Inventory Alert</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                                <span className="text-yellow-400 text-sm">Low stock: Thunder Bolt 1000</span>
                                <span className="text-yellow-400 text-xs">2 left</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                <span className="text-red-400 text-sm">Out of stock: Ninja 650</span>
                                <span className="text-red-400 text-xs">0 left</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}