import uniqid from "uniqid";
import React from "react";
import { bogor } from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";

// Curug Leuwi Hejo
export function CurugLh() {
  return (
    <section>
      {bogor.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img1}>
                  <Image src={location.curugLh.img1} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img2}>
                  <Image src={location.curugLh.img2} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img3}>
                  <Image src={location.curugLh.img3} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img4}>
                  <Image src={location.curugLh.img4} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img5}>
                  <Image src={location.curugLh.img5} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img6}>
                  <Image src={location.curugLh.img6} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img7}>
                  <Image src={location.curugLh.img7} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img8}>
                  <Image src={location.curugLh.img8} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img9}>
                  <Image src={location.curugLh.img9} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugLh.img10}>
                  <Image src={location.curugLh.img10} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Gunung Pancar
export function GunungPncr() {
  return (
    <section>
      {bogor.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img1}>
                  <Image src={location.gunungPcnr.img1} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img2}>
                  <Image src={location.gunungPcnr.img2} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img3}>
                  <Image src={location.gunungPcnr.img3} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img4}>
                  <Image src={location.gunungPcnr.img4} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img5}>
                  <Image src={location.gunungPcnr.img5} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img6}>
                  <Image src={location.gunungPcnr.img6} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img7}>
                  <Image src={location.gunungPcnr.img7} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img8}>
                  <Image src={location.gunungPcnr.img8} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img9}>
                  <Image src={location.gunungPcnr.img9} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gunungPcnr.img10}>
                  <Image src={location.gunungPcnr.img10} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Penangkaran Rusa Giri Jaya Cariu
export function RusaGJC() {
  return (
    <section>
      {bogor.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img1}>
                  <Image src={location.rusaGJC.img1} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img2}>
                  <Image src={location.rusaGJC.img2} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img3}>
                  <Image src={location.rusaGJC.img3} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img4}>
                  <Image src={location.rusaGJC.img4} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img5}>
                  <Image src={location.rusaGJC.img5} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img6}>
                  <Image src={location.rusaGJC.img6} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img7}>
                  <Image src={location.rusaGJC.img7} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img8}>
                  <Image src={location.rusaGJC.img8} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img9}>
                  <Image src={location.rusaGJC.img9} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.rusaGJC.img10}>
                  <Image src={location.rusaGJC.img10} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Taman Safari Indonesia
export function TamanSI() {
  return (
    <section>
      {bogor.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img1}>
                  <Image src={location.tamanSI.img1} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img2}>
                  <Image src={location.tamanSI.img2} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img3}>
                  <Image src={location.tamanSI.img3} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img4}>
                  <Image src={location.tamanSI.img4} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img5}>
                  <Image src={location.tamanSI.img5} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img6}>
                  <Image src={location.tamanSI.img6} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img7}>
                  <Image src={location.tamanSI.img7} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img8}>
                  <Image src={location.tamanSI.img8} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img9}>
                  <Image src={location.tamanSI.img9} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tamanSI.img10}>
                  <Image src={location.tamanSI.img10} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Tirta Sanita Ciseeng
export function TirtaSC() {
  return (
    <section>
      {bogor.map((location) => {
        return (
          <div className="pt-12 sm:pt-16 lg:pt-20 mx-auto ">
            <div className="font-light border-b border-gray-400 p-3 md:p-2 mx-auto leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-6 md:mx-2 my-5 gap-2">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img1}>
                  <Image src={location.tirtaSC.img1} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img2}>
                  <Image src={location.tirtaSC.img2} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img3}>
                  <Image src={location.tirtaSC.img3} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img4}>
                  <Image src={location.tirtaSC.img4} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img5}>
                  <Image src={location.tirtaSC.img5} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img6}>
                  <Image src={location.tirtaSC.img6} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img7}>
                  <Image src={location.tirtaSC.img7} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img8}>
                  <Image src={location.tirtaSC.img8} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img9}>
                  <Image src={location.tirtaSC.img9} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.tirtaSC.img10}>
                  <Image src={location.tirtaSC.img10} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg hover:opacity-80 cursor-pointer" />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
