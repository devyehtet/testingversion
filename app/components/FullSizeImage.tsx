import React from 'react'
import Image from 'next/image'

interface FullSizeImageProps {
  imageSrc: string
}

export default function FullSizeImage({ imageSrc }: FullSizeImageProps) {
  return (
    <div className="min-h-screen relative">
      <Image
        src={imageSrc}
        alt="Full size artwork"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

