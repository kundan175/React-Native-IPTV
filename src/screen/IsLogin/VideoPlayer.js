import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Video from "react-native-video";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };
  const videoRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <Video
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        paused={!isPlaying}
        muted={isMuted}
        useTextureView={false}
        playInBackground={false}
        disableFocus={true}
        posterResizeMode={"cover"}
        resizeMode={"cover"}
        onFullScreen={true}
        fullscreenOrientation="landscape"
        ref={videoRef}
        onProgress={(props) => {
          setCurrentTime(props?.currentTime);
        }}
      />
      {isPlaying && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 100,
            }}
          >
            <TouchableOpacity
              onPress={() => videoRef.current.seek(currentTime - 15)}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 16,
                }}
              >
                -15
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handlePlayPause}
              style={{
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                width: 40,
                height: 40,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderColor: "white",
              }}
            ></TouchableOpacity>
          </View>
        </View>
      )}
      <TouchableOpacity onPress={handlePlayPause}>
        {isPlaying ? <Text>Pause</Text> : <Text>Play</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMute}>
        {isMuted ? <Text>Unmute</Text> : <Text>Mute</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlayer;
