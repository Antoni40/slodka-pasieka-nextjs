"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faLocationDot, faHeart} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import NavBar from "./NavBar"


function HomePage() {
  
  return (
      <>
        <NavBar />

        <section className="pt-10 w-5/6 mx-auto text-stone-800">
          <div className="relative rounded-sm overflow-hidden shadow-sm">
            <img src="https://placehold.co/600x300" alt="Nasze wypieki" className="w-full h-120 object-cover block"/>
            <div className="absolute top-1/2 -translate-y-1/2 left-2 p-4 bg-white/50 hover:bg-white rounded-sm shadow-md cursor-pointer select-none transition-colors">&lt;</div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 p-4 bg-white/80 hover:bg-white rounded-sm shadow-md cursor-pointer select-none transition-colors">&gt;</div>
          </div>
        </section>

        <main id="o-nas" className="my-8 w-5/6 mx-auto text-stone-800">
          <header className="mt-18 mb-12">
            <h2 className="text-5xl font-bold text-center font-serif">Odkryj nasze słodkości</h2>
          </header>

          <section className="flex flex-col lg:flex-row gap-8 items-center mb-20">
            <img src="https://placehold.co/600x400" alt="Praca w cukierni" className="rounded-sm shadow-md max-w-full lg:w-1/2 max-width-96 object-cover"/>
            <div className="flex flex-col justify-center lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-serif">Czym się zajmuję?</h2>
              <p className="text-l text-stone-600 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, qui? Architecto, aliquam obcaecati saepe rerum sequi nemo quidem corporis ab laboriosam porro ut ducimus facere in aliquid sapiente! Similique, molestias.</p>
            </div>
          </section>

          <header className="mt-26 mb-12">
            <h2 className="text-5xl font-bold text-center font-serif">Moja pasja</h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-6 auto-rows-[200px] mb-20">
            
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

        <footer className="bg-stone-800 text-amber-50 p-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto mb-3 gap-3 border-b border-white/10 items-center pb-3">
            <div className="">
              <img src="https://placehold.co/50x50" alt="Logo stopka" className="mb-3"/>
              <div className="text-sm text-stone-200">&copy; Słodka Pasieka {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.</div>
              <div className="text-sm text-stone-300 mt-1">Realizacja i wdrożenie: Antoni Lubomski</div>
            </div>
            <div className="font-sans">
              <h3 className="text-lg font-bold tracking wider mb-3 text-amber-200">INFORMACJE</h3>
              <div className="flex flex-col gap-2 text-stone-300 text-sm">
                  <div><FontAwesomeIcon icon={faPhone} className="pr-2 text-amber-200 text-sm"/>ZADZWOŃ DO NAS: +48 000-000-000</div>
                  <div><FontAwesomeIcon icon={faHeart} className="pr-2 text-amber-200 text-sm"/>O NAS</div>
                  <div><FontAwesomeIcon icon={faLocationDot} className="pr-2 text-amber-200 text-sm"/>LOKALIZACJA</div>
                </div>
            </div>
          </div>
          <div className="w-5/6 mx-auto flex gap-6 flex-col items-start md:flex-row md:items-center mt-6">
            <a href="" rel="noopener noreferrer" target="_blank"  className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm"><FontAwesomeIcon icon={faFacebook} className="text-lg"/><span>Facebook</span></a>
            <a href="" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm"><FontAwesomeIcon icon={faInstagram} className="text-lg"/><span>Instagram</span></a>
            <a href="" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm"><FontAwesomeIcon icon={faYoutube} className="text-lg"/><span>Youtube</span></a>
          </div>
        </footer>
      </>
  );
}

export default HomePage;
