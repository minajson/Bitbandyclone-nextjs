export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>

        <div className="rounded-lg bg-white p-8 shadow-md">
          <p className="mb-6 text-gray-700">
            Have questions? We&apos;d love to hear from you. Send us a message and
            we&apos;ll respond as soon as possible.
          </p>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-4 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 px-4 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-md border border-gray-300 px-4 py-2"
              />
            </div>

            <button className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
              Send Message
            </button>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-gray-700">
              Email us directly at:{" "}
              <a
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
