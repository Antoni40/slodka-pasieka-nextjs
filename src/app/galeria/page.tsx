"use client"
import NavBar from "../components/common/NavBar"
import GalleryPicture from "../components/common/GalleryPicture";
import Footer from "../components/common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import images from "@/assets/images";
import Image, { StaticImageData } from "next/image";

interface pictureInfo {
  src: string | StaticImageData;
  alt: string;
  desc: string;
}


export default function Gallery() {
  
const galleryItems: pictureInfo[] = [
    { src: images.beza, alt: "Beza", desc: "Beza" },
    { src: images.ciastka, alt: "Ciastka", desc: "Ciastka" },
    { src: images.tarta, alt: "Tarta", desc: "Tarta" },
    { src: images.tortBialy, alt: "Tort z malinami", desc: "Tort z malinami" },
    { src: images.tortCzarnoBialy, alt: "Czarno biały tort", desc: "Czarno biały tort" },
    { src: images.tortFioletowy, alt: "Tort z borówkami", desc: "Tort z borówkami" },
    { src: images.tortMis, alt: "Tort z misiem", desc: "Tort z misiem" },
    { src: images.tortRozowy, alt: "Tort różowy", desc: "Tort różowy" },

  ];

  const [activePicture, setActivePicture] = useState<pictureInfo | null>(null);

  function openPopUp(picture : pictureInfo) : void{
    setActivePicture(picture);
  }

  function closePopUp() : void {
    setActivePicture(null);
  }

  useEffect(() => {
    if (activePicture){
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
    return () => { document.body.classList.remove('overflow-y-hidden') }
  }, [activePicture])

  return (
    <>
      <NavBar />
      
      <div className={`fixed inset-0 z-1 flex justify-center items-center flex-col bg-stone-900/80 transition-all duration-300 bg-white/50 ${activePicture ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      onClick={closePopUp}>
        {activePicture &&
          <div className="flex flex-col p-4 rounded-md shadow-md max-w-4xl w-11/12 bg-white text-center" onClick={(e) => e.stopPropagation()}>
            <button className="text-red-500 hover:text-red-300 ml-auto p-2 text-xl cursor-pointer transition-colors"
            onClick={closePopUp}
            aria-label="Zamknij podgląd">
              <FontAwesomeIcon icon={faClose} />
            </button>
            <div className="relative h-[500px] w-full md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[600px] max-w-screen max-h-screen mx-auto">
              <Image src={activePicture.src} alt={activePicture.alt} fill className="object-contain rounded-md"/>
            </div>
            <p className="text-black font-serif text-3xl mt-4">{activePicture.alt}</p>
            <p className="text-stone-700 text-sm mt-2">{activePicture.desc}</p>
          </div>
        }
      </div>

      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-5/6 mx-auto my-10">          
        {galleryItems.map((item, index) => (
          <GalleryPicture
            key={index}
            picture={item}
            onClick={() => {openPopUp(item)}}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}