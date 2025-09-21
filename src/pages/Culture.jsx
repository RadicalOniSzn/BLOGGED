import React from 'react'
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from '../components/Footer';

const Culture = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-gray-100">
      <Nav />

      <div className="w-full">
        <img
          src="./film.png"
          alt="Award-winning film"
          className="w-full h-[450px] object-cover"
        />
      </div>

      <div className="max-w-3xl w-full mx-auto px-6 py-10">
        
        <Link to="/culture" className="bg-red-100 text-red-600 text-xs px-4 py-1 rounded-full font-medium hover:bg-blue-200 transition">
          Culture
        </Link>

        <h1 className="text-4xl font-bold mt-4 mb-6 leading-tight">
          Award-Winning Film Sparks Debate Across The Emmy's And The Entire World
        </h1>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
          <p>By Joel Parkson</p>
          <span>•</span>
          <p>August 21, 2025</p>
        </div>

        <article className="prose prose-lg text-gray-700 leading-relaxed">
          <p>
            West Africa is among the most climate-vulnerable regions in the
            world. Increasing desertification in the Sahel, rising sea levels
            along the Atlantic coast, unpredictable rainfall patterns, and
            severe droughts are already undermining food security and displacing
            communities. Agriculture, which employs a significant proportion of
            the region’s population, is highly sensitive to climate fluctuations.
          </p>

          <p>
            According to the Intergovernmental Panel on Climate Change (IPCC),
            crop yields in some parts of West Africa could decline by up to 20%
            by 2050 due to climate stressors. For governments in the region, the
            urgency to act is clear. However, enacting robust climate policies
            that align with international frameworks such as the Paris Agreement
            remains fraught with economic, social, and political challenges.
          </p>

          <p>
            Implementing climate-friendly technologies requires substantial
            investment, yet access to global climate finance remains limited for
            many West African countries. Bureaucratic hurdles and stringent
            eligibility requirements mean that international funding pledges
            often fail to materialize on the ground.
          </p>
        </article>

        
        <div className="mt-10 flex justify-center">
          <Link className="bg-blue-600 text-white text-sm px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
            Read Full Article
          </Link>
        </div>
      </div>

      
      <div className="bg-gray-50 w-full py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">Related Articles</h2>

          <div className="grid gap-8 md:grid-cols-3">
            
            <Link
              to="/culture/article-1"
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col"
            >
              <img
                src="./film.png"
                alt="Deforestation in Africa"
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full mb-2 w-fit">
                Culture
              </span>
              <h3 className="font-semibold text-lg mb-2">
                The Rising Impact of Deforestation in Sub-Saharan Africa
              </h3>
              <p className="text-sm text-gray-500">By Michael Ade • July 22, 2023</p>
            </Link>

            
            <Link
              to="/culture/article-2"
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col"
            >
              <img
                src="./film.png"
                alt="Renewable energy in Africa"
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full mb-2 w-fit">
                Culture
              </span>
              <h3 className="font-semibold text-lg mb-2">
                Renewable Energy: Opportunities for a Greener West Africa
              </h3>
              <p className="text-sm text-gray-500">By Aisha Bello • Aug 3, 2023</p>
            </Link>

            
            <Link
              to="/culture/article-3"
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col"
            >
              <img
                src="./film.png"
                alt="Flooding in Nigeria"
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full mb-2 w-fit">
                Culture
              </span>
              <h3 className="font-semibold text-lg mb-2">
                How Flooding is Reshaping Urban Communities in Nigeria
              </h3>
              <p className="text-sm text-gray-500">By David Chen • Sept 1, 2023</p>
            </Link>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Culture