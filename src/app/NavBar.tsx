"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faLocationDot, faHeart, faBars } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react"

interface NavLinkItem {
  label: string;
  href: string;
}

interface NavLinkList {
  list: NavLinkItem[];
}

function MobileNavBar(props: { children: React.ReactNode }){
  return (
    <div className="md:hidden w-full bg-white text-stone-800 border-b border-black/10 absolute z-1 h-screen flex flex-col items-center gap-4 py-6 text-center">
      {props.children}
    </div>
  )
}

export default function NavBar ({ list } : NavLinkList) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if(isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    (isMobileMenuOpen) ? (
      <div className="md:hidden w-full bg-white text-stone-800 border-b border-black/10">
        <FontAwesomeIcon icon={faBars} className="text-sm" onClick={toggleMobileMenu}/>
        <MobileNavBar>
          <div className="flex flex-col gap-4 py-6 text-center">
            <Link href={list[1].href} className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">{list[1].label}</Link>
            <Link href={list[2].href} className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">{list[2].label}</Link>
            <Link href={list[3].href} className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">{list[3].label}</Link>
          </div>
        </MobileNavBar>
      </div>
    ) : (
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
            <Link href={list[0].href} className="hover:text-amber-800 transition-colors">
              <FontAwesomeIcon icon={faLocationDot} className="pr-1 text-sm"/>{list[0].label}
            </Link>
            <Link href="" target="_blank" rel="noopener" className="hover:text-amber-800 transition-colors" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="text-sm"/>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-row justify-between md:flex-col md:justify-center items-center gap-6 py-6 w-5/6 font-sans mx-auto border-b border-black/10 md:border-none">
        <div className="flex justify-center">
          <img src="https://placehold.co/600x400" alt="Słodka Pasieka Logo" className="max-h-20 w-auto object-contain"/>
        </div>

        <button className="md:hidden p-2 text-xl" aria-label="Otwórz menu" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} className="text-sm"/>
        </button>
      </div>

      <nav className="w-5/6 sticky top-0 bg-amber-50 z-1 border-y border-black/10 hidden md:block text-stone-800 mx-auto">
        <div className="w-5/6 mx-auto text-center flex flex-row justify-center gap-8 py-6">
          <div>
            <Link href={list[1].href} className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">{list[1].label}</Link>
          </div>
          <div>
            <Link href={list[2].href} className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">{list[2].label}</Link>
          </div>
          <div>
            <Link href={list[3].href} className="hover:text-amber-800 transition-colors ease-in duration-200 font-serif font-medium tracking-wide">{list[3].label}</Link>
          </div>
        </div>
      </nav>
    </>
  )
)
}