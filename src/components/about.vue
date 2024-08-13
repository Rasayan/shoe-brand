<script setup>
import Navbar from './Navbar.vue'
import Footer from './footer.vue'
</script>

<template>
  <Navbar />

  <div id="main" class="dark:bg-zinc-800">
    <!-- About intro -->
    <div class="about-intro mt-20">
      <!-- Container -->
      <div class="container mx-auto">
        <!-- Second container -->
        <div class="about-intro__container">
          <!-- Flex container -->
          <div class="about-intro__d-flex flex flex-wrap">
            <!-- Left -->
            <div class="about-intro__left w-full md:w-1/2">
              <!-- Title -->
              <h3 class="about-intro__title text-3x4 font-bold dark:text-zinc-100">
                Stand out of the crowd<br />with own style
              </h3>
              <!-- End title -->
            </div>
            <!-- End left -->
          </div>
          <!-- End flex container -->
        </div>
        <!-- End second container -->
      </div>
      <!-- End container -->
    </div>
    <!-- End about intro -->

    <!-- Product parallax -->
    <div class="product-parallax bg-cover bg-center"></div>
    <!-- End product parallax -->

    <!-- Home about -->
    <div class="home-about py-16 dark:bg-zinc-800">
      <!-- Container -->
      <div class="container mx-auto flex justify-around items-left">
        <!-- Image -->
        <div class="max-w-screen-md mx-auto">
          <img
            src="../assets/images/bg-parallax-2.jpg "
            loading="lazy"
            width="600px"
            height="200px"
            alt=""
          />
        </div>
        <!-- End image -->

        <!-- Content -->
        <div class="home-about__content w-full md:w-1/2 px-4">
          <!-- Title -->
          <h3 class="home-about__title text-3xl font-bold dark:text-zinc-100">
            Utero’s Philosophy
          </h3>
          <!-- End title -->

          <!-- Subtitle -->
          <h5 class="home-about__subtitle text-xl font-medium italic mt-2 dark:text-zinc-100">
            “Good design meant good business”
          </h5>
          <!-- End subtitle -->

          <!-- Description -->
          <div class="home-about__description mt-4">
            <p class="dark:text-zinc-300">
              Rafal Zerlak & Logan Cee, 2 fashion artists work together in UK, start from design the
              casual for people around their location.
            </p>
            <p class="dark:text-zinc-300">
              The inspiration got from natural, color pastel & activities the daily. Utero’s items
              always look very basic but never out trend, easy to mix with any style. Then, they
              developed with series 5 stores cover all United Kingdom.
            </p>
            <p class="dark:text-zinc-300">
              Since launching in February 1986, UTERO has established itself as the world’s leading,
              award-winning online destination for men’s style, with an unparalleled product
              offering from the best menswear and luxury brands, including categories that range
              from luxury watches and lifestyle through to own labels UTERO and AM UTERO.
            </p>
          </div>
          <!-- End description -->

          <!-- Signature -->
          <div class="home-about__signature mt-4">
            <img
              src="../assets/images/bg-parallax-3.jpg "
              loading="lazy"
              width="600px"
              height="200px"
              alt=""
            />
          </div>
          <!-- End signature -->
        </div>
        <!-- End content -->
      </div>
      <!-- End container -->
    </div>
    <!-- End home about -->

    <!-- About section -->
    <div class="bg-grapy-1y-100">
      <!-- Container -->
      <div class="container mx-auto">
        <!-- Title -->
        <h4 class="about-section__title text-center text-2x3 font-bold dark:text-zinc-100">
          Stores list
        </h4>
        <!-- End title -->

        <!-- Stores list -->
        <div class="stores-list mt-8">
          <!-- Row -->
          <div class="flex flex-wrap">
            <!-- Store -->
            <div class="col-lg-4 w-full md:w-1/3 p-4">
              <div
                class="stores-list__item p-4 bg-white shadow-lg border border-gray-200 rounded-lg"
              >
                <!-- Title -->
                <h3 class="store-item__title text-xl font-semibold">New York</h3>
                <!-- End title -->

                <!-- Address -->
                <div class="store-item__address mt-4">
                  <!-- Store 1 -->
                  <h4 class="address__store-number text-lg font-medium">Store 1</h4>
                  <p class="mt-2">
                    68 Atlantic Ave St, Brooklyn, NY 90002, USA<br />
                    (+005) 5896 72 78 79<br />
                    <a href="mailto:hellony@utero.com.us" class="text-blue-500"
                      >hellony@utero.com.us</a
                    >
                  </p>
                  <!-- End store 1 -->

                  <!-- Store 2 -->
                  <h4 class="address__store-number text-lg font-medium mt-4">Store 2</h4>
                  <p class="mt-2">
                    172 Richmond Hill Ave St, Stamford, NY 90002, USA<br />
                    (+005) 5896 03 04 05
                  </p>
                  <!-- End store 2 -->
                </div>
                <!-- End address -->
              </div>
            </div>
            <!-- End store -->

            <!-- Store -->
            <div class="col-lg-4 w-full md:w-1/3 p-4">
              <div
                class="stores-list__item p-4 bg-white shadow-lg border border-gray-200 rounded-lg"
              >
                <!-- Title -->
                <h3 class="store-item__title text-xl font-semibold">London</h3>
                <!-- End title -->

                <!-- Address -->
                <div class="store-item__address mt-4">
                  <!-- Store 1 -->
                  <p class="mt-2">
                    88 Landsome Way St, Stockwell, London 534, UK<br />
                    (+089) 5896 26 26 27<br />
                    <a href="mailto:hellold@utero.com.uk" class="text-blue-500"
                      >hellold@utero.com.uk</a
                    >
                  </p>
                  <!-- End store 1 -->
                </div>
                <!-- End address -->
              </div>
            </div>
            <!-- End store -->

            <!-- Store -->
            <div class="col-lg-4 w-full md:w-1/3 p-4">
              <div
                class="stores-list__item p-4 bg-white shadow-lg border border-gray-200 rounded-lg"
              >
                <!-- Title -->
                <h3 class="store-item__title text-xl font-semibold">Berlin</h3>
                <!-- End title -->

                <!-- Address -->
                <div class="store-item__address mt-4">
                  <!-- Store 1 -->
                  <p class="mt-2">
                    205 Luckstrabe St, Rummelburg, Berlin 77502, Germany<br />
                    (+0668) 5896 45 45 46<br />
                    <a href="mailto:helloge@utero.com.us" class="text-blue-500"
                      >helloge@utero.com.us</a
                    >
                  </p>
                  <!-- End store 1 -->
                </div>
                <!-- End address -->
              </div>
            </div>
            <!-- End store -->
          </div>
          <!-- End row -->
        </div>
        <!-- End stores list -->
      </div>
      <!-- End container -->
    </div>
    <!-- End about section -->
  </div>
  <Footer />
</template>
<style scoped>
/* bg-image */
.product-parallax {
  background-image: url('../assets/2.jpg');
  background-size: cover;
  background-position: center;
  height: 400px; /* Example height */
}
</style>
