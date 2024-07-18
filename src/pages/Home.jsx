import React from 'react';
import { Link } from 'react-router-dom';
import eelkeImage from '../assets/images/eelke.jpg';
import researchImage from '../assets/images/research.jpg';
import teachingImage from '../assets/images/teaching.jpg';
import consultancyImage from '../assets/images/consultancy.jpg';
import popnetImage from '../assets/images/popnet.jpg';
import corpnetImage from '../assets/images/corpnet.jpg';
import compsocsciImage from '../assets/images/compsocsci.jpg';

const Home = () => {
    return (
        <div className="container mx-auto p-8">
            <div className="flex flex-col items-center text-center">
                <img src={eelkeImage} alt="Eelke Heemskerk" className="rounded-full w-48 h-48" />
                <h1 className="text-5xl font-bold mt-4">Eelke Heemskerk</h1>
                <p className="mt-2 max-w-2xl">Full Professor in Political Science, director of the ERC funded research group CORPNET, co-director of POPNET and management consultant at The Galan Group.</p>
                <div className="flex space-x-4 mt-4">
                    <Link to="/about" className="bg-blue-600 text-white px-4 py-2 rounded-md">About Eelke Heemskerk</Link>
                    <Link to="/publications" className="bg-blue-600 text-white px-4 py-2 rounded-md">Publications</Link>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-3xl font-bold text-center mb-6">Research, Teaching, and Consultancy</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img src={researchImage} alt="Research" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Research</h3>
                        <p className="text-gray-700">My current research revolves around three themes: Population Scale Network Analysis, the political economy of sustainable finance in the age of passive investing, and networked elements of global corporate governance.</p>
                        <Link to="/publications" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md">Read more</Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img src={teachingImage} alt="Teaching" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Teaching</h3>
                        <p className="text-gray-700">At the University of Amsterdam I am teaching in political science. In addition, I am director of the first Computational Social Science bachelors programme in the Netherlands, a new program starting September 2021.</p>
                        <a href="https://www.uva.nl/en/programmes/bachelors/computational-social-science/computational-social-science.html" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md">Read more</a>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img src={consultancyImage} alt="Consultancy" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Consultancy</h3>
                        <p className="text-gray-700">At The Galan Group I am a management consultant where I work with top management teams and boards of public and private organizations on issues of corporate governance and strategy.</p>
                        <a href="https://www.galangroep.nl/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md">Read more</a>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-3xl font-bold text-center mb-6">Current Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img src={popnetImage} alt="POPNET" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">POPNET</h3>
                        <p className="text-gray-700">Population Scale Network Analysis</p>
                        <a href="https://www.popnet.io/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md" target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img src={corpnetImage} alt="CORPNET" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">CORPNET</h3>
                        <p className="text-gray-700">A research platform on Networks of Corporate Control, funded by the ERC Research Council</p>
                        <a href="https://corpnet.uva.nl/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md" target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img src={compsocsciImage} alt="Computational Social Science" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Computational Social Science</h3>
                        <p className="text-gray-700">At the University of Amsterdam we are setting up the first bachelor program in Computational Social Science.</p>
                        <a href="https://www.uva.nl/en/programmes/bachelors/computational-social-science/computational-social-science.html" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md" target="_blank" rel="noopener noreferrer">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
