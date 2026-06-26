"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faLocationDot, faHeart, faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"


interface NavLinkItem {
  label: string;
  href: string;
}

// UWAGA: zmiana komponentów zdjęć na komponent Image (sprecyzowanie wysokości i szerokości nie wiem czy nadaje sie do wszystkiego) i zmianna pobrania linków z listy na funkcję map 
// w celu lepszego versatity  

function MobileNavBar({children, isOpen} : { children: React.ReactNode, isOpen: boolean}){
  //pointer events to dodatkowe zabezpieczenie przed kliknięciami
  return (
    <div className={`md:hidden w-full bg-white text-stone-800 border-b border-black/10 absolute z-1 h-screen flex flex-col items-center gap-4 py-6 text-center transition-transform duration-500 ${isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}>
      {children}
    </div>
  )
}

export default function NavBar () {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({query: '(max-width: 768px)'});

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
    //zabezpieczenie przy usunięciu elementu z drzewa nie wiem czy jest potrzebne
    return () => document.body.classList.remove('overflow-y-hidden');
  }, [isMobileMenuOpen]);



  function toggleMobileMenu(e?: React.MouseEvent) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const mainMenuLinks : NavLinkItem[] = [
    { label: "STRONA GŁÓWNA", href: '/' },
    { label: "GALERIA", href: '/galeria' },
    { label: "KONTAKT", href: '/kontakt'},
    { label: "LOKALIZACJA", href: '/kontakt' }
  ]

  return (
    <div>
      <div className="md:hidden w-full bg-white text-stone-800 border-b border-black/10 z-2">
        <MobileNavBar isOpen={isMobileMenuOpen && isMobile}>
          <button  onClick={(e) => {toggleMobileMenu(e)}} aria-label="Zamknij menu">
            <FontAwesomeIcon icon={faClose} className="text-sm text-red-500 cursor-pointer hover:text-red-400"/>
          </button>
          <div className="flex flex-col gap-4 py-6 text-center">
            {mainMenuLinks.map((link, index) => (
              <div key={index}>
                <Link href={link.href} onClick={toggleMobileMenu} className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">{link.label}</Link>
              </div>
            ))}
          </div>
        </MobileNavBar>
      </div>
    <>
      <nav className="bg-stone-800 p-4 gap-4 text-sm text-white font-sans hidden md:block w-full">
        <div className="w-5/6 flex flex-row justify-between items-center mx-auto text-amber-50">
          <div>
            <a href="tel:+48000000000" rel="noopener noreferrer"
            className="hover:text-amber-800 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="pr-1 text-sm"/>ZADZWOŃ DO NAS: +48 000-000-000
            </a>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <Link href="#o-nas" className="hover:text-amber-800 transition-colors">
              <FontAwesomeIcon icon={faHeart} className="pr-1 text-sm"/>O NAS
            </Link>
            <Link href={mainMenuLinks[3].href} className="hover:text-amber-800 transition-colors">
              <FontAwesomeIcon icon={faLocationDot} className="pr-1 text-sm"/>{mainMenuLinks[3].label}
            </Link>
            <Link href="" target="_blank" rel="noopener" className="hover:text-amber-800 transition-colors" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="text-sm"/>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-row justify-between md:flex-col md:justify-center items-center gap-6 py-6 w-5/6 font-sans mx-auto border-b border-black/10 md:border-none">
        <div className="flex justify-center">
          {/* W celu optymalizacji jak będę miał własne zdjecia to wtedy zamienić komponent na Image */}
          <img src="https://placehold.co/600x400" alt="Słodka Pasieka Logo" className="max-h-20 w-auto object-contain"/>
        </div>

        <button className="md:hidden p-2 text-xl" aria-label="Otwórz menu" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} className="text-sm cursor-pointer"/>
        </button>
      </div>

      <nav className="w-5/6 sticky top-0 bg-amber-50 z-1 border-y border-black/10 hidden md:block text-stone-800 mx-auto">
        <div className="w-5/6 mx-auto text-center flex flex-row justify-center gap-8 py-6">
            {mainMenuLinks.map((link, index) => (
              link.label != "LOKALIZACJA" &&
              <div key={index}>
                <Link href={link.href} className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">{link.label}</Link>
              </div>
            ))}
        </div>
      </nav>
    </>
    </div>
  )
}