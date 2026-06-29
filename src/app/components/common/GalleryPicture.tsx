"use client"

import Image, {StaticImageData} from 'next/image'

interface pictureInfo {
  src: string | StaticImageData;
  alt: string;
  desc: string;
}

interface pictureProps {
  picture: pictureInfo,
  onClick: () => void
}


export default function GalleryPicture({ picture, onClick} : pictureProps) {

  return (
    <div className="overflow-hidden rounded-sm h-[500px] space-y-4 bg-white shadow-sm pb-4">
      <figure className="relative h-9/10 overflow-hidden">
        <Image 
          src={picture.src} 
          alt={picture.alt} 
          className="w-full h-full object-cover hover:scale-102 transition-transform duration-500 cursor-pointer"
          onClick={onClick}
        />
      </figure>
      <figcaption className="text-center font-serif text-xl">{picture.desc}</figcaption>
    </div>
  )
}