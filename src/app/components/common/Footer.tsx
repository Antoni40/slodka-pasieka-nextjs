import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
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
  );
}