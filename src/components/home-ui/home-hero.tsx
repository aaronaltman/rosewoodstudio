import React from "react";

export default function HomeHero() {
  return (
    <div className="hero min-h-[300px] bg-base-200 py-10">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-left md:text-center">
            Welcome to Rosewood Studio
          </h1>
          <p className="py-6 text-left md:text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-left md:text-center">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
