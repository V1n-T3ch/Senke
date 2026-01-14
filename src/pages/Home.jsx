import { Link } from 'react-router-dom'
import MotorcycleCard from '../components/MotorcycleCard'
import { getFeaturedMotorcycles } from '../data/motorcycles'

function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-darker via-dark to-darker">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1920')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Ride Your <span className="text-primary">Dream</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Discover the perfect motorcycle for your journey. Premium bikes, unbeatable prices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/motorcycles"
                        className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-all hover:scale-105"
                    >
                        Browse Collection
                    </Link>
                    <Link
                        to="/contact"
                        className="border-2 border-white text-white hover:bg-white hover:text-dark px-8 py-4 rounded-md text-lg font-semibold transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}

function Features() {
    const features = [
        { icon: '🛡️', title: 'Warranty', description: '2-year comprehensive warranty on all bikes' },
        { icon: '🔧', title: 'Free Service', description: 'First 3 services completely free' },
        { icon: '💳', title: 'Easy Financing', description: 'Flexible EMI options available' },
        { icon: '🚚', title: 'Free Delivery', description: 'Doorstep delivery across the country' },
    ]

    return (
        <section className="py-16 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 bg-darker rounded-xl hover:bg-gray-800 transition-colors">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function FeaturedBikes() {
    const featured = getFeaturedMotorcycles()

    return (
        <section className="py-20 bg-darker">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4">Featured Bikes</h2>
                        <p className="text-gray-400 text-lg">Our handpicked selection of premium motorcycles</p>
                    </div>
                    <Link to="/motorcycles" className="hidden md:block text-primary hover:text-primary-dark font-semibold transition-colors">
                        View All →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.slice(0, 3).map(bike => (
                        <MotorcycleCard key={bike.id} bike={bike} />
                    ))}
                </div>
                <div className="mt-8 text-center md:hidden">
                    <Link to="/motorcycles" className="text-primary hover:text-primary-dark font-semibold">
                        View All Motorcycles →
                    </Link>
                </div>
            </div>
        </section>
    )
}

function WhyChooseUs() {
    return (
        <section className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Why Choose <span className="text-primary">Senke Motors?</span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                { title: 'Certified Pre-Owned', desc: 'Every bike undergoes 150-point inspection' },
                                { title: 'Best Price Guarantee', desc: "We'll match any competitor's price" },
                                { title: 'Expert Technicians', desc: 'Factory-trained mechanics for all brands' },
                                { title: 'Trade-In Program', desc: 'Get top dollar for your current bike' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600"
                            alt="Showroom"
                            className="rounded-xl shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl hidden md:block">
                            <div className="text-3xl font-bold">15+</div>
                            <div>Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Testimonials() {
    const testimonials = [
        {
            name: 'Mike Johnson',
            role: 'Sport Bike Enthusiast',
            content: 'Found my dream bike at Senke Motors. The team was incredibly knowledgeable and helped me find the perfect match. Best buying experience ever!',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            name: 'Sarah Williams',
            role: 'First-time Rider',
            content: 'As a beginner, I was nervous about buying my first motorcycle. The staff at Senke made it easy and stress-free. Highly recommend!',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
            name: 'David Chen',
            role: 'Adventure Rider',
            content: 'Great selection of adventure bikes and the financing options made it affordable. The service department is top-notch too.',
            avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
        },
    ]

    return (
        <section className="py-20 bg-darker">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
                    <p className="text-gray-400 text-lg">Real experiences from real riders</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-dark p-6 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                                <div>
                                    <div className="text-white font-semibold">{t.name}</div>
                                    <div className="text-gray-400 text-sm">{t.role}</div>
                                </div>
                            </div>
                            <p className="text-gray-400 italic">"{t.content}"</p>
                            <div className="flex gap-1 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function CTA() {
    return (
        <section className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Find Your Perfect Ride?</h2>
                <p className="text-xl text-red-100 mb-8">Visit our showroom or browse our collection online</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/motorcycles"
                        className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-all"
                    >
                        Browse Inventory
                    </Link>
                    <Link
                        to="/contact"
                        className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md text-lg font-semibold transition-all"
                    >
                        Schedule Test Ride
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <FeaturedBikes />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </>
    )
}