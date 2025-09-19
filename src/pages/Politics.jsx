import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Politics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="w-full">
        <img
          src="./ChatGPT Image Sep 16, 2025, 01_05_03 PM.png"
          alt="Climate change in West Africa"
          className="w-full h-[450px] object-cover"
        />
      </div>

      <div className="max-w-3xl w-full mx-auto px-6 py-10">
        
        <Link className="bg-blue-100 text-xs text-blue-600 px-4 py-1 rounded-full font-medium hover:bg-blue-200 transition">
          Politics
        </Link>

        <h1 className="text-4xl font-bold mt-4 mb-6 leading-tight">
        Nigeria Suspends FOB Levy After Backlash
          
        </h1>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
          <p>By Ahmed Saraki</p>
          <span>•</span>
          <p>September 15, 2025</p>
        </div>

        <article className="prose prose-lg text-gray-700 leading-relaxed">
          <p>
          Nigeria has suspended a 4% Free on Board (FOB) levy on all imported goods following strong criticism from importers, business groups, and other stakeholders. The levy was introduced by the Nigeria Customs Service about a month ago and raised concerns over its potential to increase costs, drive inflation, and reduce trade competitiveness—especially during a delicate phase of economic recovery.
          </p>

          <p>
          "Following extensive consultations with industry stakeholders, trade experts, and relevant government officials, it has become clear that the implementation of the 4% FOB charge poses significant challenges to Nigerian trade facilitation, the business environment, and economic stability," Edun said in a statement. Importers and business groups had warned that the levy would increase the cost of goods, fuel inflation, and hurt Nigeria's trade competitiveness at a time when the country was trying to end currency volatility and sluggish growth.
          </p>

          <p>
          The suspension will allow for a comprehensive review of the levy's framework and its broader economic implications, the ministry said, adding that it would work with the customs service and other stakeholders to develop a more "equitable and efficient revenue structure".
          Nigeria, Africa's largest economy, has been seeking to boost non-oil revenues amid declining crude output and mounting fiscal pressures. But businesses have pushed back against what they see as arbitrary levies that complicate trade and raise costs.
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
              to="/politics/article-1"
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col"
            >
              <img
                src="./Image (2).png"
                alt="Deforestation in Africa"
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full mb-2 w-fit">
                Environment
              </span>
              <h3 className="font-semibold text-lg mb-2">
                The Rising Impact of Deforestation in Sub-Saharan Africa
              </h3>
              <p className="text-sm text-gray-500">By Michael Ade • July 22, 2023</p>
            </Link>

            
            <Link
              to="/politics/article-2"
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col"
            >
              <img
                src="./Image (2).png"
                alt="Renewable energy in Africa"
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-2 w-fit">
                Energy
              </span>
              <h3 className="font-semibold text-lg mb-2">
                Renewable Energy: Opportunities for a Greener West Africa
              </h3>
              <p className="text-sm text-gray-500">By Aisha Bello • Aug 3, 2023</p>
            </Link>

            
            <Link
              to="/politics/article-3"
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col"
            >
              <img
                src="./Image (2).png"
                alt="Flooding in Nigeria"
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full mb-2 w-fit">
                Climate
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
  );
};

export default Politics;
