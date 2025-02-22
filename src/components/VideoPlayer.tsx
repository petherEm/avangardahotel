"use client";

const VideoPlayer = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source
        src="https://moviestorage.fra1.cdn.digitaloceanspaces.com/ava20s3.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoPlayer;
