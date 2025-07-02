import React from 'react';

export default function ContactUs() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <p className="text-lg text-gray-700">
          You can reach out to us via email at <a href="mailto:info@example.com">info@example.com</a>{' '}
          or by phone at +1-234-567-890.
        </p>
      </div>
    </div>
  );
}
