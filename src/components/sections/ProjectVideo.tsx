"use client";

import * as React from "react";
import Box from "@mui/material/Box";

type ProjectVideoProp =
  | { type: "url"; src: string }
  | { type: "youtube"; id: string }
  | { type: "vimeo"; id: string };

function ProjectVideo({ video }: { video?: ProjectVideoProp }) {
  if (!video) return null;

  if (video.type === "url") {
    return (
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%", // 16:9
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
        }}
      >
        <Box
          component="video"
          src={video.src}
          controls
          playsInline
          preload="metadata"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    );
  }

  if (video.type === "youtube") {
    return (
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Box
          component="iframe"
          src={`https://www.youtube.com/embed/${video.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </Box>
    );
  }

  if (video.type === "vimeo") {
    return (
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Box
          component="iframe"
          src={`https://player.vimeo.com/video/${video.id}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </Box>
    );
  }

  return null;
}
export default ProjectVideo;
