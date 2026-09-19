import React from "react";

function Contact() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-gray-100 py-24">
      <div className="max-w-6xl mx-auto mt-9 px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: MAP + DESCRIPTION */}
        <div>
          <h2 className="text-3xl font-bold text-[#9e1b32] mb-6">
            Visit Eden Spring Hotel
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=-4.0375317,39.6826534&z=17&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              title="Bright Star Dental Clinic Location"
            ></iframe>
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Located along Namgoi-Tilolwo Road in Kapsabet, Eden Spring Hotel
            offers comfortable accommodation, quality dining, conference
            facilities, and a welcoming environment for both business and
            leisure guests.
          </p>
        </div>

        {/* RIGHT: CONTACT DETAILS */}
        <div>
          <h2 className="text-3xl font-bold text-[#9e1b32] mb-10 relative inline-block">
            Contact Us
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#9e1b32] rounded"></span>
          </h2>

          <div className="space-y-6">
            {/* Location */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#9e1b32] text-white text-xl">
                📍
              </div>
              <div>
                <p className="text-sm text-gray-500">Hotel Location</p>
                <p className="text-gray-800 font-semibold">
                  Namgoi - Tilolwo Rd, Kapsabet
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#9e1b32] text-white text-xl">
                📞
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="text-gray-800 font-semibold">0713449449</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#9e1b32] text-white text-xl">
                📧
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800 font-semibold"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
