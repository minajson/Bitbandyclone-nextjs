import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src="/images/bitbandy.png"
              alt="Bitbandy Logo"
              width={120}
              height={40}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm mb-4">
              Bitbandy is an event ticketing platform for memorable experiences
              in Nigeria. Easily host events, sell tickets (₦ or crypto),
              transfer/resell tickets, and manage merchandise.
            </p>
            <p className="text-sm">
              Support:{" "}
              
                href="mailto:bitbandyevents@gmail.com"
                className="text-blue-400 hover:text-blue-300"
              >
                bitbandyevents@gmail.com
              </a>
            </p>
            <div className="mt-4">
              
                href="https://www.instagram.com/bitbandy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-300 hover:text-white"
              >
                <Instagram size={20} className="mr-2" />
                Instagram
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/events" className="hover:text-white">
                  Browse Events
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/refund-policy" className="hover:text-white">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 Bitbandy Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}