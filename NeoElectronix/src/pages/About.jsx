import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#222222] py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-[#efeeea] dark:bg-[#000] rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center dark:text-[#169976] text-[#fe7743]">About NeoElectronix</h1>

        <p className="text-gray-700 dark:text-[#fff] text-lg">
          Welcome to <span className="font-semibold text-[#fe7743] dark:text-[#1dcd9f]">NeoElectronix</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#fe7743] dark:text-[#1dcd9f]">Our Mission</h2>
          <p className="text-gray-700 text-base dark:text-[#fff]">
            At NeoElectronix, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#fe7743] dark:text-[#1dcd9f]">Why Choose NeoElectronix?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 dark:text-[#fff]">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#fe7743] dark:text-[#1dcd9f]">Our Vision</h2>
          <p className="text-gray-700 text-base dark:text-[#fff]">
            We envision a future where technology elevates everyday life. At NeoElectronix, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-[#fe7743] dark:text-[#1dcd9f] mb-2">Join theNeoElectronix Family</h3>
          <p className="text-gray-700 mb-4 dark:text-[#fff]">
            Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — NeoElectronix has something for everyone.
          </p>
        <Link to={'/products'}><button className="bg-[#fe7743] dark:bg-[#1dcd9f] dark:text-[#000] text-white px-6 py-2 rounded-xl hover:bg-red-700 hover:dark:bg-[#169976] transition duration-300">
            Start Shopping
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default About;