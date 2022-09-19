import React from "react";

const footerList = [
    {
        footer : 'Resources',
        f1 : 'About',
        f2 : 'Cart',
        f3 : 'Store',
    },
    {
        footer : 'Our Users',
        f1 : 'Customer Support',
        f2 : 'Guide',
        f3 : 'How It Works',
    },
    {
        footer : 'Company',
        f1 : 'Privacy And Policy',
        f2 : 'Terms And Conditions',
    },
];

const Footer = (props) => {

    return(
        <section className="lg:mb-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row space-y-10 self-center lg:space-y-0">
                    <div className="self-start lg:mr-52 md:mr-0" data-aos='fade-up' data-aos-offset='300'>
                        <h1 className="text-3xl">Metaverse</h1>
                        <div className="text-3xl flex space-x-5 mt-5">
                            <div className="bg-white/20 backdrop-blur-md w-fit px-2 py-2 rounded-xl">
                                <i class='bx bxl-instagram-alt'></i>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md w-fit px-2 py-2 rounded-xl">
                                <i class='bx bxl-twitter' ></i>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md w-fit px-2 py-2 rounded-xl">
                                <i class='bx bxl-youtube' ></i>
                            </div>
                        </div>
                    </div>
                    <ul className="flex lg:flex-row flex-col" data-aos='fade-up' data-aos-offset='300'>
                        {footerList.map((ftr) => (
                            <li className="lg:mr-32 md:mr-20">
                                <h5 className="mb-3">{ftr.footer}</h5>
                                <ul className="space-y-3 mb-8">
                                    <li>{ftr.f1}</li>
                                    <li>{ftr.f2}</li>
                                    <li>{ftr.f3}</li>
                                </ul>
                            </li>
                            

                            
                        ))}

                    </ul>
                </div>
                <div className="text-center lg:mt-10 mb-10">© 2022 Metaverse</div>
            </div>
        </section>

    )
};

export default Footer;