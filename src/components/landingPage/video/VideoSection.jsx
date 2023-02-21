import React from "react";
import {
  Section,
  Heading2,
  VideoContainer,
  Video,
  VideoCaption,
} from "./VideoSectionStyle";
const VideoSection = () => {
  return (
    <>
      <Section>
        <Heading2>Follow Video</Heading2>

        <VideoContainer>
          <Video controls>
            <source
              src="https://www.youtube.com/playlist?list=PL2RRbYdV_lUSJ_9B0EqnITq_KaS1PlGSE"
              type="video/mp4"
            />
            <source
              src="https://www.youtube.com/playlist?list=PL2RRbYdV_lUSJ_9B0EqnITq_KaS1PlGSE"
              type="video/webm"
            />
            <VideoCaption kind="subtitles" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
      </Section>
    </>
  );
};

export default VideoSection;
