import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faPhone, faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

interface socialMediaLink {
  icon: IconDefinition,
  name: string,
  path: string,
  color: string
}

const socialMediaLinks : socialMediaLink[] = [
  {icon: faFacebook, name: "Facebook", path: "https://www.facebook.com/", color: "#3b5998"},
  {icon: faInstagram, name: "Instagram", path: "https://www.instagram.com/", color: "#d300c5"},
  {icon: faYoutube, name: "Youtube", path: "https://www.youtube.com/", color: "#cd201f"}
]

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-50 p-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto mb-6 gap-3 border-b border-white/10 items-center pb-6">
            <div>
              <div className="relative w-[50px] h-[50px]">
                <Image src="/logo.svg" fill alt="Zdjęcie logo" className="mb-3"/>
              </div>
              <div className="text-sm text-stone-200">&copy; Słodka Pasieka {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.</div>
              <div className="text-sm text-stone-300 mt-1">Projekt, realizacja i wdrożenie: Antoni Lubomski <a href="https://github.com/Antoni40" rel="noopener noreferrer external" target="_blank" className="text-stone-400 hover:text-white transition-colors text-sm"><FontAwesomeIcon icon={faGithub}/></a></div>
            </div>

            <div>
              <h4 className="text-lg font-bold tracking wider mb-3 text-amber-300">INFORMACJE</h4>
              <div className="flex flex-col gap-2 text-stone-300 text-sm">
                  <div>
                    <a href="tel:+48000000000" className="hover:text-amber-300 transition-colors ease-in"><FontAwesomeIcon icon={faPhone} className="pr-2 text-amber-300 text-sm"/>ZADZWOŃ DO NAS: +48 000-000-000</a>
                  </div>
                  <div>
                    <a href="./#o-nas" className="hover:text-amber-300">
                      <FontAwesomeIcon icon={faHeart} className="pr-2 text-amber-300 text-sm"/>O NAS
                    </a>
                  </div>
                  <div>
                    <a href="/kontakt" className="hover:text-amber-300">
                      <FontAwesomeIcon icon={faLocationDot} className="pr-2 text-amber-300 text-sm"/>LOKALIZACJA
                    </a>
                  </div>
                </div>
            </div>
          </div>

          <div className="w-5/6 mx-auto flex gap-6 flex-col items-start md:flex-row md:items-center mt-6">
            {socialMediaLinks.map((link, index) => (
              <a key={index} 
                href={link.path} 
                rel="noopener noreferrer external" 
                target="_blank"
                style={{ '--hover-color': link.color } as React.CSSProperties}
                className={`flex items-center gap-2 text-stone-400 hover:text-[var(--hover-color)] transition-colors text-sm`}>
                <FontAwesomeIcon icon={link.icon} className="text-lg"/><span>{link.name}</span>
              </a>
            ))}
          </div>
        </footer>
  );
}