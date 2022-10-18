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
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">Curug Dago</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/gedung-sate">
                    <a href="/bandung/gedung-sate" className={router.pathname == "/bandung/gedung-sate" ? "active" : ""} onClick={() => router.reload()}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">Gedung Sate</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/curug-dago">
                    <a href="/bandung/curug-dago" className={router.pathname == "/bandung/curug-dago" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">Curug Dago</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/curug-dago">
                    <a href="/bandung/curug-dago" className={router.pathname == "/bandung/curug-dago" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">Curug Dago</div>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/bandung/curug-dago">
                    <a href="/bandung/curug-dago" className={router.pathname == "/bandung/curug-dago" ? "active" : ""}>
                      <div className="block px-4 py-2 text-sm text-bold text-gray-800 hover:bg-gray-900 hover:text-white">Curug Dago</div>
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Bogor */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/bogor">
                  <a className={router.pathname == "/bogor" ? "active" : ""}>
                    <div className="block px-4 py-2 text-lg text-bold text-gray-800 group-hover:text-white group-hover:bg-gray-900">Bogor</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
        {/* Cianjur */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/cianjur">
                  <a className={router.pathname == "/cianjur" ? "active" : ""}>
                    <div className="block px-4 py-2 text-lg text-bold text-gray-800 group-hover:text-white group-hover:bg-gray-900">Cianjur</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
        {/* Cirebon */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/cirebon">
                  <a className={router.pathname == "/cirebon" ? "active" : ""}>
                    <div className="block px-4 py-2 text-lg text-bold text-gray-800 group-hover:text-white group-hover:bg-gray-900">Cirebon</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
        {/* Ciwidey */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/ciwidey">
                  <a className={router.pathname == "/ciwidey" ? "active" : ""}>
                    <div className="block px-4 py-2 text-lg text-bold text-gray-800 group-hover:text-white group-hover:bg-gray-900">Ciwidey</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
        {/* Garut */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/garut">
                  <a className={router.pathname == "/garut" ? "active" : ""}>
                    <div className="block px-4 py-2 text-lg text-bold text-gray-800 group-hover:text-white group-hover:bg-gray-900">Garut</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
        {/* Pangandaran */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/pangandaran">
                  <a className={router.pathname == "/pangandaran" ? "active" : ""}>
                    <div className="block px-4 py-2 text-lg text-bold text-gray-800 group-hover:text-white group-hover:bg-gray-900">Pangandaran</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
        {/* Purwakarta */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/purwakarta">
                  <a className={router.pathname == "/purwakarta" ? "active" : ""}>
                    <div className="block px-4 py-2 text-lg text-bold text-gray-800 group-hover:text-white group-hover:bg-gray-900">Purwakarta</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
        {/* Sukabumi */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="group">
            <Menu.Button className="inline-flex text-bold text-gray-800 group-hover:text-white font-semibold w-full justify-between rounded-md bg-white px-4 py-2 group-hover:bg-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <Menu.Item>
                <Link href="/sukabumi">
                  <a className={router.pathname == "/sukabumi" ? "active" : ""}>
                    <div className="block px-4 py-2 text-lg text-bold text-gray-800 group-hover:text-white group-hover:bg-gray-900">Sukabumi</div>
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Button>
          </div>
        </Menu>
      </div>
    </>
  );
}

export default Location;
