"use client"

import { useCallback, useEffect, useState } from "react";
import Image, {StaticImageData} from "next/image"
import NavBar from "./components/common/NavBar"
import Footer from "./components/common/Footer";
import images from '@/assets/images'

interface pictureInfo {
  src: string | StaticImageData;
  alt: string;
  desc: string;
}

interface productCard extends pictureInfo{
  title: string;
}

interface passionSectionItem {
  type: "text" | "image";
  title?: string;
  text?: string;
  src?: string | StaticImageData;
  alt?: string;
}

const SLIDER_PICTURES : pictureInfo[] = [
  {src: images.tortBialy, alt: "Zdjęcie białego tortu z malinami", desc: "Biały tort z malinami"},
  {src: images.tortMis, alt: "Zdjęcie niebieskiego tortu z figurką misia", desc: "Niebieski tort z figurką misia"},
  {src: images.beza, alt: "Zdjęcie bezy z letnim owocami", desc: "Beza z owocami"}
];

const PRODUCTS : productCard[] = [
  {src: images.ciastka, alt: "Zdjęcie ciastek z masłem orzechowym", title: "Monoporcje", desc: "Nowoczesne desery, które idealnie będą pasować na twoją imprezę"},
  {src: images.tortRozowy, alt: "Zdjęcie tortu", title: "Torty z ozdobami", desc: "Delikatne i lekkie"},
  {src: images.tortFioletowy, alt: "Zdjęcie drożdżówki", title: "Torty z owocami", desc: "Orzeźwiające i słodko-kwaśne"},
]

const passionSection : passionSectionItem[] = [
  { type: "image", src: images.tarta, alt: "Słodkości" },
  { 
    type: "text", 
    title: "Zróżnicowane desery", 
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eum iusto quia nesciunt ducimus a cumque. Quisquam, saepe, dolor corrupti autem sequi quibusdam voluptatibus corporis doloremque aut, voluptates a vel?"
  },
  { 
    type: "text", 
    title: "Wyjątkowy smak", 
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati odit maxime id officiis porro provident nemo, possimus at enim dignissimos error aut cum alias itaque, accusamus voluptatibus temporibus similique!"
  },
  { type: "image", src: images.tortBialy, alt: "Zdjęcie białego tortu z malinami" }
]

function HomePage() {

  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (isFading) return;

    const timer = setTimeout(() => {
      moveSliderRight()
    }, 5000)

    return () => { clearTimeout(timer) }
  }, [currentSliderIndex]);
  
  function changeSliderIndex (newIndex : number) {
    if (isFading) return;

    setIsFading(true);

    setTimeout(() => {
      setCurrentSliderIndex(newIndex);
      setIsFading(false);
    }, 300)
  }

  function moveSliderRight() : void {
    const newIndex = (currentSliderIndex < SLIDER_PICTURES.length - 1) ? currentSliderIndex + 1 : 0; 
    changeSliderIndex(newIndex);
  }

  function moveSliderLeft() : void {
    const newIndex = (currentSliderIndex > 0) ? currentSliderIndex - 1 : SLIDER_PICTURES.length - 1; 
    changeSliderIndex(newIndex);
  }

  return (
      <>
        <NavBar />

        <section className="pt-10 w-5/6 max-w-[900px] mx-auto text-stone-800">
          <div className="relative rounded-md overflow-hidden shadow-md bg-black">

            <Image 
              src={SLIDER_PICTURES[currentSliderIndex].src} 
              alt={SLIDER_PICTURES[currentSliderIndex].alt} 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className={`w-full h-[650px] lg:h-[450px] xl:h-[700px] object-cover block transition-opacity duration-300 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}/>

            <button 
              onClick={moveSliderLeft} 
              className="absolute top-1/2 -translate-y-1/2 left-2 p-4 bg-white/60 focus:bg-white/80 hover:bg-white/80 rounded-md shadow-md cursor-pointer select-none transition-colors">&lt;</button>

            <button 
              onClick={moveSliderRight} 
              className="absolute top-1/2 -translate-y-1/2 right-2 p-4 bg-white/60 focus:bg-white/80 hover:bg-white/80 rounded-md shadow-md cursor-pointer select-none transition-colors">&gt;</button>
          </div>
        </section>

        <main id="o-nas" className="my-8 w-5/6 mx-auto text-stone-800">

        <header className="my-16 flex items-center justify-center gap-2 md:gap-4">
          <div className="h-[1px] bg-amber-300 w-8 md:w-16"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-center font-serif tracking-wide text-stone-950">
            Odkryj świat słodkości
          </h2>
          <div className="md:block h-[1px] bg-amber-300 w-8 md:w-16"></div>
        </header>

          <section className="flex flex-col lg:flex-row gap-8 items-center border-b border-black/10 pb-16">

            <div className="relative w-full lg:w-1/2 h-96 md:h-[600px] overflow-hidden rounded-md">
              <Image 
                src={images.tortFioletowy} 
                alt="Zdjęcie tortu z borówkami"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-md shadow-md object-cover hover:scale-102 transition-transform duration-800"/>
            </div>

            <div className="flex flex-col justify-center lg:w-1/2 p-8">
              <h3 className="text-3xl font-bold mb-6 font-serif border-l-4 border-amber-300 pl-2">Czym się zajmuję?</h3>
              <p className="text-lg text-stone-600 leading-relaxed text-pretty max-w-prose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, qui? Architecto, aliquam obcaecati saepe rerum sequi nemo quidem corporis ab laboriosam porro ut ducimus facere in aliquid sapiente! Similique, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis dolor eligendi expedita. Ex vero similique, eos cupiditate veritatis cumque explicabo repellendus error maxime suscipit fugiat iusto aliquam repudiandae vitae?</p>
            </div>
          </section>
          

          <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-6 auto-rows-[500px] my-16 w-full md:w-5/6 mx-auto text-stone-800 spacing-y-20">
              {PRODUCTS.map((product, index) => (
                <div key={index} className="h-full text-center bg-white shadow-md rounded-md pb-4">
                  <div className="relative h-8/10 overflow-hidden rounded-t-md">
                    <Image 
                      src={product.src} 
                      alt={product.alt} 
                      fill
                      sizes="(max-width: 1024px) 50vw, 100vw"
                      className="object-cover hover:scale-102 transition-transform duration-800"/>
                  </div>
                  <h3 className="text-2xl my-2">{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
              ))}
          </section>
          
          <section className="border-t border-black/10">


          <header className="my-16 flex items-center justify-center gap-4">
            <div className="hidden md:block h-[1px] bg-amber-300 w-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center font-serif tracking-wide text-stone-950">
              Moja pasja
            </h2>
            <div className="hidden md:block h-[1px] bg-amber-300 w-16"></div>
          </header>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[500px] md:auto-rows-[600px] mb-20">
            {passionSection.map((item, index) => (
              (item.type === "image" && item.src !== undefined && item.alt !== undefined) ?
                <div key={index} className="relative h-full w-full overflow-hidden rounded-md shadow-md">
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-102 transition-transform duration-800"/>
                </div>
                :
                <section key={index} className="bg-white flex flex-col justify-center p-8 h-full rounded-md shadow-md">
                  <h3 className="text-3xl font-bold mb-6 font-serif border-l-4 border-amber-300 pl-2">{item.title}</h3>
                  <p className="text-stone-600 text-lg leading-relaxed text-pretty max-w-prose">{item.text}</p>
                </section>
            ))}
            </div>
          </section>
        </main>

        <Footer />
      </>
  );
}

export default HomePage;
