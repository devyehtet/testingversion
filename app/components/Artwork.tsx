import Image from 'next/image'

interface ArtworkProps {
  artwork: {
    title: string
    artist: string
    image: string
  }
}

export default function Artwork({ artwork }: ArtworkProps) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={artwork.image}
        alt={artwork.title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 rounded-b-lg">
        <h2 className="text-2xl font-bold">{artwork.title}</h2>
        <p className="text-lg">{artwork.artist}</p>
      </div>
    </div>
  )
}

