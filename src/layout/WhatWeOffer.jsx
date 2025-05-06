function WhatWeOffer() {
    return (
        <section 
            className="py-10 lg:py-20"
            style={{
                background: 'linear-gradient(to top, #FFFFFF 80%, #97D988 100%)',
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-[#187C00] text-[16px] lg:text-[18px] font-extrabold font-inter mb-16">WE OFFER</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 justify-items-center">
                    {/* Customer-Centric Solutions Card */}
                    <div 
                        className="bg-white rounded-lg p-8 border border-[#187C00] lg:w-[370px] transition-all duration-300 hover:scale-102 hover:bg-white group"
                        style={{
                            filter: 'drop-shadow(0px 0px 8px rgba(24, 124, 0, 0.7))',
                            WebkitFilter: 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))',
                            transition: 'all 0.3s ease-in-out'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'drop-shadow(0px 0px 20px rgba(24, 124, 0, 1))';
                            e.currentTarget.style.WebkitFilter = 'drop-shadow(0px 0px 20px rgba(24, 124, 0, 1))';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))';
                            e.currentTarget.style.WebkitFilter = 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))';
                        }}
                    >
                        <div className="flex justify-center lg:mb-6">
                            <i className="ri-user-community-fill text-[48px] text-[#1B2A25] transition-colors duration-300 group-hover:text-[#187C00]"></i>
                        </div>
                        <h3 className="text-[#1B2A25] text-[23px] font-bold font-inter mb-6 lg:mb-4 text-center lg:text-left leading-[23px] ">
                            Customer-Centric Solutions Tailored to Your Needs
                        </h3>
                        <p className="text-[#4e4e4e] text-base text-center lg:text-left">
                            We put you at the heart of everything we do. By offering personalized solutions that evolve with your needs—delivered at the right time, for the market—we ensure your business thrives. From quality products to exceptional service, we build strong, lasting relationships that drive mutual success.
                        </p>
                    </div>

                    {/* Sustainable and Quality Products Card */}
                    <div 
                        className="bg-white rounded-lg p-8 border border-[#187C00] lg:w-[370px] transition-all duration-300 hover:scale-102 hover:bg-white group"
                        style={{
                            filter: 'drop-shadow(0px 0px 8px rgba(24, 124, 0, 0.7))',
                            WebkitFilter: 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))',
                            transition: 'all 0.3s ease-in-out'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'drop-shadow(0px 0px 20px rgba(24, 124, 0, 1))';
                            e.currentTarget.style.WebkitFilter = 'drop-shadow(0px 0px 20px rgba(24, 124, 0, 1))';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))';
                            e.currentTarget.style.WebkitFilter = 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))';
                        }}
                    >
                        <div className="flex justify-center lg:mb-6">
                            <i className="ri-seedling-fill text-[48px] text-[#1B2A25] transition-colors duration-300 group-hover:text-[#187C00]"></i>
                        </div>
                        <h3 className="text-[#1B2A25] text-[23px] font-bold font-inter mb-6 lg:mb-4 text-center lg:text-left leading-[23px]">
                            Sustainable and Quality Products You Can Trust
                        </h3>
                        <p className="text-[#4e4e4e] text-base text-center lg:text-left">
                            We are committed to sustainability and quality in every product we source and distribute. Our products meet the highest standards of compliance, ensuring they are not only good for your business but also for the planet.
                        </p>
                    </div>

                    {/* Innovative Partnerships Card */}
                    <div 
                        className="bg-white rounded-lg p-8 border border-[#187C00] lg:w-[370px] transition-all duration-300 hover:scale-102 hover:bg-white group"
                        style={{
                            filter: 'drop-shadow(0px 0px 8px rgba(24, 124, 0, 0.7))',
                            WebkitFilter: 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))',
                            transition: 'all 0.3s ease-in-out'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'drop-shadow(0px 0px 20px rgba(24, 124, 0, 1))';
                            e.currentTarget.style.WebkitFilter = 'drop-shadow(0px 0px 20px rgba(24, 124, 0, 1))';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))';
                            e.currentTarget.style.WebkitFilter = 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))';
                        }}
                    >
                        <div className="flex justify-center lg:mb-6">
                            <i className="ri-service-fill text-[48px] text-[#1B2A25] transition-colors duration-300 group-hover:text-[#187C00]"></i>
                        </div>
                        <h3 className="text-[#1B2A25] text-[23px] font-bold font-inter mb-6 lg:mb-4 text-center lg:text-left leading-[23px]">
                            Innovative Partnerships for Growth and Efficiency
                        </h3>
                        <p className="text-[#4e4e4e] text-base text-center lg:text-left">
                            Through innovation and teamwork, we create efficient supply chains that deliver exceptional service. Our collaborative approach helps you grow your business while we handle the complexities of sourcing and distribution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeOffer; 