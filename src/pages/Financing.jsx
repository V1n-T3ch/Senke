import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Financing() {
    const [loanAmount, setLoanAmount] = useState(15000)
    const [downPayment, setDownPayment] = useState(3000)
    const [term, setTerm] = useState(48)
    const [interestRate, setInterestRate] = useState(6.99)

    const principal = loanAmount - downPayment
    const monthlyRate = interestRate / 100 / 12
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    const totalPayment = monthlyPayment * term
    const totalInterest = totalPayment - principal

    const benefits = [
        {
            icon: '⚡',
            title: 'Quick Approval',
            description: 'Get approved in as little as 15 minutes with our streamlined application process.'
        },
        {
            icon: '📊',
            title: 'Competitive Rates',
            description: 'We partner with multiple lenders to find you the best rates available.'
        },
        {
            icon: '🎯',
            title: 'Flexible Terms',
            description: 'Choose from 12 to 84 month terms to fit your budget.'
        },
        {
            icon: '💰',
            title: 'Low Down Payment',
            description: 'Get started with as little as 10% down on qualified purchases.'
        },
        {
            icon: '📝',
            title: 'Simple Process',
            description: 'Apply online or in-store. We handle all the paperwork.'
        },
        {
            icon: '🤝',
            title: 'All Credit Welcome',
            description: 'We work with all credit situations. Bad credit? No problem.'
        },
    ]

    const faqs = [
        {
            question: 'What credit score do I need?',
            answer: 'We work with all credit types. While better credit typically means better rates, we have options for everyone.'
        },
        {
            question: 'How long does approval take?',
            answer: 'Most applications are approved within 15-30 minutes. Some may require additional verification.'
        },
        {
            question: 'Can I pay off my loan early?',
            answer: 'Yes! There are no prepayment penalties. Pay off your loan anytime without extra fees.'
        },
        {
            question: 'What documents do I need?',
            answer: 'Typically you\'ll need a valid ID, proof of income, proof of residence, and proof of insurance.'
        },
    ]

    const [openFaq, setOpenFaq] = useState(null)

    return (
        <div className="pt-16 min-h-screen bg-darker">
            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-darker via-dark to-darker">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Easy <span className="text-primary">Financing</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Don't let budget hold you back. Get the bike you want today with 
                        flexible payment options tailored to your needs.
                    </p>
                </div>
            </section>

            {/* Calculator */}
            <section className="py-20 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">Payment Calculator</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-gray-400 mb-2">
                                        Motorcycle Price: <span className="text-primary font-bold">${loanAmount.toLocaleString()}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="5000"
                                        max="50000"
                                        step="500"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                                        className="w-full h-2 bg-darker rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>$5,000</span>
                                        <span>$50,000</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2">
                                        Down Payment: <span className="text-primary font-bold">${downPayment.toLocaleString()}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max={loanAmount * 0.5}
                                        step="500"
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(Number(e.target.value))}
                                        className="w-full h-2 bg-darker rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>$0</span>
                                        <span>${(loanAmount * 0.5).toLocaleString()}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2">
                                        Loan Term: <span className="text-primary font-bold">{term} months</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="12"
                                        max="84"
                                        step="12"
                                        value={term}
                                        onChange={(e) => setTerm(Number(e.target.value))}
                                        className="w-full h-2 bg-darker rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>12 mo</span>
                                        <span>84 mo</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2">
                                        Interest Rate (APR): <span className="text-primary font-bold">{interestRate}%</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="3.99"
                                        max="15.99"
                                        step="0.5"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                        className="w-full h-2 bg-darker rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>3.99%</span>
                                        <span>15.99%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-darker rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Your Estimate</h3>
                            <div className="text-center mb-8">
                                <div className="text-gray-400 mb-2">Monthly Payment</div>
                                <div className="text-6xl font-bold text-primary">
                                    ${monthlyPayment.toFixed(0)}
                                </div>
                                <div className="text-gray-500">per month</div>
                            </div>
                            <div className="space-y-4 border-t border-gray-800 pt-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Loan Amount</span>
                                    <span className="text-white font-semibold">${principal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total Interest</span>
                                    <span className="text-white font-semibold">${totalInterest.toFixed(0)}</span>
                                </div>
                                <div className="flex justify-between text-lg border-t border-gray-800 pt-4">
                                    <span className="text-gray-400">Total Cost</span>
                                    <span className="text-primary font-bold">${totalPayment.toFixed(0)}</span>
                                </div>
                            </div>
                            <Link
                                to="/contact"
                                className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-4 rounded-md font-semibold transition-colors mt-8"
                            >
                                Apply Now
                            </Link>
                            <p className="text-gray-500 text-sm text-center mt-4">
                                *Estimate only. Actual terms may vary based on credit approval.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Why Finance With Us?</h2>
                        <p className="text-gray-400 text-lg">We make getting your dream bike simple and affordable</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-dark rounded-xl p-6 hover:bg-gray-800 transition-colors">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
                        <p className="text-gray-400 text-lg">Get approved in 4 simple steps</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '1', title: 'Choose Your Bike', desc: 'Browse our collection and find your dream motorcycle' },
                            { step: '2', title: 'Apply Online', desc: 'Fill out our simple application in minutes' },
                            { step: '3', title: 'Get Approved', desc: 'Receive a decision in as little as 15 minutes' },
                            { step: '4', title: 'Ride Away', desc: 'Complete paperwork and ride home on your new bike' },
                        ].map((item, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-700"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-darker">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-dark rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                                >
                                    <span className="text-white font-semibold">{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                        Apply today and ride away on your dream motorcycle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors"
                        >
                            Apply for Financing
                        </Link>
                        <Link
                            to="/motorcycles"
                            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md font-semibold transition-colors"
                        >
                            Browse Motorcycles
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}