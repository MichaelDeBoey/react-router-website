import { type MetaFunction } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

import iconsHref from "~/icons.svg";
import { getStats } from "~/modules/stats";
import { getRootMatchData } from "~/ui/meta";

export let loader = async () => {
  const stats = await getStats();
  // replace with something better, just fixing types
  if (!stats) {
    throw new Error("Failed to load stats");
  }
  return { stats };
};

export const meta: MetaFunction = ({ matches }) => {
  let { isProductionHost } = getRootMatchData(matches);
  let robots = isProductionHost ? "index,follow" : "noindex, nofollow";
  return [
    { title: "React Router Official Documentation" },
    { name: "robots", content: robots },
    { name: "googlebot", content: robots },
  ];
};

function Logo() {
  return (
    <svg
      aria-label="React Router"
      className="logo h-48 w-full"
      viewBox="0 0 143 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M89.9581 16.5198C87.9105 15.8557 86.8531 16.0796 84.7053 15.8375C81.385 15.4639 80.0623 14.1254 79.5011 10.6805C79.1871 8.75749 79.5579 5.94188 78.7562 4.19869C77.223 0.87488 73.6355 -0.615822 70.0313 0.235019C66.9883 0.95443 64.4563 4.09148 64.316 7.31153C64.1557 10.9881 66.1866 14.1252 69.6739 15.2078C71.3307 15.7231 73.091 15.9825 74.8213 16.1139C77.9946 16.3526 78.2385 18.1721 79.0969 19.6697C79.638 20.6139 80.1625 21.5443 80.1625 24.3597C80.1625 27.1751 79.6347 28.1055 79.0969 29.0497C78.2385 30.5439 77.1796 31.5227 74.0063 31.7648C72.276 31.8962 70.5123 32.1556 68.8589 32.671C65.3716 33.757 63.3407 36.8906 63.501 40.5672C63.6413 43.7872 66.1733 46.9243 69.2163 47.6437C72.8205 48.498 76.408 47.0038 77.9412 43.68C78.7462 41.9368 79.1871 39.9619 79.5011 38.0389C80.0656 34.594 81.3884 33.2555 84.7053 32.882C86.8531 32.6399 89.0759 32.882 91.0886 31.7025C93.2155 30.0996 95.1156 27.6939 95.1156 24.3597C95.1156 21.0255 93.068 17.5297 89.9581 16.5198Z"
        fill="#F44250"
      />
      <path
        d="M55.8924 32.1735C51.707 32.1735 48.293 28.6454 48.293 24.3201C48.293 19.9949 51.707 16.4668 55.8924 16.4668C60.0778 16.4668 63.4918 19.9949 63.4918 24.3201C63.4918 28.6419 60.0744 32.1735 55.8924 32.1735Z"
        fill="#121212"
      />
      <path
        d="M41.8929 48.1334C37.7142 48.123 34.3103 44.581 34.3203 40.2524C34.3304 35.9307 37.7578 32.413 41.9466 32.4268C46.1286 32.4372 49.5325 35.9792 49.5191 40.3078C49.509 44.6261 46.0816 48.1438 41.8929 48.1334Z"
        fill="#121212"
      />
      <path
        d="M98.3596 48.1333C94.1676 48.1574 90.7268 44.6537 90.7032 40.339C90.6799 36.007 94.0704 32.4513 98.2455 32.4269C102.438 32.4027 105.878 35.9065 105.902 40.2212C105.925 44.5497 102.535 48.1089 98.3596 48.1333Z"
        fill="#121212"
      />
      <path
        d="M14.4771 75.7001C13.9446 75.1253 13.8686 74.4256 13.6404 72.0764C13.4629 70.252 12.4995 69.3273 10.8515 69.0024C12.8037 68.7525 14.2489 67.253 14.2489 64.9538C14.2489 61.8799 12.1952 59.9556 8.06254 59.9556H0V75.7001H4.2341V70.4769H7.09909C8.54426 70.4769 9.33024 70.8768 9.45701 72.6762C9.58378 74.3006 9.7866 75.2753 10.1162 75.7001H14.4771ZM4.2341 67.2031V63.3544H7.30192C9.1274 63.3544 10.0401 64.0292 10.0401 65.3037C10.0401 66.7532 9.1274 67.2031 7.30192 67.2031H4.2341Z"
        fill="#121212"
      />
      <path
        d="M23.8792 71.7265C23.4989 72.6012 22.789 72.9761 21.6734 72.9761C20.4311 72.9761 19.4169 72.3263 19.3155 70.9518H27.2513V69.8271C27.2513 66.8032 25.2483 64.2541 21.4706 64.2541C17.9464 64.2541 15.3096 66.7782 15.3096 70.302C15.3096 73.8508 17.8957 76 21.5213 76C24.5131 76 26.5921 74.5755 27.1752 72.0264L23.8792 71.7265ZM19.3662 69.0024C19.5183 67.9528 20.1015 67.1531 21.4199 67.1531C22.6369 67.1531 23.2961 68.0028 23.3468 69.0024H19.3662Z"
        fill="#121212"
      />
      <path
        d="M35.4582 71.0517C35.4582 72.5012 34.5201 73.3509 33.3538 73.3509C32.6693 73.3509 32.2129 72.9761 32.2129 72.4013C32.2129 71.6765 32.7961 71.3766 33.7849 71.1767L35.4582 70.8768V71.0517ZM39.4895 68.6276C39.4895 65.5286 37.2837 64.2541 34.2919 64.2541C30.8945 64.2541 29.0437 65.9535 28.6887 68.4026L32.4918 68.6526C32.6693 67.8278 33.1257 67.253 34.0384 67.253C35.0272 67.253 35.4582 67.8029 35.4582 68.7275V68.9025L32.289 69.4273C29.8297 69.8521 28.2577 70.7768 28.2577 72.9261C28.2577 74.8254 29.7029 75.95 31.9087 75.95C33.7088 75.95 35.0018 75.2753 35.661 73.9757C36.0414 75.2503 37.1316 75.95 38.526 75.95C39.6923 75.95 40.5036 75.6251 41.0868 75.2253V73.076C40.7572 73.201 40.5036 73.251 40.174 73.251C39.743 73.251 39.4895 73.0011 39.4895 72.4262V68.6276Z"
        fill="#121212"
      />
      <path
        d="M41.5548 70.127C41.5548 73.6758 44.1663 76 47.7412 76C51.1386 76 53.0402 73.8508 53.3191 71.1517L49.947 70.9018C49.6681 72.2763 48.9835 72.9511 47.7919 72.9511C46.5496 72.9511 45.6875 72.1264 45.6875 70.127C45.6875 68.1277 46.5496 67.303 47.7919 67.303C48.9835 67.303 49.6681 67.9528 49.947 69.3273L53.3191 69.1024C53.0402 66.4283 51.1386 64.2541 47.7412 64.2541C44.1663 64.2541 41.5548 66.6033 41.5548 70.127Z"
        fill="#121212"
      />
      <path
        d="M55.2955 72.6012C55.2955 75.2253 57.0956 76 58.9971 76C60.5437 76 61.5325 75.6251 62.3946 75.0004V72.3763C61.71 72.6512 61.1522 72.7511 60.6451 72.7511C59.8085 72.7511 59.3521 72.3763 59.3521 71.4266V67.353H62.2931V64.554H59.3521V61.48H56.766L56.3857 62.9295C56.1068 63.9542 55.7518 64.554 54.6109 64.7289L53.7742 64.8539V67.353H55.2955V72.6012Z"
        fill="#121212"
      />
      <path
        d="M83.1109 75.7001C82.5784 75.1253 82.5024 74.4256 82.2742 72.0764C82.0967 70.252 81.1333 69.3273 79.4853 69.0024C81.4375 68.7525 82.8827 67.253 82.8827 64.9538C82.8827 61.8799 80.829 59.9556 76.6963 59.9556H68.6338V75.7001H72.8679V70.4769H75.7329C77.1781 70.4769 77.964 70.8768 78.0908 72.6762C78.2176 74.3006 78.4204 75.2753 78.75 75.7001H83.1109ZM72.8679 67.2031V63.3544H75.9357C77.7612 63.3544 78.6739 64.0292 78.6739 65.3037C78.6739 66.7532 77.7612 67.2031 75.9357 67.2031H72.8679Z"
        fill="#121212"
      />
      <path
        d="M88.0761 70.127C88.0761 68.4526 88.6846 67.303 90.1297 67.303C91.5496 67.303 92.1834 68.4526 92.1834 70.127C92.1834 71.8015 91.5496 72.9511 90.1297 72.9511C88.6846 72.9511 88.0761 71.8015 88.0761 70.127ZM96.3161 70.127C96.3161 66.6782 93.8061 64.2541 90.1297 64.2541C86.4281 64.2541 83.9434 66.6782 83.9434 70.127C83.9434 73.6008 86.4281 76 90.1297 76C93.8061 76 96.3161 73.6008 96.3161 70.127Z"
        fill="#121212"
      />
      <path
        d="M105.401 70.0271C105.401 71.7265 104.894 72.8261 103.601 72.8261C102.358 72.8261 101.927 72.0014 101.927 70.5019V64.554H97.8201V71.5765C97.8201 73.9007 98.7582 76 101.851 76C103.55 76 104.792 75.2753 105.401 74.0257V75.7001H109.508V64.554H105.401V70.0271Z"
        fill="#121212"
      />
      <path
        d="M112.144 72.6012C112.144 75.2253 113.944 76 115.845 76C117.392 76 118.381 75.6251 119.243 75.0004V72.3763C118.558 72.6512 118 72.7511 117.493 72.7511C116.657 72.7511 116.2 72.3763 116.2 71.4266V67.353H119.141V64.554H116.2V61.48H113.614L113.234 62.9295C112.955 63.9542 112.6 64.554 111.459 64.7289L110.622 64.8539V67.353H112.144V72.6012Z"
        fill="#121212"
      />
      <path
        d="M128.786 71.7265C128.406 72.6012 127.696 72.9761 126.58 72.9761C125.338 72.9761 124.324 72.3263 124.222 70.9518H132.158V69.8271C132.158 66.8032 130.155 64.2541 126.377 64.2541C122.853 64.2541 120.216 66.7782 120.216 70.302C120.216 73.8508 122.802 76 126.428 76C129.42 76 131.499 74.5755 132.082 72.0264L128.786 71.7265ZM124.273 69.0024C124.425 67.9528 125.008 67.1531 126.327 67.1531C127.544 67.1531 128.203 68.0028 128.253 69.0024H124.273Z"
        fill="#121212"
      />
      <path
        d="M142.596 64.6789C142.317 64.454 141.709 64.2541 141.024 64.2541C139.528 64.2541 138.337 65.2787 137.931 66.5283V64.554H133.824V75.7001H137.931V70.6019C137.931 68.7275 138.869 68.0278 140.39 68.0278C141.176 68.0278 141.785 68.1777 142.343 68.5026L142.596 64.6789Z"
        fill="#121212"
      />
    </svg>
  );
}

export default function Home() {
  let { stats } = useLoaderData<typeof loader>();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 p-4 lg:p-8">
      <h1 className="mt-12 w-full">
        <Logo />
      </h1>
      <div className="max-w-lg text-center ">
        <p className="text-2xl text-gray-500 dark:text-gray-200">
          React Router is a stable,{" "}
          <b className="text-black dark:text-white">user-obsessed</b>,{" "}
          <b className="text-black dark:text-white">standards-focused</b>,
          centerstack React frameworbrary you can{" "}
          <b className="text-black dark:text-white">deploy anywhere</b>
        </p>
      </div>
      <div className="flex w-96 gap-4">
        <Link
          reloadDocument
          to="/guides"
          className="w-1/2 rounded-lg bg-red-500 px-6 py-3 text-center text-white shadow-lg hover:bg-red-600"
        >
          Guides
        </Link>
        <Link
          reloadDocument
          to="/api"
          className="w-1/2 rounded-lg bg-red-500 px-6 py-3 text-center text-white shadow-lg hover:bg-red-600"
        >
          API Reference
        </Link>
      </div>
      <div className="max-w-lg text-center ">
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Version 7 is everything you know and love about React Router now with
          optional, incrementally-adoptable features like code splitting, data
          loading, mutations, server rendering, pending states, optimistic UI,
          and more
        </p>
      </div>
      <div>
        <Suspense fallback={null}>
          <Await resolve={stats} errorElement={null}>
            {(stats) => (
              <ul className="mt-8 grid grid-cols-1 gap-8 md:grid md:grid-cols-2">
                {/* TODO: single fetch bug? */}
                {stats.map(({ svgId, count, label }) => (
                  <li key={svgId} className="flex gap-4">
                    <svg
                      aria-label="TODO GitHub Octocat logo"
                      className="mt-1 h-8 w-8 text-gray-200 dark:text-gray-600"
                    >
                      <use href={`${iconsHref}#${svgId}`} />
                    </svg>
                    <p className="flex flex-col">
                      <span className="text-3xl font-light tracking-tight">
                        {count?.toLocaleString("en-US")}
                      </span>
                      <span className="text-gray-300 dark:text-gray-500">
                        {label}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
