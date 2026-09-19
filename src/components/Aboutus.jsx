
function Aboutus() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#9e1b32] italic mb-4">About Us</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            EDEN SPRING HOTEL
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-gray-700 mt-16 text-lg leading-relaxed">
          <p className="mb-4">
            At Eden Spring Hotel, we are dedicated to providing a comfortable,
            welcoming, and memorable experience for every guest. Our friendly
            team is committed to delivering quality hospitality in a relaxing
            environment.
          </p>

          <p className="mb-4">
            We offer comfortable accommodation, delicious dining options, and
            well-equipped spaces for conferences, meetings, and special events.
            Whether you are visiting for business or leisure, we provide
            services designed to make your stay enjoyable and convenient.
          </p>

          <p className="mb-10">
            Our mission is to provide excellent hospitality, quality service,
            and a comfortable experience for our guests. We take pride in
            creating a welcoming atmosphere where every guest can relax, dine,
            celebrate, and enjoy their stay.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;

