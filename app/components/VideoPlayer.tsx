'use client'

import React from 'react'

interface VideoPlayerProps {
  videoUrl: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  // Extract the file ID from the Google Drive URL
  const fileId = videoUrl.split('/')[5]
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview?autoplay=1&mute=1`

  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={embedUrl}
        allow="autoplay; encrypted-media"
        className="w-full h-full"
      ></iframe>
    </div>
  )
}

export default VideoPlayer

