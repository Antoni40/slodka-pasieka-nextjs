"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faLocationDot, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons"
import NavBar from "../components/common/NavBar"
import Footer from "../components/common/Footer"

export default function Contact() {

  return (
    <>
      <NavBar />

      <div className="min-h-screen py-16 text-stone-800 font-sans">
        <div className="w-5/6 mx-auto text-center mb-16">
          <h1 className="font-serif text-5xl font-bold mb-4 text-stone-800">Kontakt</h1>
          <p className="text-stone-600 font-light max-w-md mx-auto">
            Chcesz coś do nas napisać? Pisz śmiało!
          </p>
        </div>

        <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10 lg:pr-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-stone-800">Informacje kontaktowe</h2>
              <p className="text-stone-600 leading-relaxed">
                Zapraszamy do kontaktu z nami
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400">
                  <FontAwesomeIcon icon={faPhone} className="text-xl w-5"/>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-stone-400 block mb-0.5">Zadzwoń do nas</span>
                  <a href="tel:+48000000000" className="text-xl font-medium hover:text-amber-400 transition-colors duration-200">
                    +48 000-000-000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl w-5"/>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-stone-400 block mb-0.5">Napisz e-mail</span>
                  <a href="mailto:kontakt@slodkapracownia.pl" className="text-xl font-medium hover:text-amber-400 transition-colors duration-200">
                    example@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400">
                  <FontAwesomeIcon icon={faLocationDot} className="text-xl w-5"/>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-stone-400 block mb-0.5">Adres stacjonarny</span>
                  <p className="text-xl font-medium hover:text-amber-400 transition-colors duration-200 cursor-pointer">
                    ul. Przykładowa 1, 00-001 Przykład
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-black/10 flex gap-4">
              <div className="text-amber-400 mt-0.5">
                <FontAwesomeIcon icon={faClock} className="text-xl w-5"/>
              </div>
              <div className="w-full">
                <span className="text-xs uppercase tracking-widest text-stone-400 block mb-3">Godziny otwarcia</span>
                <div className="text-sm text-stone-600 space-y-2">
                  <p><strong className="font-bold text-stone-800">Poniedziałek - Piątek:</strong> 00:00 - 00:00</p>
                  <p><strong className="font-bold text-stone-800">Sobota:</strong> 00:00 - 00:00</p>
                  <p><strong className="font-bold text-stone-800 text-sm italic">Niedziela</strong> 00:00 - 00:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-black/5">
            <h3 className="font-serif text-2xl font-bold mb-6 text-stone-800">Napisz bezpośrednio</h3>
            
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-400">Imię i nazwisko</label>
                <input 
                  type="text" 
                  placeholder="Jan Kowalski" 
                  className="w-full px-4 py-3 rounded-sm border border-black/10 focus:outline-none focus:border-amber-400 focus:bg-white bg-white/80 text-sm transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-400">Adres E-mail</label>
                <input 
                  type="email" 
                  placeholder="jan@kowalski.pl" 
                  className="w-full px-4 py-3 rounded-sm border border-black/10 focus:outline-none focus:border-amber-400 focus:bg-white bg-white/80 text-sm transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-400">Wiadomość</label>
                <textarea 
                  rows={6} 
                  placeholder="W czym możemy ci pomóc?" 
                  className="w-full px-4 py-3 rounded-sm border border-black/10 focus:outline-none focus:border-amber-400 focus:bg-white bg-white/80 text-sm transition-colors"
                />
              </div>

              <button 
                type="submit" 
                className="w-full mt-2 bg-stone-800 text-white py-3.5 rounded-sm font-serif font-medium uppercase tracking-widest text-xs hover:bg-amber-400 transition-colors duration-200 shadow-sm cursor-pointer"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>

        </div>
      </div>
      
      <Footer />
    </>
  );
}