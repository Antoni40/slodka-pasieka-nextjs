"use client"
import NavBar from "./components/common/NavBar"
import Footer from "./components/common/Footer";
import { useState } from "react";

interface pictureInfo {
  src: string;
  alt: string;
  desc: string;
}

function HomePage() {
  const sliderPictures : pictureInfo[] = [
    {src: 'https://placehold.co/600x300/red/white', alt: "test", desc: "test"},
    {src: 'https://placehold.co/600x300/orange/white', alt: "test", desc: "test"},
    {src: 'https://placehold.co/600x300/blue/white', alt: "test", desc: "test"},
  ]  

  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  function changeSliderIndex(newIndex : number) : void {
    if (isFading) return

    setIsFading(true);

    setTimeout(() => {
      setCurrentSliderIndex(newIndex);
      setIsFading(false);
    }, 300)
  }

  function moveSliderRight() : void {
    const newIndex = (currentSliderIndex < sliderPictures.length - 1) ? currentSliderIndex + 1 : 0; 
    changeSliderIndex(newIndex);
  }

  function moveSliderLeft() : void {
    const newIndex = (currentSliderIndex > 0) ? currentSliderIndex - 1 : sliderPictures.length - 1; 
    changeSliderIndex(newIndex);
  }

  return (
      <>
        <NavBar />

        <section className="pt-10 w-5/6 mx-auto text-stone-800">
          <div className="relative rounded-sm overflow-hidden shadow-sm bg-black">
            <img src={sliderPictures[currentSliderIndex].src} alt={sliderPictures[currentSliderIndex].alt} className={`w-full h-[650px] lg:h-[450px] xl:h-[700px] object-cover block transition-opacity duration-300 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}/>
            <button onClick={moveSliderLeft} className="absolute top-1/2 -translate-y-1/2 left-2 p-4 bg-white/50 hover:bg-white rounded-sm shadow-md cursor-pointer select-none transition-colors">&lt;</button>
            <button onClick={moveSliderRight} className="absolute top-1/2 -translate-y-1/2 right-2 p-4 bg-white/80 hover:bg-white rounded-sm shadow-md cursor-pointer select-none transition-colors">&gt;</button>
          </div>
        </section>

        <main id="o-nas" className="my-8 w-5/6 mx-auto text-stone-800">
          <header className="mt-18 mb-12">
            <h2 className="text-5xl font-bold text-center font-serif">Odkryj świat słodkości</h2>
          </header>

          <section className="flex flex-col lg:flex-row gap-8 items-center mb-20">
            <img src="https://placehold.co/600x400" alt="Praca w cukierni" className="rounded-sm shadow-md max-w-full lg:w-1/2 max-w-96 object-cover"/>
            <div className="flex flex-col justify-center lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-serif">Czym się zajmuję?</h2>
              <p className="text-lg text-stone-600 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, qui? Architecto, aliquam obcaecati saepe rerum sequi nemo quidem corporis ab laboriosam porro ut ducimus facere in aliquid sapiente! Similique, molestias.</p>
            </div>
          </section>
          
          {/*Wsadzić tu jakieś png */}
          <section className="grid grid-cols-1 items-center lg:grid-cols-3 gap-6 auto-rows-[500px] my-30 w-full md:w-5/6 mx-auto text-stone-800">
            <div className="h-full">
              <img src="https://placehold.co/600x400" alt="Monoporcje" className="object-cover h-full"/>
            </div>
            <div className="h-full">
              <img src="https://placehold.co/600x400" alt="Torty" className="object-cover h-full"/>
            </div>
            <div className="h-full">
              <img src="https://placehold.co/600x400" alt="Lody" className="object-cover h-full"/>
            </div>
          </section>

          <header className="mt-26 mb-12">
            <h2 className="text-5xl font-bold text-center font-serif">Moja pasja</h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[500px] md:auto-rows-[600px] mb-20">
            
            <div className="h-full w-full order-1 md:order-1">
              <img src="https://placehold.co/200x200" alt="Słodkości" className="h-full w-full object-cover rounded-sm shadow-sm"/>
            </div>

            <section className="py-6 bg-amber-100/40 flex flex-col justify-center p-8 h-full rounded-sm order-2 md:order-2">
              <h3 className="text-2xl font-bold mb-3 font-serif">Fajne słodkosci</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eum iusto quia nesciunt ducimus a cumque. Quisquam, saepe, dolor corrupti autem sequi quibusdam voluptatibus corporis doloremque aut, voluptates a vel?</p>
            </section>

            <section className="py-6 bg-amber-100/40 flex flex-col justify-center p-8 h-full md:order-3 order-4">
              <h3 className="text-2xl font-bold mb-3 font-serif">Skontaktuj się ze mną</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati odit maxime id officiis porro provident nemo, possimus at enim dignissimos error aut cum alias itaque, accusamus voluptatibus temporibus similique!</p>
            </section>

            <div className="h-full w-full md:order-4 order-3">
              <img src="https://placehold.co/200x200" alt="Wypieki" className="h-full w-full object-cover rounded-sm shadow-sm"/>
            </div>

          </div>
        </main>

        <Footer />
      </>
  );
}

export default HomePage;
