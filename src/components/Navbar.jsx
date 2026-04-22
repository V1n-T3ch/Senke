import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { user, logout, isAdmin } = useAuth()

    const isActive = (path) => location.pathname === path

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/motorcycles', label: 'Motorcycles' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/financing', label: 'Financing' },
        { path: '/contact', label: 'Contact' },
    ]

    const handleLogout = () => {
        logout()
        navigate('/')
        setIsOpen(false)
    }

    return (
        <nav className="bg-darker fixed w-full z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-primary">SENKE</span>
                        <span className="text-white ml-1 text-lg">MOTORS</span>
                    </Link>

                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-6">
                            {navLinks.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`transition-colors ${
                                        isActive(link.path)
                                            ? 'text-primary font-semibold'
                                            : 'text-gray-300 hover:text-primary'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            
                            {user ? (
                                <div className="flex items-center space-x-4">
                                    {isAdmin && (
                                        <Link
                                            to="/admin"
                                            className={`transition-colors ${
                                                location.pathname.startsWith('/admin')
                                                    ? 'text-primary font-semibold'
                                                    : 'text-gray-300 hover:text-primary'
                                            }`}
                                        >
                                            Dashboard
                                        </Link>
                                    )}
                                    <div className="flex items-center space-x-3">
                                        <span className="text-gray-400 text-sm">
                                            Hi, {user.name.split(' ')[0]}
                                        </span>
                                        <button
                                            onClick={handleLogout}
                                            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors text-sm"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <Link
                                        to="/login"
                                        className="text-gray-300 hover:text-primary transition-colors"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-darker border-t border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 ${
                                    isActive(link.path) ? 'text-primary' : 'text-gray-300 hover:text-primary'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <div className="border-t border-gray-800 mt-2 pt-2">
                            {user ? (
                                <>
                                    {isAdmin && (
                                        <Link
                                            to="/admin"
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-3 py-2 ${
                                                location.pathname.startsWith('/admin') ? 'text-primary' : 'text-gray-300 hover:text-primary'
                                            }`}
                                        >
                                            Dashboard
                                        </Link>
                                    )}
                                    <div className="px-3 py-2 text-gray-400 text-sm">
                                        Signed in as {user.name}
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-3 py-2 text-gray-300 hover:text-primary"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-2 text-gray-300 hover:text-primary"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-2 text-primary font-semibold"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}