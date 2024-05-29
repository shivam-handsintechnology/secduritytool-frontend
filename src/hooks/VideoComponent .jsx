import React, { useState, useEffect, useRef } from 'react';
import { useDeleteData } from './DataFetchHook';

const VideoComponent = ({ event }) => {
    const [videoUrl, setVideoUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const videoRef = useRef(null); // Create a ref for the video element
    const { Data, errors, handleSubmit } = useDeleteData();

    useEffect(() => {
        if (event.video) {
            // Simulate an asynchronous operation to load/validate the video URL
            fetchVideoUrl(event.video)
                .then(url => {
                    setVideoUrl(url);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error loading video URL:', error);
                    setLoading(false);
                });
        }
    }, [event.video]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.25; // Set the desired playback rate
        }
    }, [videoUrl]); // Ensure this runs when the video URL is set

    const fetchVideoUrl = async (url) => {
        // Here you can add any asynchronous operations needed to validate the URL
        // For example, you can fetch the URL to ensure it's accessible
        // Simulating with a resolved promise
        return new Promise((resolve, reject) => {
            // Simulate network delay
            setTimeout(() => {
                // If the URL is valid, resolve it
                // Otherwise, reject with an error message
                if (url) {
                    resolve(url);
                } else {
                    reject(new Error('Invalid video URL'));
                }
            }, 1000);
        });
    };

    if (loading) {
        return <p>Loading video...</p>;
    }

    return (
        <>
            {videoUrl ? (
                <video
                    controls
                    autoPlay
                    ref={videoRef} // Attach the ref to the video element
                    onError={(e) => console.error('Video error:', e, videoUrl)}
                >
                    <source
                        src={videoUrl}
                        type="video/webm"
                        onError={(e) => console.error('Source error:', e, videoUrl)}
                    />
                </video>
            ) : (
                <p>No video available</p>
            )}
        </>
    );
};

export default VideoComponent;
