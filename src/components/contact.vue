<script setup>
import Navbar from './Navbar.vue'
import Footer from './footer.vue'
</script>

<template>
  <body class="home inner-page about-page dark:bg-zinc-800">
    <Navbar />
    <!-- About intro -->
    <div class="py-12 mb-12 rounded-lg shadow-lg mt-20 dark:bg-zinc-800">
      <div class="flex flex-col md:flex-row dark:bg-zinc-800">
        <!-- Left -->
        <div class="flex-1 text-center md:text-left mb-8 md:mb-0 dark:bg-zinc-800">
          <div class="text-3xl font-bold dark:text-zinc-100">
            contact<br />us
            <hr />
          </div>
          <h3 class="text-2xl font-semibold mt-4 dark:text-zinc-100">
            Call for us 24/7,<br />we are always ready to help
          </h3>
        </div>
        <!-- Right -->
        <div class="flex-1 text-center md:text-left">
          <ul class="flex justify-end space-x-4 pr-14">
            <li>
              <a href="https://twitter.com/" target="_blank">
                <svg
                  fill="#1C2033"
                  width="22"
                  height="52"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3 57.3996C43.9 57.3996 56.7 37.8996 56.7 20.9996C56.7 20.5996 56.7 19.8996 56.6 19.2996C59.1 17.4996 61.3 15.1996 63 12.6996C60.6 13.7996 58.2 14.3996 55.7 14.6996C58.4 13.0996 60.4 10.5996 61.3 7.59961C58.8 8.99961 56.2 10.0996 53.1 10.6996C50.7 8.19961 47.5 6.59961 43.8 6.59961C36.7 6.59961 30.9 12.3996 30.9 19.4996C30.9 20.4996 31 21.4996 31.2 22.4996C20.9 21.7996 11.5 16.6996 5.1 8.99961C4 10.9996 3.4 13.0996 3.4 15.3996C3.4 19.8996 5.7 23.6996 9.2 25.9996C7.1 25.8996 5.1 25.2996 3.4 24.3996C3.4 24.4996 3.4 24.4996 3.4 24.4996C3.4 30.5996 7.8 35.8996 13.6 37.0996C12.5 37.3996 11.3 37.4996 10.4 37.4996C9.6 37.4996 8.7 37.3996 8 37.1996C9.7 42.2996 14.4 45.9996 20 46.0996C15.6 49.4996 10.1 51.5996 4.2 51.5996C3 51.7996 2 51.5996 1 51.4996C6.4 55.2996 13.1 57.3996 20.3 57.3996Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank">
                <svg
                  fill="#1C2033"
                  width="22"
                  height="52"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.4008 25.8H41.8008H39.8008V23.8V17.6V15.6H41.8008H46.0008C47.1008 15.6 48.0008 14.8 48.0008 13.6V3C48.0008 1.9 47.2008 1 46.0008 1H38.7008C30.8008 1 25.3008 6.6 25.3008 14.9V23.6V25.6H23.3008H16.5008C15.1008 25.6 13.8008 26.7 13.8008 28.3V35.5C13.8008 36.9 14.9008 38.2 16.5008 38.2H23.1008H25.1008V40.2V60.3C25.1008 61.7 26.2008 63 27.8008 63H37.2008C37.8008 63 38.3008 62.7 38.7008 62.3C39.1008 61.9 39.4008 61.2 39.4008 60.6V40.3V38.3H41.5008H46.0008C47.3008 38.3 48.3008 37.5 48.5008 36.3V36.2V36.1L49.9008 29.2C50.0008 28.5 49.9008 27.7 49.3008 26.9C49.1008 26.4 48.2008 25.9 47.4008 25.8Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" target="_blank">
                <svg
                  fill="#1C2033"
                  width="22"
                  height="52"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.9 19.2C62.8 16 62.2 13.7 61.5 11.6C60.8 9.5 59.7 7.8 58 6.1C56.3 4.4 54.6 3.4 52.6 2.6C50.6 1.8 48.4 1.3 45 1.2C41.5 1 40.5 1 32 1C23.5 1 22.6 1 19.2 1.1C15.8 1.2 13.7 1.8 11.6 2.5C9.5 3.2 7.8 4.4 6.1 6.1C4.4 7.8 3.3 9.5 2.6 11.6C1.8 13.6 1.3 15.8 1.2 19.2C1.1 22.6 1 23.5 1 32C1 40.5 1 41.4 1.1 44.8C1.2 48.2 1.8 50.3 2.5 52.4C3.2 54.5 4.3 56.2 6 57.9C7.7 59.6 9.5 60.7 11.5 61.4C13.5 62.1 15.7 62.7 19.1 62.8C22.5 63 23.4 63 31.9 63C40.4 63 41.3 63 44.7 62.9C48.1 62.8 50.2 62.2 52.3 61.5C54.4 60.8 56.1 59.7 57.8 58C59.5 56.3 60.6 54.5 61.3 52.5C62 50.5 62.6 48.3 62.7 44.9C62.8 41.7 62.8 40.7 62.8 32.2C62.8 23.7 63 22.6 62.9 19.2ZM57.3 44.5C57.2 47.5 56.6 49.1 56.2 50.3C55.6 51.7 54.9 52.8 53.8 53.8C52.7 54.9 51.7 55.5 50.3 56.2C49.2 56.6 47.6 57.2 44.5 57.3C41.3 57.3 40.3 57.3 32.1 57.3C23.9 57.3 22.8 57.3 19.6 57.2C16.6 57.1 15 56.5 13.8 56.1C12.4 55.5 11.3 54.8 10.3 53.7C9.2 52.6 8.6 51.6 7.9 50.2C7.5 49.1 6.9 47.5 6.8 44.4C6.8 41.3 6.8 40.3 6.8 32C6.8 23.7 6.8 22.7 6.9 19.5C7 16.5 7.6 14.9 8 13.7C8.6 12.3 9.3 11.2 10.3 10.2C11.4 9.1 12.4 8.5 13.8 7.9C14.9 7.5 16.5 6.9 19.6 6.8C22.8 6.7 23.8 6.7 32.1 6.7C40.4 6.7 41.4 6.7 44.6 6.8C47.6 6.9 49.2 7.5 50.4 7.9C51.8 8.5 52.9 9.2 53.9 10.2C55 11.3 55.6 12.3 56.3 13.7C56.7 14.8 57.3 16.4 57.4 19.5C57.5 22.7 57.5 23.7 57.5 32C57.5 40.3 57.4 41.3 57.3 44.5Z"
                  />
                  <path
                    d="M32.0016 16.0996C23.1016 16.0996 16.1016 23.2996 16.1016 31.9996C16.1016 40.8996 23.3016 47.8996 32.0016 47.8996C40.7016 47.8996 48.0016 40.8996 48.0016 31.9996C48.0016 23.0996 40.9016 16.0996 32.0016 16.0996ZM32.0016 42.3996C26.2016 42.3996 21.6016 37.6996 21.6016 31.9996C21.6016 26.2996 26.3016 21.5996 32.0016 21.5996C37.8016 21.5996 42.4016 26.1996 42.4016 31.9996C42.4016 37.7996 37.8016 42.3996 32.0016 42.3996Z"
                  />
                  <path
                    d="M48.7 19.1002C50.7435 19.1002 52.4 17.4436 52.4 15.4002C52.4 13.3567 50.7435 11.7002 48.7 11.7002C46.6565 11.7002 45 13.3567 45 15.4002C45 17.4436 46.6565 19.1002 48.7 19.1002Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <p class="text-gray-700 font-semibold mb-4 dark:text-zinc-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quis molestiae a?
            Beatae explicabo qui id adipisci ipsum, eaque accusamus dolores esse unde quae quia
            vitae pariatur! Fuga, aspernatur modi?
          </p>
        </div>
      </div>
    </div>

    <!-- Google map -->
    <div class="w-full h-64 mb-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14731.50988344307!2d88.4644905!3d22.6210503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f4dc63e6f61%3A0x42fcc2ccc65ce80e!2sEcotence%20Technology!5e0!3m2!1sen!2sin!4v1722409547346!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Contact page -->
    <div class="py-12 px-6 rounded-lg shadow-lg dark:bg-zinc-800">
      <!-- Contact Information Section -->
      <div class="dark:bg-zinc-800 py-12 px-6 rounded-lg shadow-lg">
        <!-- Contact Information Section -->
        <div class="flex flex-col items-center dark:bg-zinc-800">
          <!-- Section Title -->
          <div class="text-center mb-8">
            <h4 class="text-3xl font-semibold mb-2 dark:text-white">Contact Information</h4>
            <hr class="w-32 border-t-2 border-blue-600 mx-auto mt-2" />
          </div>

          <!-- Contact Details -->
          <div class="w-full md:w-3/4">
            <div class="flex flex-wrap -mx-4">
              <!-- New York Store -->
              <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <div class="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 class="text-xl font-semibold mb-4 text-blue-600">New York</h3>
                  <div>
                    <h4 class="font-semibold text-gray-800">Store 1</h4>
                    <p class="text-gray-700 mb-4">
                      68 Atlantic Ave St, Brooklyn, NY 90002, USA<br />
                      (+005) 5896 72 78 79<br />
                      <a href="mailto:hellony@durotan.com.us" class="text-blue-500 hover:underline"
                        >hellony@durotan.com.us</a
                      >
                    </p>
                    <h4 class="font-semibold text-gray-800">Store 2</h4>
                    <p class="text-gray-700">
                      172 Richmond Hill Ave St, Stamford, NY 90002, USA<br />
                      (+005) 5896 03 04 05
                    </p>
                  </div>
                </div>
              </div>

              <!-- London Store -->
              <div class="w-full md:w-1/2 px-4">
                <div class="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 class="text-xl font-semibold mb-4 text-blue-600">London</h3>
                  <p class="text-gray-700">
                    88 Landsome Way St, Stockwell, London 534, UK<br />
                    (+089) 5896 26 26 27<br />
                    <a href="mailto:hellold@durotan.com.uk" class="text-blue-500 hover:underline"
                      >hellold@durotan.com.uk</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-8 border-gray-300" />
      </div>

      <!-- Drop Us A Line Section -->
      <div>
        <div class="flex flex-col items-center space-y-8 p-6">
          <div class="text-center">
            <h4 class="text-2xl font-semibold mb-2 dark:text-white">
              Drop Us A Line
              <hr class="w-16 mx-auto border-t-2 border-blue-500 mt-2" />
            </h4>
          </div>
          <div
            class="w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg border border-gray-200 rounded-lg p-6"
          >
            <form class="space-y-6">
              <div class="text-gray-700 text-sm">
                Required fields are marked <span class="text-red-500">*</span>
              </div>
              <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <input
                    type="text"
                    name="name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Full Name"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    type="email"
                    name="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your E-mail*"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject (optional)"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Write your message here"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </body>
</template>
