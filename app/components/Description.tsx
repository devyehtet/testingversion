interface DescriptionProps {
    artwork: {
      title: string
      description: string
    }
  }
  
  export default function Description({ artwork }: DescriptionProps) {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{artwork.title}</h2>
        <p className="text-xl leading-relaxed">{artwork.description}</p>
      </div>
    )
  }
  
  