import { FaFacebook, FaGithub, FaLinkedin, FaTwitter,FaPhone  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#fffdfd]">
            <div className="container mx-auto ">
                <div className="mx-2">
                    <div className="flex flex-col sm:flex-row w-auto lg:w-3/4 mx-auto py-20">
                        <div className="w-full sm:w-2/4 mb-10 md:mb-0">
                            <div className="mb-10">
                                <h1 className="text-3xl uppercase font-semibold text-fuchsia-800 mb-10">Location</h1>
                               <div className="space-y-2">
                               <div className="flex items-center">
                                    <FaLocationDot className="text-2xl text-fuchsia-800 mr-2"/>
                                    <p className="text-xl font-semibold text-zinc-500">Sylhet City, Bangladesh</p>
                                </div>
                                <div className="flex items-center">
                                    <MdEmail className="text-2xl text-fuchsia-800 mr-2"/>
                                    <p className="text-xl font-semibold text-zinc-500">mahinmtrs@gmail.com</p>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="text-2xl text-fuchsia-800 mr-2"/>
                                    <a className="text-xl font-semibold text-zinc-500" href="tel:+8801712345678">+8801712345678</a>
                                </div>
                               </div>
                            </div>
                            <div>
                                <h1 className="text-3xl uppercase font-semibold text-fuchsia-800 mb-10">Follow Us</h1>
                                <div className="flex space-x-3 text-3xl mb-10">
                                    <Link target="blank" to="https://www.facebook.com/mahin.hasan.750/"><FaFacebook className="text-blue-700" /></Link>
                                    <Link target="blank" to="https://twitter.com/Mahin_hsn"><FaTwitter className="text-sky-700" /></Link>
                                    <Link target="blank" to="https://github.com/Mahin-Hasan"><FaGithub className="text-slate-800" /></Link>
                                    <Link target="blank" to="https://www.linkedin.com/in/mahin-hasan-/"><FaLinkedin className="text-sky-700" /></Link>
                                </div>
                                <p className="text-base font-semibold text-zinc-500">©2023, All rights reserved | Mahin Hasan</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-2/4 space-y-5">
                            <h1 className="text-4xl uppercase text-fuchsia-800 font-semibold">Contact form</h1>
                            <form className="space-y-5">
                                <div>
                                    <input className="bg-[#f2f2f2] w-full border-2 py-3 placeholder:font-semibold placeholder:italic placeholder:text-zinc-400 placeholder:ps-3" type="text" placeholder="Enter your Name" />
                                </div>
                                <div>
                                    <input className="bg-[#f2f2f2] w-full border-2 py-3 placeholder:font-semibold placeholder:italic placeholder:text-zinc-400 placeholder:ps-3" type="email" placeholder="Enter a valid email address" />
                                </div>
                                <div>
                                    <textarea className="bg-[#f2f2f2] w-full border-2 py-3 placeholder:font-semibold placeholder:italic placeholder:text-zinc-400 placeholder:ps-3" name="" id="" cols="30" rows="4" placeholder="Enter your message"></textarea>
                                </div>
                            </form>
                            <button className="btn px-6 rounded-none bg-fuchsia-800 hover:bg-fuchsia-700 text-lg text-white font-semibold border-0">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;