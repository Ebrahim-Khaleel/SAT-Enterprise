function Clients() {
    const clients = [
        {
            name: "Talal",
            id: 1,
            logo: "/talallogo.png",
            alt: "Talal Logo"
        },
        {
            name: "Parco",
            id: 2,
            logo: "/Parco-logo.jpg",
            alt: "Parco Logo"
        },
        {
            name: "Express Al Madeena",
            id: 3,
            logo: "/Al-Madeena.png",
            alt: "Express Al Madeena Logo"
        },
        {
            name: "Rich & Fresh",
            id: 4,
            logo: "/Rich&fresh.png",
            alt: "Rich & Fresh Supermarket Logo"
        },
        {
            name: "Al Madina",
            id: 5,
            logo: "/Madina-logo.png",
            alt: "Al Madina Hypermarket Logo"
        },
        {
            name: "Big Mart",
            id: 6,
            logo: "/Big-Mart_logo.png",
            alt: "Big Mart Logo"
        }
    ];

    // Triple the array to ensure smooth continuous scrolling
    const tripleClients = [...clients, ...clients, ...clients];

    return (
        <section className="py-21 bg-white overflow-hidden"
            style={{
                background: 'linear-gradient(to top, #FFFFFF 92%, #97D988 190%)',
                filter: 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))',
                WebkitFilter: 'drop-shadow(0px 0px 10px rgba(24, 124, 0, 0.7))',
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h2 className="text-center text-[#187C00] text-[18px] font-extrabold font-inter mb-14">
                    CLIENTS
                </h2>
                
                <div className="relative w-full">
                    <div className="absolute w-[20px] left-0 top-0 bottom-0 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute w-[20px] right-0 top-0 bottom-0 bg-gradient-to-l from-white to-transparent z-10"></div>
                    
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll">
                            {tripleClients.map((client, index) => (
                                <div 
                                    key={`${client.id}-${index}`}
                                    className="flex-shrink-0 w-[180px] h-[80px] mx-8 flex items-center justify-center"
                                >
                                    <img
                                        src={client.logo}
                                        alt={client.alt}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }

                @media (max-width: 768px) {
                    .animate-scroll {
                        animation: scroll 15s linear infinite;
                    }
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-180px * ${clients.length}));
                    }
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}

export default Clients; 