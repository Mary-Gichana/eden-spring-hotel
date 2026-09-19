
import React from "react";

const services = [
  {
    title: "Swimming Pool",
    description:
      "Take a refreshing swim and unwind by the pool in a relaxing environment, perfect for leisure and recreation.",
    image: "/Images/swimming.jpeg",
  },
  {
    title: "Bar",
    description:
      "Relax and enjoy a selection of refreshing drinks in a comfortable and welcoming bar atmosphere.",
    image: "/Images/bar.jpeg",
  },
  {
    title: "Restaurant",
    description:
      "Enjoy delicious meals prepared with quality ingredients in a comfortable setting, perfect for every guest.",
    image: "/Images/restaurant (2).jpeg",
  },
  {
    title: "Gym",
    description:
      "Stay active during your stay with our fitness facilities, designed to support your exercise and wellness needs.",
    image: "/Images/gym.jpeg",
  },
  {
    title: "Dining",
    description:
      "Enjoy a pleasant dining experience with a variety of delicious meals and a comfortable atmosphere.",
    image: "/Images/restaurant (2).jpeg",
  },
  {
    title: "Conference Facilities",
    description:
      "Our conference facilities provide a comfortable and convenient space for meetings, conferences, workshops, and events.",
    image: "/Images/conferencef.jpeg",
  },
];

function Services() {
  return (
    <section className="bg-blue-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto mt-9">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#9e1b32] mb-4">
            Our Services
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We offer a range of quality facilities and services designed to
            provide comfort, relaxation, convenience, and an enjoyable
            experience for every guest.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#9e1b32] transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
