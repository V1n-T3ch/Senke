import { useState } from 'react'

const motorcycles = [
	{
		id: 1,
		name: 'Thunder Bolt 1000',
		price: 12999,
		category: 'Sport',
		engine: '998cc',
		power: '200 HP',
		image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600',
		description: 'Pure racing DNA with street-legal performance.',
	},
	{
		id: 2,
		name: 'Road King Classic',
		price: 18500,
		category: 'Cruiser',
		engine: '1868cc',
		power: '95 HP',
		image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=600',
		description: 'The ultimate touring cruiser for long highway rides.',
	},
	{
		id: 3,
		name: 'Desert Runner 450',
		price: 8999,
		category: 'Adventure',
		engine: '449cc',
		power: '55 HP',
		image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600',
		description: 'Conquer any terrain with confidence.',
	},
	{
		id: 4,
		name: 'Street Fighter X',
		price: 14500,
		category: 'Naked',
		engine: '1103cc',
		power: '180 HP',
		image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600',
		description: 'Aggressive styling meets raw power.',
	},
	{
		id: 5,
		name: 'Retro Cafe 900',
		price: 11200,
		category: 'Cafe Racer',
		engine: '900cc',
		power: '110 HP',
		image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600',
		description: 'Classic design with modern technology.',
	},
	{
		id: 6,
		name: 'Enduro Beast 690',
		price: 10500,
		category: 'Adventure',
		engine: '690cc',
		power: '74 HP',
		image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600',
		description: 'Built for the toughest off-road challenges.',
	},
]

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="bg-darker fixed w-full z-50 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<span className="text-2xl font-bold text-primary">SENKE</span>
						<span className="text-white ml-1 text-lg">MOTORS</span>
					</div>

					<div className="hidden md:block">
						<div className="flex items-center space-x-8">
							<a
								href="#home"
								className="text-gray-300 hover:text-primary transition-colors"
							>
								Home
							</a>
							<a
								href="#bikes"
								className="text-gray-300 hover:text-primary transition-colors"
							>
								Motorcycles
							</a>
							<a
								href="#about"
								className="text-gray-300 hover:text-primary transition-colors"
							>
								About
							</a>
							<a
								href="#contact"
								className="text-gray-300 hover:text-primary transition-colors"
							>
								Contact
							</a>
							<button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors">
								Get a Quote
							</button>
						</div>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-300 hover:text-white"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden bg-darker border-t border-gray-800">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<a
							href="#home"
							className="block px-3 py-2 text-gray-300 hover:text-primary"
						>
							Home
						</a>
						<a
							href="#bikes"
							className="block px-3 py-2 text-gray-300 hover:text-primary"
						>
							Motorcycles
						</a>
						<a
							href="#about"
							className="block px-3 py-2 text-gray-300 hover:text-primary"
						>
							About
						</a>
						<a
							href="#contact"
							className="block px-3 py-2 text-gray-300 hover:text-primary"
						>
							Contact
						</a>
					</div>
				</div>
			)}
		</nav>
	)
}

function Hero() {
	return (
		<section
			id="home"
			className="relative h-screen flex items-center justify-center bg-gradient-to-br from-darker via-dark to-darker"
		>
			<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1920')] bg-cover bg-center opacity-20"></div>
			<div className="relative z-10 text-center px-4">
				<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
					Ride Your <span className="text-primary">Dream</span>
				</h1>
				<p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
					Discover the perfect motorcycle for your journey. Premium bikes, unbeatable
					prices.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="#bikes"
						className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-all hover:scale-105"
					>
						Browse Collection
					</a>
					<a
						href="#contact"
						className="border-2 border-white text-white hover:bg-white hover:text-dark px-8 py-4 rounded-md text-lg font-semibold transition-all"
					>
						Contact Us
					</a>
				</div>
			</div>
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
				<svg
					className="w-6 h-6 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</section>
	)
}

function MotorcycleCard({ bike }) {
	return (
		<div className="bg-dark rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
			<div className="relative overflow-hidden">
				<img
					src={bike.image}
					alt={bike.name}
					className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
				/>
				<span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
					{bike.category}
				</span>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-bold text-white mb-2">{bike.name}</h3>
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
				<button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-md font-semibold transition-colors">
					View Details
				</button>
			</div>
		</div>
	)
}

function MotorcycleGrid() {
	const [filter, setFilter] = useState('All')
	const categories = [
		'All',
		'Sport',
		'Cruiser',
		'Adventure',
		'Naked',
		'Cafe Racer',
	]

	const filteredBikes =
		filter === 'All'
			? motorcycles
			: motorcycles.filter((bike) => bike.category === filter)

	return (
		<section id="bikes" className="py-20 bg-darker">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-white mb-4">
						Our Collection
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Explore our handpicked selection of premium motorcycles
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setFilter(category)}
							className={`px-6 py-2 rounded-full font-medium transition-all ${
								filter === category
									? 'bg-primary text-white'
									: 'bg-dark text-gray-400 hover:bg-gray-800'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredBikes.map((bike) => (
						<MotorcycleCard key={bike.id} bike={bike} />
					))}
				</div>
			</div>
		</section>
	)
}

function Features() {
	const features = [
		{
			icon: '🛡️',
			title: 'Warranty',
			description: '2-year comprehensive warranty on all bikes',
		},
		{
			icon: '🔧',
			title: 'Free Service',
			description: 'First 3 services completely free',
		},
		{
			icon: '💳',
			title: 'Easy Financing',
			description: 'Flexible EMI options available',
		},
		{
			icon: '🚚',
			title: 'Free Delivery',
			description: 'Doorstep delivery across the country',
		},
	]

	return (
		<section className="py-16 bg-dark">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div key={index} className="text-center p-6">
							<div className="text-4xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-bold text-white mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-400">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

function About() {
	return (
		<section id="about" className="py-20 bg-darker">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-4xl font-bold text-white mb-6">
							About <span className="text-primary">Senke Motors</span>
						</h2>
						<p className="text-gray-400 text-lg mb-6">
							With over 15 years of experience in the motorcycle industry, Senke
							Motors has become the trusted destination for motorcycle enthusiasts
							across the nation.
						</p>
						<p className="text-gray-400 text-lg mb-8">
							We carefully select each motorcycle in our inventory, ensuring that
							every rider finds their perfect match. Our team of experts is
							passionate about motorcycles and dedicated to providing exceptional
							customer service.
						</p>
						<div className="grid grid-cols-3 gap-4">
							<div className="text-center">
								<div className="text-3xl font-bold text-primary">500+</div>
								<div className="text-gray-400">Bikes Sold</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-primary">15+</div>
								<div className="text-gray-400">Years Experience</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-primary">98%</div>
								<div className="text-gray-400">Happy Customers</div>
							</div>
						</div>
					</div>
					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600"
							alt="Motorcycle showroom"
							className="rounded-xl shadow-2xl"
						/>
						<div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl">
							<div className="text-2xl font-bold">Trusted</div>
							<div>Since 2010</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function Contact() {
	return (
		<section id="contact" className="py-20 bg-dark">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
					<p className="text-gray-400 text-lg">
						Having questions? We'd love to hear from you.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="bg-darker p-8 rounded-xl">
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-gray-400 mb-2">First Name</label>
									<input
										type="text"
										className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
										placeholder="John"
									/>
								</div>
								<div>
									<label className="block text-gray-400 mb-2">Last Name</label>
									<input
										type="text"
										className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
										placeholder="Doe"
									/>
								</div>
							</div>
							<div>
								<label className="block text-gray-400 mb-2">Email</label>
								<input
									type="email"
									className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
									placeholder="john@example.com"
								/>
							</div>
							<div>
								<label className="block text-gray-400 mb-2">Phone</label>
								<input
									type="tel"
									className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
									placeholder="+1 (555) 000-0000"
								/>
							</div>
							<div>
								<label className="block text-gray-400 mb-2">Message</label>
								<textarea
									rows={4}
									className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
									placeholder="Tell us about your dream bike..."
								></textarea>
							</div>
							<button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-md font-semibold transition-colors">
								Send Message
							</button>
						</form>
					</div>

					<div className="space-y-8">
						<div className="flex items-start space-x-4">
							<div className="bg-primary p-3 rounded-lg">
								<svg
									className="w-6 h-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-white font-semibold text-lg">
									Visit Our Showroom
								</h3>
								<p className="text-gray-400">
									123 Motor Street, Speed City, SC 12345
								</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="bg-primary p-3 rounded-lg">
								<svg
									className="w-6 h-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-white font-semibold text-lg">Call Us</h3>
								<p className="text-gray-400">+1 (555) 123-4567</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="bg-primary p-3 rounded-lg">
								<svg
									className="w-6 h-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-white font-semibold text-lg">Email Us</h3>
								<p className="text-gray-400">info@senkemotors.com</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="bg-primary p-3 rounded-lg">
								<svg
									className="w-6 h-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-white font-semibold text-lg">
									Working Hours
								</h3>
								<p className="text-gray-400">
									Mon - Sat: 9:00 AM - 8:00 PM
								</p>
								<p className="text-gray-400">Sunday: 10:00 AM - 6:00 PM</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function Footer() {
	return (
		<footer className="bg-darker py-12 border-t border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<div className="flex items-center mb-4">
							<span className="text-2xl font-bold text-primary">SENKE</span>
							<span className="text-white ml-1 text-lg">MOTORS</span>
						</div>
						<p className="text-gray-400">
							Your trusted destination for premium motorcycles since 2010.
						</p>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a
									href="#home"
									className="hover:text-primary transition-colors"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#bikes"
									className="hover:text-primary transition-colors"
								>
									Motorcycles
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="hover:text-primary transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:text-primary transition-colors"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-4">Categories</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a
									href="#"
									className="hover:text-primary transition-colors"
								>
									Sport Bikes
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary transition-colors"
								>
									Cruisers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary transition-colors"
								>
									Adventure
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary transition-colors"
								>
									Cafe Racers
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-4">Follow Us</h4>
						<div className="flex space-x-4">
							<a
								href="#"
								className="bg-dark p-3 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-800 transition-all"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
								</svg>
							</a>
							<a
								href="#"
								className="bg-dark p-3 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-800 transition-all"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</a>
							<a
								href="#"
								className="bg-dark p-3 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-800 transition-all"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; 2026 Senke Motors. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

function App() {
	return (
		<div className="min-h-screen bg-darker">
			<Navbar />
			<Hero />
			<Features />
			<MotorcycleGrid />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
