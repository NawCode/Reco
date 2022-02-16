import slugify from "slugify";

/**
 * Mapping for tag icons
 */
const tagsIcons = {
  [slugify("cinémas")]: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="clapperboard"
      class="svg-inline--fa fa-clapperboard svg-width"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z"
      ></path>
    </svg>
  ),

  [slugify("musées")]: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bank"
      class="svg-inline--fa fa-bank svg-width"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M243.4 2.587C251.4-.8625 260.6-.8625 268.6 2.587L492.6 98.59C506.6 104.6 514.4 119.6 511.3 134.4C508.3 149.3 495.2 159.1 479.1 160V168C479.1 181.3 469.3 192 455.1 192H55.1C42.74 192 31.1 181.3 31.1 168V160C16.81 159.1 3.708 149.3 .6528 134.4C-2.402 119.6 5.429 104.6 19.39 98.59L243.4 2.587zM256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128zM127.1 416H167.1V224H231.1V416H280V224H344V416H384V224H448V420.3C448.6 420.6 449.2 420.1 449.8 421.4L497.8 453.4C509.5 461.2 514.7 475.8 510.6 489.3C506.5 502.8 494.1 512 480 512H31.1C17.9 512 5.458 502.8 1.372 489.3C-2.715 475.8 2.515 461.2 14.25 453.4L62.25 421.4C62.82 420.1 63.41 420.6 63.1 420.3V224H127.1V416z"
      ></path>
    </svg>
  ),
  [slugify("concerts")]: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="music"
      class="svg-inline--fa fa-music svg-width"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z"
      ></path>
    </svg>
  ),
  [slugify("spectacles")]: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="ticket-simple"
      class="svg-inline--fa fa-ticket-simple svg-width"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128z"
      ></path>
    </svg>
  ),
  [slugify("bibliothèques")]: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="book"
      class="svg-inline--fa fa-book svg-width"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"
      ></path>
    </svg>
  ),
  [slugify("jeunes publics")]: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="child"
      class="svg-inline--fa fa-child svg-width"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M224 144c39.75 0 72-32.25 72-72S263.8-.0004 224-.0004S151.1 32.25 151.1 72S184.3 144 224 144zM415.1 110.8c-13.89-17.14-39.06-19.8-56.25-5.906L307.6 146.4c-47.16 38.19-120.1 38.19-167.3 0L89.17 104.9C72.02 91 46.8 93.67 32.92 110.8C19.02 128 21.66 153.2 38.83 167.1l51.19 41.47c11.73 9.496 24.63 17.16 37.98 23.92L127.1 480c0 17.62 14.38 32 32 32h15.1c17.62 0 32-14.38 32-32v-112h32V480c0 17.62 14.38 32 32 32h15.1c17.62 0 32-14.38 32-32l-.0001-247.5c13.35-6.756 26.25-14.42 37.97-23.91l51.2-41.47C426.3 153.2 428.1 128 415.1 110.8z"
      ></path>
    </svg>
  ),
  [slugify("expositions")]: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="camera-retro"
      class="svg-inline--fa fa-camera-retro svg-width"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M64 64V48C64 39.16 71.16 32 80 32H144C152.8 32 160 39.16 160 48V64H192L242.5 38.76C251.4 34.31 261.2 32 271.1 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V128C0 92.65 28.65 64 64 64zM220.6 121.2C211.7 125.7 201.9 128 192 128H64V192H178.8C200.8 176.9 227.3 168 256 168C284.7 168 311.2 176.9 333.2 192H448V96H271.1L220.6 121.2zM256 216C207.4 216 168 255.4 168 304C168 352.6 207.4 392 256 392C304.6 392 344 352.6 344 304C344 255.4 304.6 216 256 216z"
      ></path>
    </svg>
  ),
  [slugify("arts divers")]: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="paint-brush"
      class="svg-inline--fa fa-paint-brush svg-width"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M175.2 288.9c-24.31 2.156-46.98 12.2-64.38 29.7c-22.4 22.51-32.32 52.9-29.74 82.38c2.254 25.82-16.99 46.1-49.03 46.1C14.34 448 0 462.3 0 480C0 497.7 14.34 512 32.04 512h53.78c54.59 0 133.2-7.568 172.3-46.92c23.67-23.82 32.49-56.36 28.19-87.39L175.2 288.9zM499.5 17.46c-8.979-10.28-21.4-16.44-35.01-17.33c-13.55-1-26.72 3.578-36.92 12.59L222.3 193.7C215.8 199.4 210.1 206.2 205.7 213.1c-9.459 14.95-13.76 31.67-13.78 48.2l110.3 88.18c23.03-5.436 42.71-19.34 55.41-39.44l146.4-231.6C516.2 59.49 514.2 34.4 499.5 17.46z"
      ></path>
    </svg>
  ),
};

/**
 * Returns the icon corresponding to the given tag label
 */
const getTagIcon = (tag) => tagsIcons[slugify(tag)];

export { getTagIcon };
