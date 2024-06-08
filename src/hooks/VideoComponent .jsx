import React, { useState, useEffect, useRef } from 'react';

const VideoComponent = ({ event }) => {
    const [videoUrl, setVideoUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const loadVideo = async () => {
            try {
                const url = await fetchVideoUrl(event.video);
                setVideoUrl(url);
            } catch (error) {
                console.error('Error loading video URL:', error);
            } finally {
                setLoading(false);
            }
        };

        if (event.video) {
            loadVideo();
        }
    }, [event.video]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate;
        }
    }, [playbackRate]);

    const fetchVideoUrl = async (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url) {
                    resolve(url);
                } else {
                    reject(new Error('Invalid video URL'));
                }
            }, 1000);
        });
    };

    const handlePlaybackRateChange = (rate) => {
        setPlaybackRate(rate);
    };

    const handleForward = (seconds) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds;
        }
    };

    const handleBackward = (seconds) => {
        if (videoRef.current) {
            videoRef.current.currentTime -= seconds;
        }
    };

    const handleProgressClick = (e) => {
        if (!videoRef.current) return; // Check if videoRef.current is available
        const clickPosition = e.nativeEvent.offsetX;
        const progressBarWidth = progressRef.current.offsetWidth;
        const seekTime = (clickPosition / progressBarWidth) * duration;

        videoRef.current.currentTime = seekTime;
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    if (loading) {
        return <p>Loading video...</p>;
    }

    return (
        <>
            {videoUrl ? (
                <div>
                    <video
                        controls
                        autoPlay
                        ref={videoRef}
                        onDurationChange={handleLoadedMetadata}
                        onError={(e) => console.error('Video error:', e, videoUrl)}
                        onLoadedMetadata={handleLoadedMetadata}
                    >
                        <source
                            src={videoUrl}
                            type="video/mp4" // Adjust the video type if necessary
                            onError={(e) => console.error('Source error:', e, videoUrl)}
                        />
                    </video>

                    <div>
                        <button onClick={() => handlePlaybackRateChange(0.25)}>0.25x</button>
                        <button onClick={() => handlePlaybackRateChange(0.5)}>0.5x</button>
                        <button onClick={() => handlePlaybackRateChange(1)}>1x</button>
                        <button onClick={() => handlePlaybackRateChange(2)}>2x</button>
                        <button onClick={() => handleForward(10)}>Forward 10s</button>
                        <button onClick={() => handleBackward(10)}>Backward 10s</button>
                    </div>
                </div>
            ) : (
                <p>No video available</p>
            )}
        </>
    );
};

export default VideoComponent;
