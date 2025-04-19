function About() {
    return (
        <section id="about" className="bg-[#1B2A25] py-26">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Text Content */}
                    <div>
                        <div>
                            <h2 className="text-white text-2xl font-bold font-inter relative inline-block">
                                ABOUT US
                                <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gradient-to-r from-[#B0872D] to-[#192622] rounded"></span>
                            </h2>
                        </div>
                        
                        <h3 className="text-white text-2xl font-inter italic font-bold leading-tight mt-12 mb-6">
                            Sourcing, Delivering, And Empowering With The Best In FMCG
                        </h3>
                        
                        <div className="space-y-3.5 text-[#E4FFDE] opacity-60">
                            <p>
                                At SAT Enterprise, we are on a mission to become the leading FMCG trading company 
                                in the Middle East. We specialize in sourcing, marketing, and distributing quality FMCG 
                                products that meet the evolving needs of our customers.
                            </p>
                            
                            <p>
                                Our commitment to customer-centricity, integrity, and innovation ensures that every 
                                partnership we build is rooted in trust and mutual growth. From delivering exceptional 
                                service to promoting sustainability and ensuring quality compliance, we strive to make 
                                a positive impact on the lives of our customers, employees, and the communities we serve.
                            </p>
                            
                            <p>
                                With a focus on teamwork, accountability, and cutting-edge solutions, we are 
                                dedicated to creating efficient supply chains that empower your business to thrive. 
                                Join us in shaping the future of FMCG in the Middle East—where quality, sustainability, 
                                and innovation come together.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image Grid */}
                    <div className="relative grid grid-cols-2 gap-4">
                        {/* Top row images */}
                        <div className="col-span-2">
                            <img 
                                src="/grocery-store-2619380_1280.jpg" 
                                alt="Supermarket aisle with products" 
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        
                        {/* Bottom row images */}
                        <div>
                            <img 
                                src="/warehouse-8540045_1280.jpg" 
                                alt="Warehouse facility" 
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div>
                            <img 
                                src="/delivery-man-holding-box-medium-shot.jpg" 
                                alt="Delivery service" 
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About; 