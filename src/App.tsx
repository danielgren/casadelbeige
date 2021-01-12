import * as React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Text from "./components/Text";
import { getColor } from "./design/colors";
import tvBeige from "./tvBeige.png";
import jazzyNotes from "./jazzyNotes2.gif";

document.body.style.backgroundColor = getColor("background");

function App() {
  const [musicPlaying, setMusicPlaying] = React.useState(false);

  return (
    <div>
      <header>
        <Text size="xxl">Casa del Beige</Text>
      </header>
      <BeigeMusicPlayer>
        {musicPlaying && <JazzyNotes src={jazzyNotes} alt="beige notes" />}
        <BeigeTv src={tvBeige} alt="beige music" />
        <BeigeYoutubeDiv>
          <ReactPlayer
            url="https://www.youtube.com/embed/zOndEfwUdPo"
            height="185px"
            width="224px"
            onPlay={() => setMusicPlaying(true)}
            onPause={() => setMusicPlaying(false)}
            onEnded={() => setMusicPlaying(false)}
          />
        </BeigeYoutubeDiv>
      </BeigeMusicPlayer>
    </div>
  );
}

const BeigeMusicPlayer = styled.div`
  position: fixed;
  bottom: 0;
  left: 5%;
`;

const BeigeTv = styled.img`
  width: 290px;
`;

const JazzyNotes = styled.img`
  width: 100px;
  position: absolute;
  z-index: 100;
  top: -50px;
`;

const BeigeYoutubeDiv = styled.div`
  position: absolute;
  bottom: 49px;
  left: 14px;
  border-radius: 28px;
  overflow: hidden;
`;

export default App;
