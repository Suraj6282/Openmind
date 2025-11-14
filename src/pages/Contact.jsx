import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin } from "react-feather";
import Header from "../component/Header";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const headerRef = useRef();
  const infoRef = useRef();
  const contactKey = import.meta.env.VITE_CONTACT_KEY;
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(contactKey, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
    <Header/>
    <div
      id="contact"
      className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full">
        <h1
          ref={headerRef}
          className="text-3xl sm:text-4xl uppercase font-bold tracking-wider md:text-5xl font-extrabold text-center mb-20 tracking-tight"
          style={{ fontFamily: "", transform: "scaleY(1.3)" }}
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.05em", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Get in Touch
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Info */}
          <div ref={infoRef} className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6 text-black">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3" />
                <a
                  href="mailto:suraj915764@gmail.com"
                  className="hover:border-zinc-500 border-b border-transparent transition-colors duration-300"
                >
                  openmind@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3" />
                <a
                  href="tel:+1234567890"
                  className="hover:border-zinc-500 border-b border-transparent  transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3" />
                <span>OPENMIND DESIGN INC. 1003, 10th Floor, Ahemadabad </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-black/10 rounded-2xl p-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-black/20 text-black focus:outline-none focus:border-black/50 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-black/20 text-black focus:outline-none focus:border-black/50 transition-all duration-300"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 h-36 rounded-lg bg-white border border-black/20 text-black focus:outline-none focus:border-black/50 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-bold text-sm hover:bg-black/85 transition-all duration-400 cursor-pointer"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={`text-center text-sm pt-2 ${
                    status.includes("success")
                      ? "text-[#697565]"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default Contact;