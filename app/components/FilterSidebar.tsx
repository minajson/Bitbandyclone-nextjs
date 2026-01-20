
"use client";

import { X } from "lucide-react";

export default function FilterSidebar() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm">
          Clear All Filters
        </button>
      </div>

      {/* Refine Search */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Refine your search</h3>
        <p className="text-sm text-gray-600">
          Narrow results by date, price, location and more.
        </p>
      </div>

      {/* Event Name */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium">Event Name</label>
          <button className="text-blue-600 text-sm">Clear</button>
        </div>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Search event name..."
        />
      </div>

      {/* Event Type */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium">Event Type</label>
          <button className="text-blue-600 text-sm">Clear</button>
        </div>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
          <option>All Types</option>
          <option>Concert</option>
          <option>Workshop</option>
          <option>Conference</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium">Location</label>
          <button className="text-blue-600 text-sm">Clear</button>
        </div>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Enter location..."
        />
      </div>

      {/* Ticket Availability */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium">Ticket Availability</label>
          <button className="text-blue-600 text-sm">Clear</button>
        </div>
        <label className="flex items-center mb-3">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm">Show only events with available tickets</span>
        </label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Minimum tickets available"
        />
      </div>

      {/* Ticket Price Range */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium">Ticket Price Range (₦)</label>
          <button className="text-blue-600 text-sm">Clear</button>
        </div>
        <div className="space-y-2">
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Minimum Price"
          />
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Maximum Price"
          />
        </div>
      </div>

      {/* Start Date Range */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium">Start Date Range</label>
          <button className="text-blue-600 text-sm">Clear</button>
        </div>
        <div className="space-y-2">
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
      </div>

      {/* Event Duration */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium">Event Duration</label>
          <button className="text-blue-600 text-sm">Clear</button>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600 mb-2">Minimum duration—</p>
            <div className="flex gap-2">
              <input
                type="number"
                className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
                placeholder="Hours"
              />
              <input
                type="number"
                className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
                placeholder="Minutes"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Maximum duration—</p>
            <div className="flex gap-2">
              <input
                type="number"
                className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
                placeholder="Hours"
              />
              <input
                type="number"
                className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
                placeholder="Minutes"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              ≤ 30m
            </button>
            <button className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              ≤ 1h
            </button>
            <button className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              ≤ 2h
            </button>
          </div>
        </div>
      </div>

      {/* Sort Order */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium">Sort Order</label>
          <button className="text-blue-600 text-sm">Clear</button>
        </div>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
          <option>Most Recent</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Date: Soonest First</option>
        </select>
      </div>
    </div>
  );
}