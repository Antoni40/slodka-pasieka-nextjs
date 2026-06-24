"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faPhone, faLocationDot, faHeart} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

function HomePage() {
  
  return (
      <>
        <nav className="w-full bg-stone-800 p-4 gap-4 text-sm text-white font-sans hidden md:block">
          <div className="w-5/6 flex flex-row justify-between items-center mx-auto text-amber-50">
            <div>
              <a href="tel:+48000000000" rel="noopener noreferrer"
              className="hover:text-amber-800 transition-colors">
                <FontAwesomeIcon icon={faPhone} className="pr-1"/>ZADZWOŃ DO NAS: +48 000-000-000
              </a>
            </div>
            <div className="flex flex-row gap-8 items-center">
              <Link href="#o-nas" className="hover:text-amber-800 transition-colors">
                <FontAwesomeIcon icon={faHeart} className="pr-1"/>O NAS
              </Link>
              <Link href="kontakt" className="hover:text-amber-800 transition-colors">
                <FontAwesomeIcon icon={faLocationDot} className="pr-1"/>LOKALIZACJA
              </Link>
              <Link href="" target="_blank" rel="noopener" className="hover:text-amber-800 transition-colors" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook}/>
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex flex-row justify-between md:flex-col md:justify-center items-center gap-6 py-6 w-5/6 font-sans mx-auto border-b border-black/10 md:border-none">
          <div className="flex justify-center">
            <img src="https://placehold.co/600x400" alt="Słodka Pasieka Logo" className="max-h-20 w-auto object-contain"/>
          </div>
          <button className="md:hidden p-2 text-xl" aria-label="Otwórz menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <nav className="w-full sticky top-0 bg-amber-50 z-1 border-y border-black/10 hidden md:block text-stone-800">
          <div className="w-5/6 mx-auto text-center flex flex-row justify-center gap-8 py-6">
            <div>
              <Link href="#" className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">STRONA GŁÓWNA</Link>
            </div>
            <div>
              <Link href="galeria" className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">GALERIA ZDJĘĆ</Link>
            </div>
            <div>
              <Link href="kontakt" className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">KONTAKT</Link>
            </div>
          </div>
        </nav>

        <section className="pt-6 w-5/6 mx-auto text-stone-800">
          <div className="relative rounded-sm overflow-hidden shadow-sm">
            <img src="https://placehold.co/600x300" alt="Nasze wypieki" className="w-full h-96 object-cover block"/>
            <div className="absolute top-1/2 -translate-y-1/2 left-2 p-4 bg-white/50 hover:bg-white rounded-sm shadow-md cursor-pointer select-none transition-colors">&lt;</div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 p-4 bg-white/80 hover:bg-white rounded-sm shadow-md cursor-pointer select-none transition-colors">&gt;</div>
          </div>
        </section>

        <main className="py-8 w-5/6 mx-auto text-stone-800">
          <header className="py-16">
            <h2 className="text-5xl font-bold text-center font-serif">Odkryj nasze słodkości</h2>
          </header>

          <section id="o-nas" className="py-6 flex flex-col lg:flex-row gap-8 items-center">
            <img src="https://placehold.co/600x400" alt="Praca w cukierni" className="rounded-sm shadow-md max-w-full lg:w-1/2 h-80 object-cover"/>
            <div className="flex flex-col justify-center lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-serif">Czym się zajmuję?</h2>
              <p className="text-l text-stone-600 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, qui? Architecto, aliquam obcaecati saepe rerum sequi nemo quidem corporis ab laboriosam porro ut ducimus facere in aliquid sapiente! Similique, molestias.</p>
            </div>
          </section>

          <header className="py-16">
            <h2 className="text-5xl font-bold text-center font-serif">Moja pasja</h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-6 auto-rows-[250px]">
            
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

        <footer className="bg-stone-800 text-amber-50 p-12 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto pb-3 gap-3 border-b border-white/10 items-center">
            <div className="">
              <img src="https://placehold.co/50x50" alt="Logo stopka" className="mb-3"/>
              <div className="text-sm text-stone-200">&copy; Słodka Pasieka {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.</div>
              <div className="text-sm text-stone-300 mt-1">Realizacja i wdrożenie: Antoni Lubomski</div>
            </div>
            <div className="font-sans">
              <h3 className="text-lg font-bold tracking wider mb-3 text-amber-200">INFORMACJE</h3>
              <div className="flex flex-col gap-2 text-stone-300 text-sm">
                  <div><FontAwesomeIcon icon={faPhone} className="pr-2 text-amber-200"/>ZADZWOŃ DO NAS: +48 000-000-000</div>
                  <div><FontAwesomeIcon icon={faHeart} className="pr-2 text-amber-200"/>O NAS</div>
                  <div><FontAwesomeIcon icon={faLocationDot} className="pr-2 text-amber-200"/>LOKALIZACJA</div>
                </div>
            </div>
          </div>
          <div className="w-5/6 mx-auto flex gap-6 items-center mt-6">
            <a href="" rel="noopener noreferrer" target="_blank"  className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm"><FontAwesomeIcon icon={faFacebook} className="text-lg"/><span>Facebook</span></a>
            <a href="" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm"><FontAwesomeIcon icon={faInstagram} className="text-lg"/><span>Instagram</span></a>
            <a href="" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm"><FontAwesomeIcon icon={faYoutube} className="text-lg"/><span>Youtube</span></a>
          </div>
        </footer>
      </>
  );
}

export default HomePage;
