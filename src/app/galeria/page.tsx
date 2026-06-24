import Link from "next/link"
import NavBar from "../NavBar"
import GalleryPicture from "../GalleryPicture";

interface NavLinkItem {
  label: string;
  href: string;
}

interface pictureInfo {
  src: string;
  alt: string;
  desc: string;
}


export default function Gallery() {
  
  const links : NavLinkItem[] = [
    { label: "LOKALIZACJA", href: '/kontakt' },
    { label: "STRONA GŁÓWNA", href: '/' },
    { label: "GALERIA", href: '/galeria' },
    { label: "KONTAKT", href: '/kontakt'}
  ]

  const picture : pictureInfo = {
    src: "https://placehold.co/600x400",
    alt: "test",
    desc: "test"
  }

  return (
    <>
      <NavBar list={links}/>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-amber-50 w-5/6 mx-auto">          
        <GalleryPicture picture={picture}/>
        <GalleryPicture picture={picture}/>
        <GalleryPicture picture={picture}/>
        <GalleryPicture picture={picture}/>
        <GalleryPicture picture={picture}/>
        <GalleryPicture picture={picture}/>
      </div>
    </>
  )
}