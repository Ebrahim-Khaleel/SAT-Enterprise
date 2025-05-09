function Lander() {
    return (
        <section 
            aria-label="Hero section" 
            className="relative w-full h-[450px] lg:h-[700px] bg-gradient-to-b from-[#101917] to-[#1B2A25]"
        >
            <div className="container mx-auto px-8 h-full relative">
                {/* Left Content */}
                <div className="max-w-full md:max-w-xl lg:max-w-2xl pt-8 md:pt-16 lg:pt-[130px] text-center md:text-left">
                    <h1 className="text-[36px] lg:text-[50px] font-medium font-inter text-[#E4FFDE] mb-6 md:mb-6 lg:mb-8 leading-[50px] lg:leading-[65px]">
                        Streamlined <span className="text-white text-[36px] sm:text-[32px] md:text-[38px] lg:text-[50px] font-bold italic font-arsenal">FMCG</span>
                        <div 
                        className="hidden xl:block h-[5px] md:h-[7px] w-[100px] md:w-[124px] rounded-full"
                        style={{
                            background: 'linear-gradient(to right, #B0872D 50%, #192622 100%)',
                            position: 'absolute',
                            left: '305px',
                            top: '192px',
                        }}
                        />
                        <br />
                        Distribution in the
                        <br />
                        Middle East.
                    </h1>
                    <p className="text-[#E4FFDE]/65 text-base md:text-lg mb-8 lg:mb-10 not-md:px-4">
                        We <span className="text-white font-medium italic">source</span>, <span className="text-white font-medium italic">market</span>, and <span className="text-white font-medium italic">distribute</span> quality FMCG&nbsp;
                        <br className="hidden md:block" />
                        products, meeting the evolving needs of customers&nbsp;
                        <br className="hidden md:block" />
                        across the Middle East.
                    </p>
                    <a href="#contact" className="inline-block">
                        <button className="bg-[#C18820] text-white font-inter font-bold text-[14px] md:text-[16px] justify-center rounded-lg flex items-center w-[140px] md:w-[148px] h-[36px] md:h-[40px]">
                        Contact Us
                        <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </button>
                    </a>
                </div>

                {/* Right Content - Image with Stats Overlay */}
                <div className="absolute w-[560px] h-[397px] left-[730px] top-[150px] opacity-80">
                    <div className="relative w-full h-full">
                        <img 
                            src="/Designer copy 2.jpeg" 
                            alt="Hero image" 
                            className="w-full h-full object-cover"
                            style={{
                                maskImage: 'radial-gradient(circle at center, black 1%, rgba(24, 38, 34, 0.7) 100%, rgba(24, 38, 34, 0) 1%)',
                                WebkitMaskImage: 'radial-gradient(circle at center, black 1%, rgba(24, 38, 34, 0.7) 60%, rgba(24, 38, 34, 0) 70%)',
                                backgroundColor: '#182622'
                            }}
                        />
                        
                    </div>
                    
                </div>
                {/* Stats Overlay */}
                <div className="hidden lg:block">
                    <div className="absolute bg-[#E4FFDE]/30 backdrop-blur-sm rounded-lg p-6 w-[180px] left-[640px] top-[290px] text-center">
                        <div className="text-4xl font-bold text-white">500+</div>
                        <div className="text-[#E4FFDE] text-[18px]">Products</div>
                    </div>
                    <div className="absolute bg-[#E4FFDE]/30 backdrop-blur-sm rounded-lg p-4 w-[160px] left-[870px] top-[120px] text-center">
                        <div className="text-[32px] font-bold text-white">100%</div>
                        <div className="text-[#E4FFDE] text-[14px]">On Time Delivery</div>
                    </div>
                    <div className="absolute bg-[#E4FFDE]/30 backdrop-blur-sm rounded-lg p-5 w-[170px] left-[870px] top-[470px] text-center">
                        <div className="text-[34px] font-bold text-white">1000+</div>
                        <div className="text-[#E4FFDE] text-[16px]">Customers</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Lander;