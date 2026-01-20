
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-6">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-700">
              Email us directly at:{" "}
              
                href="mailto:bitbandyevents@gmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                bitbandyevents@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}