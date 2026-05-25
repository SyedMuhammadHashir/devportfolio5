"use client";

import React, { useEffect } from "react";

import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";
import Skills from "./Skills/Skills";
import College from "../College/College";
import Contact from "./Contact/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <College />
      <Blog />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;