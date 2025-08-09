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
    <div className='min-h-screen bg-gray-50 text-gray-800'>
      {/* Hero Section */}
      <div className='w-full px-4 py-10 text-center bg-white shadow-lg'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-blue-800'>
          🏃‍♂️ Sri Sai Ventures LAKE RUN 2.0 – 2025
        </h1>
        <div className='flex flex-col sm:flex-row sm:justify-center gap-3 text-sm sm:text-base'>
          <div className='flex items-center justify-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700'>
            <Calendar className='w-4 h-4' />
            Sunday, August 10, 2025
          </div>
          <a
            href='https://maps.app.goo.gl/R8HHVtdBX3vwgavKA'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-200 hover:text-black'
          >
            <MapPin className='w-4 h-4' />
            Attibele, Anekal, Bengaluru
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className='max-w-6xl mx-auto px-4 py-8'>
        {/* 1. Race Expo */}
        
        <section className='max-w-6xl mx-auto px-4 py-8'>
          {/* Race Day Venue */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden mb-8'>
            <div className='bg-blue-500 text-white px-6 py-4'>
              <h2 className='text-xl font-bold flex items-center gap-2'>
                📍 Race Day Venue
              </h2>
            </div>
            <div className='p-6 text-gray-800 space-y-2'>
              <p>
                <strong>Place:</strong> KHB Ground, Jigala Village, Surya City
                Phase 3, Attibele
              </p>
              <p>
                <strong>Google Map Location:</strong>{' '}
                <a
                  href='https://maps.app.goo.gl/R8HHVtdBX3vwgavKA'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 underline'
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>

          {/* Route Map Section */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden mb-8'>
            <div className='bg-green-600 text-white px-6 py-4'>
              <h2 className='text-xl font-bold flex items-center gap-2'>
                🗺 Route Map
              </h2>
            </div>
            <div className='p-6 text-gray-800 space-y-2'>
              <p>
                <strong>10K Route:</strong>{' '}
                <a
                  href='https://www.strava.com/routes/3380787278975358604'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 underline'
                >
                  View 10K Route
                </a>
              </p>
              <p>
                <strong>5K Route:</strong>{' '}
                <a
                  href='https://www.strava.com/routes/3380785216920734348'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 underline'
                >
                  View 5K Route
                </a>
              </p>
              <p>
                <strong>3K Route:</strong>{' '}
                <a
                  href='https://www.strava.com/routes/3380795451750582924'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 underline'
                >
                  View 3K Route
                </a>
              </p>
            </div>
          </div>

          {/* Race Day Schedule */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden mb-8'>
            <div className='bg-blue-500 text-white px-6 py-4'>
              <h2 className='text-xl font-bold flex items-center gap-2'>
                🕓 Race Day Schedule
              </h2>
            </div>

            <img
              src='https://novarace-events.s3.us-east-2.amazonaws.com/email-attachments/super-admin/3ec5865d-9851-4866-996a-17c271820043.jpeg'
              alt='Race Day Schedule'
              className='w-full rounded-lg shadow-md'
            />
          </div>
        </section>

        {/* 3. Parking */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden mb-8'>
          <div className='bg-green-600 text-white px-6 py-4'>
            <h2 className='text-xl font-bold flex items-center gap-2'>
              🅿️ Race day Parking & How to Reach
            </h2>
          </div>
          <div className='p-6 space-y-4 text-gray-800'>
            <div className='flex gap-3 items-start'>
              <Car className='w-5 h-5 text-green-600 mt-1' />
              <div>
                <p>
                  Vehicles can be parked along{' '}
                  <strong>100 Feet KHB Road</strong> – follow parking signage.
                </p>
                <p className='text-sm text-gray-600 mt-1'>
                  Parking also available inside{' '}
                  <strong>Sri Sai Ventures layout</strong> from{' '}
                  <strong>4:30 AM</strong>.
                </p>
              </div>
            </div>
            <div className='bg-green-50 p-4 rounded-lg text-sm'>
              <p className='text-gray-700'>
                Volunteers will guide you. Please avoid blocking residents'
                driveways. Carpooling is recommended.
              </p>
            </div>
            <div className='flex gap-3 items-start'>
              <MapPin className='w-5 h-5 text-green-600 mt-1' />
              <div>
                <p>
                  <strong>Landmark:</strong> The Oxford Medical College,
                  Attibele
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-start'>
              <ExternalLink className='w-5 h-5 text-green-600 mt-1' />
              <a
                href='https://maps.app.goo.gl/R8HHVtdBX3vwgavKA'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-700 underline font-medium'
              >
                📍 Click here to navigate via Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* 4. Prizes & Categories */}
        <section className='max-w-6xl mx-auto px-4 py-8'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden mb-8 '>
            <div className='bg-blue-500 text-white px-6 py-4'>
              <h2 className='text-xl font-bold flex items-center gap-2'>
                🏆 Prizes & Age Categories
              </h2>
            </div>

            <ul className='list-disc list-inside text-sm text-black space-y-1 pl-2 py-8'>
              <li>
                ✅ Age category determined as on race day (August 10, 2025).
              </li>
              <li>✅ Carry ID proof (DOB mandatory) for prize eligibility.</li>
              <li>
                ✅ In case of tie or disputes, organiser’s decision is final.
              </li>
            </ul>

            {/* 10K */}
            <div className='mb-6'>
              <h3 className='text-lg font-semibold text-blue-700 mb-2'>
                🏃‍♂️ Open 10K – Timed
              </h3>
              <RaceAgeTable />
            </div>

            {/* 5K */}
            <div>
              <h3 className='text-lg font-semibold text-blue-700 mb-2'>
                🏃‍♀️ Open 5K – Timed
              </h3>
              <RaceAgeTable />
            </div>

            <div className='mb-6'>
              <h3 className='text-lg font-semibold text-blue-700 mb-2 pt-8'>
                🧒 Kids Run (3K) – Prize Update
              </h3>

              <div className='bg-orange-50 p-4 rounded-lg shadow-sm space-y-2 text-sm text-gray-800'>
                <p>
                  • <strong>Kids Run:</strong> Minimum age 5 years
                </p>
                <p>
                  • <strong>Majja Run:</strong> Minimum age 7 years
                </p>
                <p>• Finisher medals & certificates for all finishers</p>
                <p className='text-green-700 font-medium'>
                  • Top 3 Boys and Girls in Kids Run will receive a cash prize
                  🎉
                </p>
                <p className='text-xs text-gray-600'>
                  Prize queries:{' '}
                  <a
                    href='mailto:gadinadusportsclub@gmail.com'
                    className='underline text-blue-600'
                  >
                    gadinadusportsclub@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-6'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden mb-8'>
          <div className='bg-blue-500 text-white px-6 py-4'>
            <h2 className='text-xl font-bold flex items-center gap-2'>
              📍 Bib and T-Shirt Distribution details
            </h2>
          </div>
          <div className='p-6 space-y-4 text-gray-800'>
            <div className='flex gap-3 items-start'>
              <MapPin className='w-5 h-5 text-blue-600 mt-1' />
              <div>
                <p className='font-medium'>
                  Near Sri Venkateshwara Garments, Attibele
                </p>
                <a
                  href='https://maps.app.goo.gl/C5W45AWqpRi8jaBS6'
                  target='_blank'
                  className='text-blue-600 underline inline-flex items-center text-sm'
                >
                  View on Maps <ExternalLink className='w-3 h-3 ml-1' />
                </a>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Calendar className='w-5 h-5 text-blue-600' />
              <span>Saturday, August 9, 2025</span>
            </div>
            <div className='flex items-center gap-3'>
              <Clock className='w-5 h-5 text-blue-600' />
              <span>10:00 AM – 7:00 PM</span>
            </div>
            <div className='bg-blue-50 p-4 rounded-lg text-sm space-y-2 text-blue-900'>
              <p>
                • Participants must collect their BIBs on August 9 (Saturday).
              </p>
              <p>
                • Limited Spot Registrations will be available between 02:00 PM to 05:00 PM on the 09-Aug at the Race Expo.</p>
            </div>

            <div className='space-y-2 pt-2'>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4 text-blue-600' />
                <a
                  href='mailto:gadinadusportsclub@gmail.com'
                  className='underline text-blue-700 text-sm'
                >
                  gadinadusportsclub@gmail.com
                </a>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4 text-blue-600' />
                <span className='text-sm'>9900019909 / 9880015879</span>
              </div>
            </div>
          </div>
        </div>

        </section>

        {/* Contact Info */}
        <section className='mt-6'>
          <h2 className='text-xl font-bold text-center text-black mb-4'>
            📞 Contact Information
          </h2>
          <div className='text-sm space-y-2 text-center text-black'>
            <div className='flex justify-center items-center gap-2'>
              <Mail className='w-5 h-5 text-black' />
              <a
                href='mailto:gadinadusportsclub@gmail.com'
                className='text-black underline'
              >
                gadinadusportsclub@gmail.com
              </a>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <Phone className='w-5 h-5 text-black' />
              <a href='tel:9900019909' className='text-black underline'>
                9900019909
              </a>{' '}
              /
              <a href='tel:9880015879' className='text-black underline'>
                9880015879
              </a>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className='bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-xs text-yellow-800 mt-6'>
          <p>
            <strong>Note:</strong> Please collect BIBs on August 9th to avoid
            delays. Race day counters will close at the scheduled time.
          </p>
        </section>
      </div>
    </div>
  );
}

// Reusable Race Age Table Component
function RaceAgeTable() {
  return (
    <div className='overflow-auto'>
      <table className='min-w-full text-sm border border-gray-300 text-left'>
        <thead className='bg-gray-100 text-gray-800'>
          <tr>
            <th className='px-4 py-2 border'>Age Category</th>
            <th className='px-4 py-2 border'>Age as on 10-Aug-2025</th>
            <th className='px-4 py-2 border'>Born On or Before</th>
            <th className='px-4 py-2 border'>Born On or After</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-t'>
            <td className='px-4 py-2 border'>13 – 17 years</td>
            <td className='px-4 py-2 border'>13 to 17 years</td>
            <td className='px-4 py-2 border'>10-Aug-2012</td>
            <td className='px-4 py-2 border'>11-Aug-2007</td>
          </tr>
          <tr className='border-t'>
            <td className='px-4 py-2 border'>18 – 38 years</td>
            <td className='px-4 py-2 border'>18 to 38 years</td>
            <td className='px-4 py-2 border'>10-Aug-2007</td>
            <td className='px-4 py-2 border'>11-Aug-1986</td>
          </tr>
          <tr className='border-t'>
            <td className='px-4 py-2 border'>39 – 59 years</td>
            <td className='px-4 py-2 border'>39 to 59 years</td>
            <td className='px-4 py-2 border'>10-Aug-1986</td>
            <td className='px-4 py-2 border'>11-Aug-1965</td>
          </tr>
          <tr className='border-t'>
            <td className='px-4 py-2 border'>60+ years</td>
            <td className='px-4 py-2 border'>60 years and above</td>
            <td className='px-4 py-2 border'>Born on or before 10-Aug-1965</td>
            <td className='px-4 py-2 border'>–</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
