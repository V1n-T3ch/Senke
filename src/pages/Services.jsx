import { Link } from 'react-router-dom'

export default function Services() {
    const services = [
        {
            icon: '🔧',
            title: 'Regular Maintenance',
            description: 'Keep your bike running smoothly with our comprehensive maintenance packages.',
            features: ['Oil & filter change', 'Brake inspection', 'Chain adjustment', 'Tire pressure check', 'Fluid top-ups'],
            price: 'From $99'
        },
        {
            icon: '🛠️',
            title: 'Major Repairs',
            description: 'Expert repairs for engine, transmission, electrical systems, and more.',
            features: ['Engine rebuilds', 'Transmission repair', 'Electrical diagnostics', 'Suspension work', 'Frame repair'],
            price: 'Custom quote'
        },
        {
            icon: '🎨',
            title: 'Custom Work',
            description: 'Transform your motorcycle with custom paint, parts, and accessories.',
            features: ['Custom paint jobs', 'Performance upgrades', 'Exhaust systems', 'Custom seats', 'LED lighting'],
            price: 'From $299'
        },
        {
            icon: '🔍',
            title: 'Pre-Purchase Inspection',
            description: 'Buying a used bike? Let our experts inspect it before you commit.',
            features: ['Full mechanical check', 'Frame inspection', 'History report', 'Test ride evaluation', 'Written report'],
            price: '$149'
        },
        {
            icon: '🏍️',
            title: 'Performance Tuning',
            description: 'Maximize your bike\'s potential with professional dyno tuning.',
            features: ['Dyno testing', 'ECU remapping', 'Carburetor tuning', 'Air/fuel optimization', 'Power reports'],
            price: 'From $199'
        },
        {
            icon: '🚚',
            title: 'Pickup & Delivery',
            description: 'Can\'t bring your bike in? We\'ll come to you.',
            features: ['Home pickup', 'Secure transport', 'Doorstep delivery', 'Flexible scheduling', 'Insured transit'],
            price: 'From $49'
        },
    ]

    const packages = [
        {
            name: 'Basic Care',
            price: 99,
            period: 'per service',
            features: ['Oil change', 'Filter replacement', 'Visual inspection', 'Tire pressure check', 'Chain lubrication'],
            popular: false
        },
        {
            name: 'Premium Care',
            price: 199,
            period: 'per service',
            features: ['Everything in Basic', 'Brake inspection & adjustment', 'Full fluid check', 'Battery test', 'Detailed wash'],
            popular: true
        },
        {
            name: 'Annual Plan',
            price: 499,
            period: 'per year',
            features: ['4 Premium services', '10% parts discount', 'Priority scheduling', 'Free pickup & delivery', '24/7 roadside assist'],
            popular: false
        },
    ]

    return (
        <div className="pt-16 min-h-screen bg-darker">
            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-darker via-dark to-darker">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619771914272-e3c1e89b5c83?w=1920')] bg-cover bg-center opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="text-primary">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        From routine maintenance to custom builds, our factory-trained technicians 
                        provide expert care for your motorcycle.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-darker rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="text-gray-400 flex items-center">
                                            <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-bold text-xl">{service.price}</span>
                                    <Link to="/contact" className="text-white hover:text-primary transition-colors">
                                        Book Now →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Packages */}
            <section className="py-20 bg-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Service Packages</h2>
                        <p className="text-gray-400 text-lg">Choose a plan that works for you</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {packages.map((pkg, index) => (
                            <div key={index} className={`rounded-xl p-8 ${pkg.popular ? 'bg-primary' : 'bg-dark'} relative`}>
                                {pkg.popular && (
                                    <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-bold">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-white'}`}>{pkg.name}</h3>
                                <div className="mb-6">
                                    <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-primary'}`}>${pkg.price}</span>
                                    <span className={`${pkg.popular ? 'text-white/80' : 'text-gray-400'}`}> {pkg.period}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className={`flex items-center ${pkg.popular ? 'text-white' : 'text-gray-400'}`}>
                                            <svg className={`w-5 h-5 mr-2 ${pkg.popular ? 'text-white' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className={`block text-center py-3 rounded-md font-semibold transition-colors ${
                                        pkg.popular
                                            ? 'bg-white text-primary hover:bg-gray-100'
                                            : 'bg-primary text-white hover:bg-primary-dark'
                                    }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">Why Service With Us?</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-primary p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl mb-2">Factory-Trained Technicians</h3>
                                        <p className="text-gray-400">Our mechanics are certified and trained by major manufacturers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-primary p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl mb-2">Quick Turnaround</h3>
                                        <p className="text-gray-400">Most services completed same-day. We respect your time.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-primary p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl mb-2">Transparent Pricing</h3>
                                        <p className="text-gray-400">No hidden fees. Get a detailed quote before we start any work.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-primary p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl mb-2">Genuine Parts</h3>
                                        <p className="text-gray-400">We use OEM parts backed by manufacturer warranties.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1619771914272-e3c1e89b5c83?w=600"
                                alt="Service center"
                                className="rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Schedule Your Service Today</h2>
                    <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                        Book online or give us a call. We'll get your bike running at its best.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors"
                        >
                            Book Service
                        </Link>
                        <a
                            href="tel:+15551234567"
                            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md font-semibold transition-colors"
                        >
                            Call (555) 123-4567
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}