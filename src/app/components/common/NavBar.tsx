"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faLocationDot, faHeart, faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import Image from "next/image"


interface NavLinkItem {
  label: string;
  href: string;
}

function MobileNavBar({children, isOpen} : { children: React.ReactNode, isOpen: boolean }){
  return (
    <div className={`md:hidden fixed top-0 right-0 w-full bg-white text-stone-800 border-b border-black/10 z-1 h-screen flex flex-col items-center gap-4 py-6 text-center transition-all duration-800 ease-in-out ${isOpen ? 'translate-x-0 pointer-events-auto visible opacity-100' : 'translate-x-full pointer-events-none invisible opacity-0'}`}>
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

    return () => document.body.classList.remove('overflow-y-hidden');

  }, [isMobileMenuOpen]);

  function toggleMobileMenu() {
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
      <div className="md:hidden w-full bg-white text-stone-800 z-2">
        <MobileNavBar isOpen={isMobileMenuOpen && isMobile}>
          <button className={`transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'rotate-0' : 'rotate-90'}`} onClick={toggleMobileMenu} aria-label="Zamknij menu">
            <FontAwesomeIcon icon={faClose} className="text-xl text-red-500 cursor-pointer hover:text-red-400 transition-colors"/>
          </button>
          <div className="flex flex-col gap-4 py-6 text-center">
            {mainMenuLinks.map((link, index) => (
              <div key={index}>
                <Link href={link.href} onClick={toggleMobileMenu} className="hover:text-amber-400 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">{link.label}</Link>
              </div>
            ))}
          </div>
        </MobileNavBar>
      </div>
    <>
      <nav className="bg-stone-800 p-4 gap-4 text-sm text-white font-sans hidden md:block w-full tracking-wide">
        <div className="w-5/6 flex flex-row justify-between items-center mx-auto text-amber-50">
          <div>
            <a href="tel:+48000000000" rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="pr-1 text-sm"/>ZADZWOŃ DO NAS: +48 000-000-000
            </a>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <Link href="./#o-nas" className="hover:text-amber-300 transition-colors">
              <FontAwesomeIcon icon={faHeart} className="pr-1 text-sm"/>O NAS
            </Link>
            <Link href={mainMenuLinks[3].href} className="hover:text-amber-300 transition-colors">
              <FontAwesomeIcon icon={faLocationDot} className="pr-1 text-sm"/>{mainMenuLinks[3].label}
            </Link>
            <Link href="" target="_blank" rel="noopener" className="hover:text-[#3b5998]  transition-colors" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="text-sm"/>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-row justify-between md:flex-col md:justify-center items-center gap-6 py-6 w-5/6 font-sans mx-auto border-b border-black/10 md:border-none">
        <div className=" relative flex justify-center h-[50px] w-[50px]">
          <Image src="/logo.svg" alt="Słodka Pasieka Logo" fill />
        </div>

        <button className={`md:hidden p-2 text-xl transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} aria-label="Otwórz menu" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} className="text-sm cursor-pointer"/>
        </button>
      </div>

      <nav className="w-5/6 sticky top-0 z-1 border-y border-black/10 hidden md:block text-stone-800 mx-auto">
        <div className="w-5/6 mx-auto text-center flex flex-row justify-center gap-8 py-6">
            {mainMenuLinks.map((link, index) => (
              link.label != "LOKALIZACJA" &&
              <div key={index}>
                <Link href={link.href} className="hover:text-amber-400 transition-colors ease-in duration-300 font-serif font-medium tracking-wide">{link.label}</Link>
              </div>
            ))}
        </div>
      </nav>
    </>
    </div>
  )
}