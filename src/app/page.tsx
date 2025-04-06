import { Lato, Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const Homepage = () => {
  return (
    <div className="min-h-screen mt-10">
      <div className="max-w-full p-5 flex flex-row justify-between items-center">
        <div className="shadow-lg">
          <Image
            src={"/homepage_house.jpg"}
            alt="house"
            height={600}
            width={600}
            className="rounded-md"
          />
        </div>
        <div className="flex-1 text-center mx-20">
          <h1 className={`text-5xl ${roboto.className}`}>Welcome to Roomfy</h1>
          <p className={`text-lg mt-5 ${lato.className}`}>
            Find your perfect stay whether it&rsquo;s a cozy cabin in the
            mountains, a modern city loft, or a beachside retreat. Start
            exploring unforgettable places hosted by real people, just like you.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center p-5 bg-blue-50 max-w-full mt-10">
        <div className="m-5">
          <h1 className={`text-4xl ${roboto.className}`}>
            Looking for Inquires?
          </h1>
        </div>
        <div className="flex flex-1 justify-evenly items-center p-2 w-full">
          <div className="flex flex-1 flex-col items-center">
            <Image
              src={"/hotel.jpg"}
              alt="hotel"
              height={400}
              width={300}
              className="rounded-sm"
            />
            <div>
              <h1 className="text-lg text-center font-semibold mt-5">Hotels</h1>
              <p className="text-sm text-center w-sm">
                A sleek and stylish hotel room with premium bedding, fast Wi-Fi,
                and daily housekeeping. Perfect for business travelers or
                couples wanting a hassle-free stay with all the essentials.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <Image
              src={"/house_1.jpg"}
              alt="hotel"
              height={400}
              width={400}
              className="rounded-sm"
            />
            <div>
              <h1 className="text-lg text-center font-semibold mt-5">
                House&rsquo;s
              </h1>
              <p className="text-sm text-center w-sm">
                This cozy modern house offers a perfect blend of comfort and
                privacy, featuring a spacious backyard and fully equipped
                kitchen. Ideal for families or groups looking for a relaxing
                retreat in a peaceful neighborhood.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <Image
              src={"/condo.jpg"}
              alt="hotel"
              height={320}
              width={320}
              className="rounded-sm"
            />
            <div>
              <h1 className="text-lg text-center font-semibold mt-5">
                Condo&rsquo;s
              </h1>
              <p className="text-sm text-center w-sm">
                A contemporary high-rise condo with city views, a full kitchen,
                and access to amenities like a gym and pool. Great for extended
                stays or digital nomads seeking comfort and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-5 max-w-full mt-10">
        <div className="m-5">
          <h1 className={`text-4xl ${roboto.className}`}>Special Events</h1>
        </div>
        <div className="flex flex-1 justify-evenly items-center p-2 w-full">
          <div className="flex flex-1 flex-col items-center">
            <Image
              src={"/beach_room_1.jpg"}
              alt="hotel"
              height={200}
              width={300}
              className="rounded-sm"
            />
            <div>
              <h1 className="text-lg text-center font-semibold mt-5">
                Lambug Villa
              </h1>
              <p className="text-sm text-center w-sm">
                A sleek and stylish hotel room with premium bedding, fast Wi-Fi,
                and daily housekeeping. Perfect for business travelers or
                couples wanting a hassle-free stay with all the essentials.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <Image
              src={"/waterfall_room_1.jpg"}
              alt="hotel"
              height={300}
              width={450}
              className="rounded-sm"
            />
            <div>
              <h1 className="text-lg text-center font-semibold mt-5">
                Waterfall Villa
              </h1>
              <p className="text-sm text-center w-sm">
                This cozy modern house offers a perfect blend of comfort and
                privacy, featuring a spacious backyard and fully equipped
                kitchen. Ideal for families or groups looking for a relaxing
                retreat in a peaceful neighborhood.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <Image
              src={"/mountain_room.jpg"}
              alt="hotel"
              height={310}
              width={310}
              className="rounded-sm"
            />
            <div>
              <h1 className="text-lg text-center font-semibold mt-5">
                Mount Villa
              </h1>
              <p className="text-sm text-center w-sm">
                A contemporary high-rise condo with city views, a full kitchen,
                and access to amenities like a gym and pool. Great for extended
                stays or digital nomads seeking comfort and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <Image
            src={"/logo.png"}
            alt="logo-brand"
            height={70}
            width={70}
            className="rounded-md"
          />
          <p>
            Catalyst Corp.
            <br />
            Providing a living comfortable life 2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Homepage;
