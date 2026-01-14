import { Link } from 'react-router-dom'

export default function About() {
    const team = [
        {
            name: 'Marcus Chen',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
            bio: '20+ years in the motorcycle industry'
        },
        {
            name: 'Sarah Rodriguez',
            role: 'Head of Sales',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
            bio: 'Passionate rider and customer advocate'
        },
        {
            name: 'James Wilson',
            role: 'Master Technician',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
            bio: 'Factory-certified expert mechanic'
        },
        {
            name: 'Emily Park',
            role: 'Finance Manager',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
            bio: 'Making dream bikes affordable'
        },
    ]

    const milestones = [
        { year: '2010', title: 'Founded', description: 'Senke Motors opened its first showroom' },
        { year: '2014', title: 'Expansion', description: 'Opened second location and service center' },
        { year: '2018', title: '1000+ Sales', description: 'Reached milestone of 1000 motorcycles sold' },
        { year: '2022', title: 'Award Winning', description: 'Named Best Motorcycle Dealer in the region' },
        { year: '2025', title: 'Digital First', description: 'Launched online shopping experience' },
    ]

    return (
        <div className="pt-16 min-h-screen bg-darker">
            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-darker via-dark to-darker">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=1920')] bg-cover bg-center opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        About <span className="text-primary">Senke Motors</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        For over 15 years, we've been helping riders find their perfect motorcycle. 
                        Our passion for bikes drives everything we do.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                            <p className="text-gray-400 text-lg mb-6">
                                Senke Motors was born from a simple belief: buying a motorcycle should be 
                                as thrilling as riding one. Founded in 2010 by Marcus Chen, a lifelong 
                                motorcycle enthusiast, we set out to create a dealership that puts riders first.
                            </p>
                            <p className="text-gray-400 text-lg mb-6">
                                What started as a small showroom with just 10 bikes has grown into the 
                                region's most trusted motorcycle destination. We've helped thousands of 
                                riders—from first-timers to seasoned veterans—find their perfect ride.
                            </p>
                            <p className="text-gray-400 text-lg">
                                Today, we offer an extensive collection of sport bikes, cruisers, adventure 
                                motorcycles, and more. But our mission remains the same: to share our 
                                passion for motorcycles and help you ride your dream.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600"
                                alt="Motorcycle showroom"
                                className="rounded-xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl">
                                <div className="text-3xl font-bold">15+</div>
                                <div>Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">2000+</div>
                            <div className="text-gray-400">Bikes Sold</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">15+</div>
                            <div className="text-gray-400">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">98%</div>
                            <div className="text-gray-400">Customer Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">50+</div>
                            <div className="text-gray-400">Brands Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-16">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 hidden md:block"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-darker p-6 rounded-xl">
                                            <span className="text-primary font-bold text-xl">{milestone.year}</span>
                                            <h3 className="text-white font-bold text-2xl mt-2">{milestone.title}</h3>
                                            <p className="text-gray-400 mt-2">{milestone.description}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 bg-primary rounded-full z-10 hidden md:block"></div>
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
                        <p className="text-gray-400 text-lg">The passionate people behind Senke Motors</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-dark rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
                                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-white font-bold text-xl">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.role}</p>
                                    <p className="text-gray-400 mt-2 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Dream Bike?</h2>
                    <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                        Visit our showroom or browse our collection online. Our team is ready to help you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/motorcycles"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors"
                        >
                            Browse Motorcycles
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md font-semibold transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}