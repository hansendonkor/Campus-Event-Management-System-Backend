import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-600 text-white text-center py-28 px-6">
        <h1 className="text-5xl font-extrabold mb-4">
          Redefine Your Campus Connections
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Simplify event planning, participation, and discovery all in one place.
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/events">
            <button className="px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-200">
              Find Events
            </button>
          </Link>
          <Link to="/createEvent">
            <button className="px-8 py-3 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800">
              Host an Event
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
          Why Choose Eventify?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/Events.jpg"
              alt="Organized Calendar"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">Plan Effortlessly</h3>
            <p className="text-gray-600">
              Our calendar keeps you on top of all upcoming activities.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/RSVP.png"
              alt="Fast RSVP"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">Quick Access</h3>
            <p className="text-gray-600">
              RSVP to your favorite events with just one click.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/admin features.png"
              alt="Admin Management"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">Manage Like a Pro</h3>
            <p className="text-gray-600">
              Create and oversee events seamlessly with our admin tools.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          See What Users Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 italic">
              "Eventify transformed how we plan our campus activities!"
            </p>
            <p className="mt-4 text-blue-800 font-bold">- Sarah Mensah</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 italic">
              "Hosting events has never been easier. Highly recommend!"
            </p>
            <p className="mt-4 text-blue-800 font-bold">- Hansen Donkor</p>
          </div>
        </div>
      </section>
    </div>
  );
}