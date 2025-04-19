function Footer() {
    return (
        <footer className="bg-[#1B2A25] text-white pt-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
                    {/* Logo */}
                    <div className="mb-8 lg:mb-0">
                        <a href="/" className="inline-block">
                            <img 
                                src="/sat logo transparant  copy.png" 
                                alt="SAT Enterprise" 
                                className="h-16"
                            />
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-4 mb-8 lg:mb-0">
                        <a 
                            href="#about" 
                            className="text-white hover:text-[#E4B31E] font-inter font-semibold text-[14px] transition-colors"
                        >
                            About Us
                        </a>
                        <span className="text-[#C7C7C7] text-[20px] -mt-2">|</span>
                        <a 
                            href="#contact" 
                            className="text-white hover:text-[#E4B31E] font-inter font-semibold text-[14px] transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-start space-y-2">
                        <span className="text-[#C7C7C7] font-inter font-medium text-[14px]">Abudhabi, UAE</span>
                        <a 
                            href="mailto:info@satenterprise.ae" 
                            className="text-[#C7C7C7] hover:text-[#E4B31E] font-inter font-medium text-[14px] transition-colors"
                        >
                            info@satenterprise.ae
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-[#727272] text-xs pt-10 pb-2">
                    Copyright © 2025. All Rights Reserved by SAT Enterprise
                </div>
            </div>
        </footer>
    );
}

export default Footer; 