import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Motorcycles from './pages/Motorcycles'
import MotorcycleDetail from './pages/MotorcycleDetail'
import About from './pages/About'
import Services from './pages/Services'
import Financing from './pages/Financing'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/admin/Dashboard'
import Overview from './pages/admin/Overview'
import AdminMotorcycles from './pages/admin/Motorcycles'

function PublicLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    )
}

function App() {
    return (
        <AuthProvider>
            <div className="min-h-screen bg-darker flex flex-col">
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
                    <Route path="/motorcycles" element={<PublicLayout><Motorcycles /></PublicLayout>} />
                    <Route path="/motorcycles/:id" element={<PublicLayout><MotorcycleDetail /></PublicLayout>} />
                    <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
                    <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
                    <Route path="/financing" element={<PublicLayout><Financing /></PublicLayout>} />
                    <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
                    
                    {/* Auth routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Admin routes */}
                    <Route path="/admin" element={
                        <ProtectedRoute adminOnly>
                            <Dashboard />
                        </ProtectedRoute>
                    }>
                        <Route index element={<Overview />} />
                        <Route path="motorcycles" element={<AdminMotorcycles />} />
                        <Route path="orders" element={<div className="text-white text-center py-20">Orders management coming soon...</div>} />
                        <Route path="customers" element={<div className="text-white text-center py-20">Customers management coming soon...</div>} />
                        <Route path="inquiries" element={<div className="text-white text-center py-20">Inquiries management coming soon...</div>} />
                        <Route path="settings" element={<div className="text-white text-center py-20">Settings coming soon...</div>} />
                    </Route>
                </Routes>
            </div>
        </AuthProvider>
    )
}

export default App
