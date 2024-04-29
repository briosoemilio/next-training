import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

const About = () => {
  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </main>
  );
};

export default About;
