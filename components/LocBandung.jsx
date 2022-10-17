import uniqid from "uniqid";
import React from "react";
import bandung from "../public/data";
import GalleryContainer from "./GalleryContainer";
import { LightgalleryItem } from "react-lightgallery";
import Image from "next/image";
import ImageWrapper from "./ImageWrapper";

export function CurugDg() {
  return (
    <section>
      {bandung.map((location) => {
        return (
          <div className="pt-24 mx-auto">
            <div className="text-base border-b border-gray-400 p-2 mx-auto">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias distinctio delectus fugit quaerat officia? Repudiandae, tenetur? Impedit dolorem est minima itaque quasi molestias praesentium eaque harum cumque. At,
                deleniti repellat.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 px-2 my-5">
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img1}>
                  <Image src={location.curugDg.img1} alt="curug-dago" width={500} height={500} objectFit="cover" className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img2}>
                  <Image src={location.curugDg.img2} alt="curug-dago" width={500} height={500} objectFit="cover" className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
              <div className="w-full">
                <LightgalleryItem key="uniqid" src={location.curugDg.img3}>
                  <Image src={location.curugDg.img3} alt="curug-dago" width={500} height={500} objectFit="cover" className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg" />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
