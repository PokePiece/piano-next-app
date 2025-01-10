import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import videoData from "../videodata";
import audioData from "../audioData";

function VideoPlayer() {

    const [playing, setPlaying] = useState(false);

    const togglePlay = () => setPlaying(!playing);

    const audioRef = useRef(null)

    return (
        <div>
            <div className="flex">
                {!playing &&
                    <button
                        onClick={togglePlay}
                        id="show-music-btn"
                        style={{ textAlign: "center", marginTop: "30px" }}>
                        Listen to some epic piano music
                    </button>
                }
            </div>
            {playing &&
                <div>
                    <h2 className="text-center" style={{ marginTop: "35px", marginBottom: "35px", padding: "10px" }}>Piano Bops</h2>
                    <h3>Chopin's Pieces</h3>
                    <p style={{ textAlign: "center", margin: "20px 60px 30px 60px", fontSize: "20px" }}
                        
                    >
                        Chopin. Swift. If Beethoven comes in like a fire hydrant Chopin comes in like a sprayhose. More realistic.
                        Always there. But not overbearing. He said if you have to go the stars to reach the hydrant, the sprayhose
                        is maybe close. I want to cover some of his work first because it's more revealing.
                    </p>
                    {videoData.map((video, i) => (
                        <div id="videos">
                            <div id="video-machine">
                                <ReactPlayer
                                    url={video.url}
                                    controls={true}
                                    width="600px"

                                />
                            </div>

                            <div className="audio-wrapper">
                                <h4>{video.title}</h4>
                                <p>{video.text}</p>
                                <h5>Similar Songs</h5>
                                <div className="column" id="extra-songs">

                                    <div className="real-flex">
                                        <p id="audio-desc">{audioData[i].text1}</p>
                                        <audio ref={audioRef} controls>
                                            <source src={audioData[i].song1} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>

                                    <div className="real-flex">
                                        <p id="audio-desc">{audioData[i].text2}</p> <audio ref={audioRef} controls>
                                            <source src={audioData[i].song2} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            }
        </div>
    );
}

export default VideoPlayer;
