function Contact() {
    const onSubmit = async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target)

        formData.append("access_key", "da0f1f42-dfb6-429a-9624-ff17be401b68")

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    }

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-[#1B2A25] font-inter text-2xl font-bold">
                            CONTACT
                        </h2>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <i className="ri-mail-fill text-[24px] text-[#1B2A25]"></i>
                                <a href="mailto:info@satenterprise.ae" className="text-[#1B2A25] font-inter font-medium hover:text-[#187C00] transition-colors">
                                    info@satenterprise.ae
                                </a>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <i className="ri-map-pin-fill text-[24px] text-[#1B2A25]"></i>
                                <span className="text-[#1B2A25] font-inter font-medium">
                                    Abudhabi, UAE
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white rounded-lg p-8 border border-[#187C00]"
                    style={{
                        filter: 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 1))',
                        WebkitFilter: 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 1))'
                    }}
                    >
                        <h3 className="text-[#1B2A25] text-2xl font-bold mb-4">
                            Get In Touch
                        </h3>
                        
                        <p className="text-[#606060] text-[15px] font-inter mb-8">
                            Have questions about our FMCG solutions? Fill in the form below, and our 
                            team will contact you shortly.
                        </p>
                        
                        <form onSubmit={onSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-[#1B2A25] text-[14px] font-inter font-semibold mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border text-[#4f4f4f] border-gray-400 rounded focus:outline-none focus:border-[#187C00]"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-[#1B2A25] text-[14px] font-inter font-semibold mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border text-[#4f4f4f] border-gray-400 rounded focus:outline-none focus:border-[#187C00]"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-[#1B2A25] text-[14px] font-inter font-semibold mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border text-[#4f4f4f] border-gray-400 rounded resize-none focus:outline-none focus:border-[#187C00]"
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="bg-[#187C00] text-white text-[15px] px-6 py-3 font-inter font-bold rounded-lg hover:!bg-[#146600] transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact; 