"use client"
interface pictureInfo {
  src: string;
  alt: string;
  desc: string;
}

interface pictureProps {
  picture: pictureInfo,
  onClick: () => void
}


export default function GalleryPicture({ picture, onClick} : pictureProps) {

  return (
    <div className="overflow-hidden rounded-sm">
      <figure>
        <img 
          src={picture.src} 
          alt={picture.alt} 
          className="w-full h-full object-cover hover:scale-101 transition-transform duration-500 cursor-pointer"
          onClick={onClick}
        />
      </figure>
      <figcaption className="text-center">{picture.desc}</figcaption>
    </div>
  )
}