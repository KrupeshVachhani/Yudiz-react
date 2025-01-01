import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import { ClassComponentP } from "./ClassComponent";
import { FunctionComponentP } from "./FunctionalComponent";
import PropTypes from "prop-types";

const ClassFnComponent = (props) => {
  const cardData = props.Data;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 flex flex-col items-center gap-8 py-8 px-4">

      {/* Components Comparison Section */}
      <section className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6"># ClassComponent And FunctionalComponent</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Class Component Example:</h2>
            <ClassComponent />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Functional Component Example:</h2>
            <FunctionalComponent />
          </div>
        </div>
      </section>

      {/* Card List Section */}
      <section className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6"># Card List</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Class Component Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Class Component Props</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cardData.map((card) => (
                <ClassComponentP
                  key={card.id}
                  name={card.name}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>
          </div>

          {/* Functional Component Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Functional Component Props</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cardData.map((card) => (
                <FunctionComponentP
                  key={card.id}
                  name={card.name}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ClassFnComponent.propTypes = {
  Data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ClassFnComponent;