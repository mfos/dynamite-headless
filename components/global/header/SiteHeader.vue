<script setup></script>

<template>
  <div>
    <header
      class="pt-4 bg-transparent z-99 w-full lg:right-0 h-10 lg:left-0 lg:max-w-1024 xl:max-w-1200 xl:px-5 lg:mx-auto"
    >
      <div
        class="c-site-header__inner px-4 container flex items-center place-content-between mx-auto md:relative"
      >
        <!-- Logo -->
        <a class="c-site-header__logo" href="/">
          <SiteLogo />
        </a>

        <a href="#" class="c-button__menu-inner js-toggle-drawer self-end mr-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 140 40"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                y1="20"
                x2="140"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#439BD5" />
                <stop offset="1" stop-color="#CB22C4" />
              </linearGradient>
            </defs>
            <title>menu-button</title>
            <g id="border">
              <path
                d="M119.3,40H20.7C9.29,40,0,31,0,20S9.29,0,20.7,0h98.6C130.71,0,140,9,140,20S130.71,40,119.3,40ZM20.7,1.9C10.38,1.9,2,10,2,20S10.38,38.1,20.7,38.1h98.6C129.62,38.1,138,30,138,20S129.62,1.9,119.3,1.9Z"
                fill="url(#linear-gradient)"
              />
            </g>
            <g id="background">
              <rect
                width="140"
                height="40"
                rx="20"
                ry="20"
                fill="url(#linear-gradient)"
              />
            </g>
          </svg>
          <span>Contact us</span>
        </a>

        <!-- <MainNav /> -->
      </div>
    </header>
  </div>
</template>

<style lang="scss">
.c-site-header {
  &__logo {
    @apply inline-block;
    svg {
      width: 120px;
      height: auto;
    }
  }
}

.c-button {
  &__menu-inner {
    @apply relative w-28 text-center bg-transparent flex;

    svg {
      @apply w-28 h-10;
      display: initial;
      #background {
        @apply opacity-0;
      }
    }
    &::before {
      content: none;
    }

    span {
      @apply text-white left-0 right-0 top-3 text-12 absolute block font-display mx-auto;
      letter-spacing: 1px;
    }

    @screen md {
      padding: 21px 22px;
      height: 50px;
      svg {
        width: 176px;
        height: 56px;
        position: absolute;
        top: -2px;
        right: 0;
        #background {
          @apply transition-all duration-200 ease-in-out;
        }
      }
      span {
        @apply transition-colors duration-200 ease-in-out;
        left: 32px;
        top: 17px;
        &::before {
          background-size: 18px;
          top: -3px;
        }
      }
      &:hover {
        @apply bg-transparent;
        svg {
          #background {
            @apply opacity-100;
          }
        }
        span {
          @apply text-white;
        }
      }
    }
  }
}
</style>
