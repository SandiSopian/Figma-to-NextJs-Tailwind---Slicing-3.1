import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// Sidebar navigation
function Location() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col gap-3 my-4 border-b border-gray-100 pb-4">
        {/* Bandung */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Bandung
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/bandung/curug-dago">
                    <a href="/bandung/curug-dago" className={router.pathname == "/bandung/curug-dago" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">📌 Curug Dago</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/gedung-sate">
                    <a href="/bandung/gedung-sate" className={router.pathname == "/bandung/gedung-sate" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Gedung Sate</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/jalan-braga">
                    <a href="/bandung/jalan-braga" className={router.pathname == "/bandung/jalan-braga" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Jalan Braga</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/kawah-gunung-tangkuban-perahu">
                    <a href="/bandung/kawah-gunung-tangkuban-perahu" className={router.pathname == "/bandung/kawah-gunung-tangkuban-perahu" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Kawah Gunung Tangkuban Perahu</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/taman-hutan-raya-djuanda">
                    <a href="/bandung/taman-hutan-raya-djuanda" className={router.pathname == "/bandung/taman-hutan-raya-djuanda" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Taman Hutan Raya Djuanda</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Bogor */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Bogor
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/bogor/istana-presiden-cipanas">
                    <a href="/bogor/curug-leuwi-hejo" className={router.pathname == "/bogor/curug-leuwi-hejo" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">📌 Curug Leuwi Hejo</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/gunung-pancar">
                    <a href="/bogor/gunung-pancar" className={router.pathname == "/bogor/gunung-pancar" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Gunung Pancar</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/penangkaran-rusa-giri-jaya-cariu">
                    <a href="/bogor/penangkaran-rusa-giri-jaya-cariu" className={router.pathname == "/bogor/penangkaran-rusa-giri-jaya-cariu" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Penangkaran Rusa Giri Jaya Cariu</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/taman-safari-indonesia">
                    <a href="/bogor/taman-safari-indonesia" className={router.pathname == "/bogor/taman-safari-indonesia" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Taman Safari Indonesia</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bogor/tirta-sanita-ciseeng">
                    <a href="/bogor/tirta-sanita-ciseeng" className={router.pathname == "/bogor/tirta-sanita-ciseeng" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Tirta Sanita Ciseeng</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Cianjur */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Cianjur
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/cianjur/istana-presiden-cipanas">
                    <a href="/cianjur/istana-presiden-cipanas" className={router.pathname == "/cianjur/istana-presiden-cipanas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">📌 Istana Presiden Cipanas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/kebon-raya-cibodas">
                    <a href="/cianjur/kebon-raya-cibodas" className={router.pathname == "/cianjur/kebon-raya-cibodas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Kebon Raya Cibodas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/kebun-agro-inkarla">
                    <a href="/cianjur/kebun-agro-inkarla" className={router.pathname == "/cianjur/kebun-agro-inkarla" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Kebun Agro Inkarla</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/taman-bunga-nusantara">
                    <a href="/cianjur/taman-bunga-nusantara" className={router.pathname == "/cianjur/taman-bunga-nusantara" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Taman Bunga Nusantara</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cianjur/telaga-biru-cipanas">
                    <a href="/cianjur/telaga-biru-cipanas" className={router.pathname == "/cianjur/telaga-biru-cipanas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Telaga Biru Cipanas</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Cirebon */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Cirebon
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/cirebon/hutan-kera-plangon">
                    <a href="/cirebon/hutan-kera-plangon" className={router.pathname == "/cirebon/hutan-kera-plangon" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">📌 Hutan Kera Plangon</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/makam-sunan-gunungjati">
                    <a href="/cirebon/makam-sunan-gunungjati" className={router.pathname == "/cirebon/makam-sunan-gunungjati" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Makam Sunan Gunung Jati</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/setu-patok">
                    <a href="/cirebon/setu-patok" className={router.pathname == "/cirebon/setu-patok" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Setu Patok</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/taman-wisata-goa-sunyaragi">
                    <a href="/cirebon/taman-wisata-goa-sunyaragi" className={router.pathname == "/cirebon/taman-wisata-goa-sunyaragi" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Taman Wisata Goa Sunyaragi</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/cirebon/wisata-kura-kura-belawa">
                    <a href="/cirebon/wisata-kura-kura-belawa" className={router.pathname == "/cirebon/wisata-kura-kura-belawa" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Wisata Kura-Kura Belawa</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Ciwidey */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Ciwidey
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/ciwidey/bukit-jamur">
                    <a href="/ciwidey/bukit-jamur" className={router.pathname == "/ciwidey/bukit-jamur" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">📌 Bukit Jamur</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/ciwidey-valley-resort-hot-spring-waterpark">
                    <a href="/ciwidey/ciwidey-valley-resort-hot-spring-waterpark" className={router.pathname == "/ciwidey/ciwidey-valley-resort-hot-spring-waterpark" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Ciwidey Valley Resort Hot Spring Waterpark</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/d-riam-riverside">
                    <a href="/ciwidey/d-riam-riverside" className={router.pathname == "/ciwidey/d-riam-riverside" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 D'Riam Riverside</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/green-hill-park">
                    <a href="/ciwidey/green-hill-park" className={router.pathname == "/ciwidey/green-hill-park" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Green Hill Park</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/kawah-putih">
                    <a href="/ciwidey/kawah-putih" className={router.pathname == "/ciwidey/kawah-putih" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Kawah Putih</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/kawah-rengganis">
                    <a href="/ciwidey/kawah-rengganis" className={router.pathname == "/ciwidey/kawah-rengganis" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Kawah Rengganis</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/pemandian-air-panas-ciwalini">
                    <a href="/ciwidey/pemandian-air-panas-ciwalini" className={router.pathname == "/ciwidey/pemandian-air-panas-ciwalini" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Pemandian Air Panas Ciwalini</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/perkebunan-teh-rancabali">
                    <a href="/ciwidey/perkebunan-teh-rancabali" className={router.pathname == "/ciwidey/perkebunan-teh-rancabali" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Perkebunan Teh Rancabali</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/rancaupas">
                    <a href="/ciwidey/rancaupas" className={router.pathname == "/ciwidey/rancaupas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Ranca Upas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/rengganis-suspension-bridge">
                    <a href="/ciwidey/rengganis-suspension-bridge" className={router.pathname == "/ciwidey/rengganis-suspension-bridge" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Rengganis Suspension Bridge</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/situ-patenggang">
                    <a href="/ciwidey/situ-patenggang" className={router.pathname == "/ciwidey/situ-patenggang" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Situ Patenggang</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/ciwidey/taman-kelinci-happy-farm">
                    <a href="/ciwidey/taman-kelinci-happy-farm" className={router.pathname == "/ciwidey/taman-kelinci-happy-farm" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Taman Kelinci Happy Farm</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Garut */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Garut
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/garut/curug-batu-nyusun">
                    <a href="/garut/curug-batu-nyusun" className={router.pathname == "/garut/curug-batu-nyusun" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">📌 Curug Batu Nyusun</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/gunung-papandayan">
                    <a href="/garut/gunung-papandayan" className={router.pathname == "/garut/gunung-papandayan" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Gunung Papandayan</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/kawah-kamojang">
                    <a href="/garut/kawah-kamojang" className={router.pathname == "/garut/kawah-kamojang" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Kawah Kamojang</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/kompleks-wisata-cipanas">
                    <a href="/garut/kompleks-wisata-cipanas" className={router.pathname == "/garut/kompleks-wisata-cipanas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Kompleks Wisata Cipanas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/garut/pantai-rancabuaya">
                    <a href="/garut/pantai-rancabuaya" className={router.pathname == "/garut/pantai-rancabuaya" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Pantai Rancabuaya</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Pangandaran */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Pangandaran
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/pangandaran/cagar-alam-pangandaran">
                    <a href="/pangandaran/cagar-alam-pangandaran" className={router.pathname == "/pangandaran/cagar-alam-pangandaran" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">📌 Cagar Alam Pangandaran</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/goa-lanang-selasari">
                    <a href="/pangandaran/goa-lanang-selasari" className={router.pathname == "/pangandaran/goa-lanang-selasari" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Goa Lanang Selasari</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/green-canyon">
                    <a href="/pangandaran/green-canyon" className={router.pathname == "/pangandaran/green-canyon" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Green Canyon</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/konservasi-penyu">
                    <a href="/pangandaran/konservasi-penyu" className={router.pathname == "/pangandaran/konservasi-penyu" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Konservasi Penyu</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/pangandaran/pantai-pangandaran">
                    <a href="/pangandaran/pantai-pangandaran" className={router.pathname == "/pangandaran/pantai-pangandaran" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Pantai Pangandaran</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Purwakarta */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Purwakarta
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/purwakarta/curug-cipurut">
                    <a href="/purwakarta/curug-cipurut" className={router.pathname == "/purwakarta/curug-cipurut" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">📌 Curug Cipurut</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/pasir-langlang">
                    <a href="/purwakarta/pasir-langlang" className={router.pathname == "/purwakarta/pasir-langlang" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Pasir Langlang</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/sumber-air-panas-ciracas">
                    <a href="/purwakarta/sumber-air-panas-ciracas" className={router.pathname == "/purwakarta/sumber-air-panas-ciracas" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Sumber Air Panas Ciracas</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/taman-air-mancur-sri-baduga">
                    <a href="/purwakarta/taman-air-mancur-sri-baduga" className={router.pathname == "/purwakarta/taman-air-mancur-sri-baduga" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Taman Air Mancur Sri Baduga</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/purwakarta/waduk-jatiluhur">
                    <a href="/purwakarta/waduk-jatiluhur" className={router.pathname == "/purwakarta/waduk-jatiluhur" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Waduk Jatiluhur</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Sukabumi */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex text-md text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 hover:bg-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Sukabumi
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                <Menu.Item>
                  <Link href="/sukabumi/curug-cimarinjung">
                    <a href="/sukabumi/curug-cimarinjung" className={router.pathname == "/sukabumi/curug-cimarinjung" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">📌 Curug Cimarinjung</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/danau-bacan">
                    <a href="/sukabumi/danau-bacan" className={router.pathname == "/sukabumi/danau-bacan" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Danau Bacan</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/pantai-pelabuhan-ratu">
                    <a href="/sukabumi/pantai-pelabuhan-ratu" className={router.pathname == "/sukabumi/pantai-pelabuhan-ratu" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Pantai Pelabuhan Ratu</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/pemandian-air-panas-cisolok">
                    <a href="/sukabumi/pemandian-air-panas-cisolok" className={router.pathname == "/sukabumi/pemandian-air-panas-cisolok" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Pemandian Air Panas Cisolok</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/sukabumi/tebing-panenjoan">
                    <a href="/sukabumi/tebing-panenjoan" className={router.pathname == "/sukabumi/tebing-panenjoan" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white leading-loose">📌 Tebing Panenjoan</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}

export default Location;
