import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#fffdfd]">
            <div className="container mx-auto ">
                <div className="mx-2">
                    <div className="flex flex-col sm:flex-row w-auto lg:w-3/4 mx-auto py-20">
                        <div className="w-2/4">
                            <div className="mb-10">
                                <h1 className="text-3xl uppercase font-semibold text-fuchsia-800 mb-10">Location</h1>
                                <p className="text-2xl font-semibold text-zinc-500">Sylhet City, Bangladesh</p>
                            </div>
                            <div>
                                <h1 className="text-3xl uppercase font-semibold text-fuchsia-800 mb-10">Follow Us</h1>
                                <div className="flex space-x-3 text-3xl mb-10">
                                    <Link target="blank" to="https://www.facebook.com/mahin.hasan.750/"><FaFacebook className="text-blue-700" /></Link>
                                    <Link target="blank" to="https://github.com/Mahin-Hasan"><FaGithub /></Link>
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
                            <button className="btn px-6 rounded-none bg-[#db545a] text-lg text-white font-normal border-0">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;