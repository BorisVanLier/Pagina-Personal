import { useState } from "react";

function YoutubePlayer() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  function agregarVideo() {
    try {
      const link = new URL(url);

      let id = "";

      // Link normal: youtube.com/watch?v=...
      if (link.hostname.includes("youtube.com")) {
        id = link.searchParams.get("v");
      }

      // Link corto: youtu.be/...
      if (link.hostname === "youtu.be") {
        id = link.pathname.slice(1);
      }

      if (id) {
        setVideoId(id);
      } else {
        alert("Pegá un enlace válido de YouTube");
      }

    } catch {
      alert("Pegá un enlace válido de YouTube");
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">

      <input
        type="text"
        placeholder="Pegá un enlace de YouTube"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full max-w-xl p-3 border rounded-lg"
      />

      <button
        onClick={agregarVideo}
        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
      >
        Agregar video
      </button>

      {videoId && (
        <iframe
          className="w-full max-w-2xl aspect-video rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video de YouTube"
          allowFullScreen
        />
      )}

    </div>
  );
}

export default YoutubePlayer;