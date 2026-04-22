import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check for stored auth on mount
        const storedUser = localStorage.getItem('senke_user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setLoading(false)
    }, [])

    const login = (email, password) => {
        // Demo authentication - replace with real API call
        if (email === 'admin@senke.com' && password === 'admin123') {
            const userData = {
                id: 1,
                email,
                name: 'Admin User',
                role: 'admin'
            }
            setUser(userData)
            localStorage.setItem('senke_user', JSON.stringify(userData))
            return { success: true }
        }
        return { success: false, error: 'Invalid credentials' }
    }

    const register = (name, email, password) => {
        // Demo registration - replace with real API call
        const userData = {
            id: Date.now(),
            email,
            name,
            role: 'user'
        }
        setUser(userData)
        localStorage.setItem('senke_user', JSON.stringify(userData))
        return { success: true }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('senke_user')
    }

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAdmin: user?.role === 'admin'
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}