interface VideoPlayerProps {
  videoId: string
  title: string
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  return (
    <div className="relative w-full">
      <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20" 
           style={{ paddingBottom: "56.25%", aspectRatio: "16/9" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}