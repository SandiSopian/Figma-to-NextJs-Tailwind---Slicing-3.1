import uniqid from "uniqid";
import React from "react";
import bandung from "../public/data";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";

// Curug Dago
export function CurugDg() {
  return (
    <section>
      {bandung.map((location) => {
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
                <LightgalleryItem key="uniqid" src={location.curugDg.img1}>
                  <Image src={location.curugDg.img1} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img2}>
                  <Image src={location.curugDg.img2} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img3}>
                  <Image src={location.curugDg.img3} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img4}>
                  <Image src={location.curugDg.img4} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img5}>
                  <Image src={location.curugDg.img5} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img6}>
                  <Image src={location.curugDg.img6} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img7}>
                  <Image src={location.curugDg.img7} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img8}>
                  <Image src={location.curugDg.img8} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img9}>
                  <Image src={location.curugDg.img9} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img10}>
                  <Image src={location.curugDg.img10} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Gedung Sate
export function GedungSt() {
  return (
    <section>
      {bandung.map((location) => {
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
                <LightgalleryItem key="uniqid" src={location.gedungSt.img1}>
                  <Image src={location.gedungSt.img1} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gedungSt.img2}>
                  <Image src={location.gedungSt.img2} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gedungSt.img3}>
                  <Image src={location.gedungSt.img3} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gedungSt.img4}>
                  <Image src={location.gedungSt.img4} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gedungSt.img5}>
                  <Image src={location.gedungSt.img5} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gedungSt.img6}>
                  <Image src={location.gedungSt.img6} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gedungSt.img7}>
                  <Image src={location.gedungSt.img7} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gedungSt.img8}>
                  <Image src={location.gedungSt.img8} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gedungSt.img9}>
                  <Image src={location.gedungSt.img9} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.gedungSt.img10}>
                  <Image src={location.gedungSt.img10} alt="curug-dago" width={600} height={400} objectFit="cover" className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
