'use client';

import React from 'react';
import {
  MapPin,
  Clock,
  Calendar,
  Phone,
  Mail,
  Car,
  ExternalLink,
} from 'lucide-react';

export default function LakeRunRaceInfo() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-black"
      style={{
        background:
          'linear-gradient(to bottom, #d0ebff 0%, #60a5fa 50%, #1e3a8a 100%)',
      }}
    >
      {/* Hero */}
      <div className="w-full max-w-2xl px-4 py-10 text-center bg-white rounded-t-3xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          🏃‍♂️ Sri Sai Ventures LAKE RUN 2.0 – 2025
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-3 text-sm sm:text-base">
          <div className="flex items-center justify-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4" />
            Sunday, August 10, 2025
          </div>
          <a
            href="https://maps.app.goo.gl/R8HHVtdBX3vwgavKA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200"
          >
            <MapPin className="w-4 h-4" />
            Attibele, Anekal, Bengaluru
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-2xl px-4 py-6 space-y-8 bg-white shadow-lg">

        {/* Race Schedule Image */}
        <section>
          <h2 className="text-xl font-bold text-center text-blue-800 mb-2">
            🕓 Race Day Schedule
          </h2>
          <p className="text-center text-sm text-gray-800 mb-4">
            KHB Ground, Jigala Village, Surya City Phase 3, Attibele
          </p>
          <img
            src="https://file.notion.so/f/f/db2ea357-35bb-4245-ad40-44b85b1f1386/4e6ce838-3af7-46d2-a27a-fad06b031d85/WhatsApp_Image_2025-08-04_at_18.35.52.jpeg?table=block&id=24582981-b916-8061-a20b-e85a02bae3fc&spaceId=db2ea357-35bb-4245-ad40-44b85b1f1386&expirationTimestamp=1754402400000&signature=DG-uERicc6QeuE5W6X-1pd0q67rDYR1MV-Y3dqkb--w&downloadName=WhatsApp+Image+2025-08-04+at+18.35.52.jpeg"
            alt="Race Day Schedule"
            className="w-full rounded-lg shadow-md"
          />
        </section>

        {/* Race Expo */}
        <section>
          <h2 className="text-xl font-bold text-center text-blue-800 mb-4">
            📍 Race Expo Details
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm space-y-3 text-sm text-black">
            <div className="flex gap-2 items-start">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                Near Sri Venkateshwara Garments, Attibele<br />
                <a
                  href="https://maps.app.goo.gl/C5W45AWqpRi8jaBS6"
                  target="_blank"
                  className="text-blue-600 underline inline-flex items-center"
                >
                  View on Maps <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Saturday, August 9, 2025
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              10:00 AM – 7:00 PM
            </div>
          </div>
        </section>



        {/* 🏆 Prizes & Age Categories */}
        <section>
          <h2 className="text-xl font-bold text-center text-yellow-600 mb-4">🏆 Prizes & Age Categories</h2>

          {/* Open 10K – Timed */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">🏃‍♂️ Open 10K – Timed</h3>
            <div className="overflow-auto">
              <table className="min-w-full text-sm border border-gray-300 text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Age Category</th>
                    <th className="px-4 py-2 border">Age as on 10-Aug-2025</th>
                    <th className="px-4 py-2 border">Born On or Before</th>
                    <th className="px-4 py-2 border">Born On or After</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 border">13 – 17 years</td>
                    <td className="px-4 py-2 border">13 to 17 years</td>
                    <td className="px-4 py-2 border">10-Aug-2012</td>
                    <td className="px-4 py-2 border">11-Aug-2007</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 border">18 – 38 years</td>
                    <td className="px-4 py-2 border">18 to 38 years</td>
                    <td className="px-4 py-2 border">10-Aug-2007</td>
                    <td className="px-4 py-2 border">11-Aug-1986</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 border">39 – 59 years</td>
                    <td className="px-4 py-2 border">39 to 59 years</td>
                    <td className="px-4 py-2 border">10-Aug-1986</td>
                    <td className="px-4 py-2 border">11-Aug-1965</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 border">60+ years</td>
                    <td className="px-4 py-2 border">60 years and above</td>
                    <td className="px-4 py-2 border">Born on or before 10-Aug-1965</td>
                    <td className="px-4 py-2 border">–</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Open 5K – Timed */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">🏃‍♀️ Open 5K – Timed</h3>
            <div className="overflow-auto">
              <table className="min-w-full text-sm border border-gray-300 text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Age Category</th>
                    <th className="px-4 py-2 border">Age as on 10-Aug-2025</th>
                    <th className="px-4 py-2 border">Born On or Before</th>
                    <th className="px-4 py-2 border">Born On or After</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 border">13 – 17 years</td>
                    <td className="px-4 py-2 border">13 to 17 years</td>
                    <td className="px-4 py-2 border">10-Aug-2012</td>
                    <td className="px-4 py-2 border">11-Aug-2007</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 border">18 – 38 years</td>
                    <td className="px-4 py-2 border">18 to 38 years</td>
                    <td className="px-4 py-2 border">10-Aug-2007</td>
                    <td className="px-4 py-2 border">11-Aug-1986</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 border">39 – 59 years</td>
                    <td className="px-4 py-2 border">39 to 59 years</td>
                    <td className="px-4 py-2 border">10-Aug-1986</td>
                    <td className="px-4 py-2 border">11-Aug-1965</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 border">60+ years</td>
                    <td className="px-4 py-2 border">60 years and above</td>
                    <td className="px-4 py-2 border">Born on or before 10-Aug-1965</td>
                    <td className="px-4 py-2 border">–</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

                {/* Kids Prize Info */}
        <section>
          <h2 className="text-xl font-bold text-center text-orange-700 mb-4">
            🧒 Kids Run (3K) – Prize Update
          </h2>
          <div className="bg-orange-50 p-4 rounded-lg shadow-sm space-y-2 text-sm text-black">
            <p>• <strong>Kids Run:</strong> Minimum age 5 years</p>
            <p>• <strong>Majja Run:</strong> Minimum age 7 years</p>
            <p>• Finisher medals & certificates for all finishers</p>
            <p className="text-green-700 font-medium">
              • Top 3 Boys and Girls in Kids Run will receive a cash prize 🎉
            </p>
            <p className="text-xs text-gray-600">
              Prize queries: <a href="mailto:gadinadusportsclub@gmail.com" className="underline text-blue-600">gadinadusportsclub@gmail.com</a>
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-xl font-bold text-center text-purple-800 mb-4">
            📞 Contact Information
          </h2>
          <div className="text-sm space-y-2 text-center text-black">
            <div className="flex justify-center items-center gap-2">
              <Mail className="w-5 h-5 text-purple-600" />
              <a
                href="mailto:gadinadusports@gmail.com"
                className="text-purple-600 underline"
              >
                gadinadusports@gmail.com
              </a>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Phone className="w-5 h-5 text-purple-600" />
              <a href="tel:9900019909" className="text-purple-600 underline">
                9900019909
              </a>{' '}
              /
              <a href="tel:9880015879" className="text-purple-600 underline">
                9880015879
              </a>
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-xs text-yellow-800">
          <p>
            <strong>Note:</strong> Please collect BIBs on August 9th to avoid delays.
            Race day counters will close at the scheduled time.
          </p>
        </section>
      </div>
    </div>
  );
}
