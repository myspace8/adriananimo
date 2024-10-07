"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Article3() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll event to calculate progress
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(progress);
  };

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="py-3">
        <div className="max-w-3xl m-auto px-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-full">
            <IoIosArrowBack />
            <Link href="/" className="text-lg italic font-semi-bold">
              Back
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 h-1 w-full bg-gray-200 z-50">
          <div
            className="h-1 bg-green-500"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="capitalize text-4xl font-bold mb-4">
          Strategies for enhancing access to science and technology education
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <img
              src="/images/adraina-nimo-profile.jpeg"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-md font-medium">Adriana Nimo</p>
              <p className="text-sm">Aug 7, 2024 · 5 min read</p>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="mb-8">
          <img
            src="https://www.womantowomanmentoring.org/wp-content/uploads/placeholder.jpg"
            alt="Cover Image"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>

        {/* Article Content */}
        <article className="prose lg:prose-xl max-w-none">
          <p>
          Duis vehicula lorem non justo consequat, at fringilla risus tempor. Quisque aliquet, ex ac tincidunt gravida, odio ex venenatis ligula, sit amet suscipit felis orci nec orci. Ut feugiat sem et augue vestibulum, ac vestibulum ipsum ornare.
          </p>
        </article>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6">
          <p className="text-gray-600 text-sm">
            Written by <span className="font-bold">Adriana Nimo</span>.
          </p>
        </footer>
      </div>
    </>
  );
}
