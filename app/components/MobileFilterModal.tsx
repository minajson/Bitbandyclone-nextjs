"use client";

import { X } from "lucide-react";

interface MobileFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileFilterModal({
  isOpen,
  onClose,
}: MobileFilterModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="absolute inset-0 overflow-y-auto bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button onClick={onClose} className="p-2">
            <X size={24} />
          </button>
        </div>

        {/* Filter Content */}
        <div className="p-4">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Refine your search</h3>
            <p className="text-sm text-gray-600">
              Narrow results by date, price, location and more.
            </p>
          </div>

          {/* All the same filters from FilterSidebar */}
          <div className="space-y-6">
            {/* Event Name */}
            <div>
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

            {/* Add all other filter sections here */}
          </div>

          {/* Bottom Actions */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 -mx-4 mt-6">
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Apply Filters
            </button>
            <button className="w-full text-blue-600 py-2 mt-2">
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}