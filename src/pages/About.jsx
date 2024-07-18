import React from 'react';
import profileImage from '../assets/images/about.jpg'; // Adjust the path as necessary

const AboutMe = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-left">About Eelke Heemskerk</h2>
          <p className="mb-4">
            I am an Associate Professor of Political Science at the University of Amsterdam (UvA). I direct the ERC-funded CORPNET research group and am co-director of POPNET, a digital research infrastructure for population scale network analysis. In addition, I am director of the new first Computational Social Science bachelors programme in the Netherlands. As a management consultant, I work with top management teams and boards of public and private organizations on issues of corporate governance and strategy.
          </p>
          <p className="mb-4">
            My research has appeared in a wide range of journals, including Scientific Reports, PlosONE, RIPE, Economy & Society, Business & Politics and Strategic Management Journal. Currently, my research revolves around three themes: Population Scale Network Analysis, the political economy of sustainable finance in the age of passive investing, and networked elements of global corporate governance.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Visiting Research Positions</h3>
          <p className="mb-4">
            Previous to his work at the UvA, Eelke was visiting research scholar at the Institute of Strategic Management, Ludwig Maximilians University, Munich; at the Center on Organizational Innovation, Columbia University, New York; and research fellow at the Germany Institute at UvA and at the Amsterdam Institute for Labour Studies (AIAS). He received his PhD at the Amsterdam School for Social Science Research.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Awards</h3>
          <p>
            For my research on how social networks influence boardroom decision-making I received the Veni Prize for excellent researchers by the Dutch Science foundation.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={profileImage} alt="Eelke Heemskerk" className="w-full h-auto rounded-md shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
