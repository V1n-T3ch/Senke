import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Motorcycles from './pages/Motorcycles'
import MotorcycleDetail from './pages/MotorcycleDetail'
import About from './pages/About'
import Services from './pages/Services'
import Financing from './pages/Financing'
import Contact from './pages/Contact'

function App() {
	return (
		<div className="min-h-screen bg-darker flex flex-col">
			<Navbar />
			<main className="flex-grow">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/motorcycles" element={<Motorcycles />} />
					<Route path="/motorcycles/:id" element={<MotorcycleDetail />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/financing" element={<Financing />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
