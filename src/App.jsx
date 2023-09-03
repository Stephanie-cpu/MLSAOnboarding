/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Egharevba Stephanie",
  title: "Product Designer, Data Analyst, Advocate and Content Creator",
  email: "stephanieegharevba83@gmail.com",
  gitHub: "https://github.com/Stephanie-cpu",
  instagram: "https://www.instagram.com/sefini_stephanie/",
  linkedIn: "https://www.linkedin.com/in/egharevba-stephanie-9bab261ab/"
  twitter: "https://twitter.com/sefini_steph",
  youTube: "https://youtube.com/@sefini_stephanie?si=63XReR3mJza08Yr_",
};

const primaryColor = "#000000";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.EgharevbaStephanie} title={siteProps.SefiniStephanie} />
      <About />
      <Portfolio />

      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
