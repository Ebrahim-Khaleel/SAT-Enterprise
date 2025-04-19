import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative top-0 left-0 w-full h-[95px] z-50 bg-[#101917]/95 backdrop-blur-sm">
            <nav className="h-full container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div>
                        <a href="/" className="inline-block">
                            <img
                                src="/sat logo transparant  copy.png" 
                                alt="SAT Logo" 
                                className="w-[100px] sm:w-[120px] h-[55px] sm:h-[65px] object-contain"
                            />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
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

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a 
                            href="#about" 
                            className="font-inter font-bold text-[14px] text-white hover:text-[#C7C7C7] transition-colors"
                        >
                            About Us
                        </a>
                        <a href="#contact">                    
                            <button
                                className="bg-[#C18820] hover:bg-[#9A6B19] text-white font-inter font-bold text-[14px] rounded-lg flex items-center gap-2 px-4 py-2 transition-colors"
                            >
                                Contact Us
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-[95px] left-0 w-full bg-[#101917] py-4 px-4`}>
                    <div className="flex flex-col items-center gap-6">
                        <a 
                            href="#about" 
                            className="font-inter font-bold text-[14px] text-white hover:text-[#C7C7C7] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </a>
                        <a 
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                        >                    
                            <button
                                className="bg-[#C18820] hover:bg-[#9A6B19] text-white font-inter font-bold text-[14px] rounded-lg flex items-center gap-2 px-4 py-2 transition-colors"
                            >
                                Contact Us
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar; 