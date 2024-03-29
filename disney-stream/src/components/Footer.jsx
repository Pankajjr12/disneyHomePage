import React from "react";

const Footer = () => {
  return (
    <footer class="fixed bottom-0 z-auto left-0  w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="/" class="hover:underline">
          Disney2.0™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <font class="hover:underline cursor-pointer me-4 md:me-6">
            Pankaj Kumar
          </font>
        </li>
        <li>
          <a href="https://github.com/Pankajjr12" class="hover:underline">
            Git Hub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
