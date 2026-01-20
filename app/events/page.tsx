"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FilterSidebar from "./components/FilterSidebar";
import MobileFilterModal from "./components/MobileFilterModal";
import { SlidersHorizontal } from "lucide-react";

export default function EventsPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Events</span>
          </nav>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/bitbandy.png"
            alt="Bitbandy Logo"
            width={200}
            height={60}
            className="mx-auto h-12 w-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-2">Browse Events</h1>
        <p className="text-gray-600 mb-6">
          Discover upcoming experiences, workshops and more on Bitbandy.
        </p>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowMobileFilters(true)}
          className="md:hidden w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-center mb-4"
        >
          <SlidersHorizontal size={20} className="mr-2" />
          Show Filters
        </button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar - Desktop */}
          <div className="hidden md:block md:col-span-1">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Show Toggle */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
              <label className="font-medium mr-4">Show:</label>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>Upcoming Events</option>
                <option>Past Events</option>
              </select>
            </div>

            {/* No Events Message */}
            <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
              <p className="text-gray-500 text-lg">
                No events match your filters yet
              </p>
            </div>

            {/* Featured Events Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
              <p className="text-gray-600 mb-6">
                Past highlights, ordered with the most recent first. Filters won't
                affect this section.
              </p>
              <Link
                href="/events?past=true"
                className="text-blue-600 hover:text-blue-700"
              >
                Browse all past events →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <MobileFilterModal
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
      />
    </div>
  );
}