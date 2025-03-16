"use client";

// components/GoogleDriveVideo.tsx
import { type FC, useEffect, useState } from "react";

interface GoogleDriveVideoProps {
    fileId: string;
    width?: number | string;
    className?: string;
    title?: string;
    allowFullScreen?: boolean;
}

const GoogleDriveVideo: FC<GoogleDriveVideoProps> = ({
    fileId,
    width = "100%",
    className = "",
    title = "Google Drive Video",
    allowFullScreen = true,
}) => {
    const [videoUrl, setVideoUrl] = useState<string>("");

    useEffect(() => {
        const formatGoogleDriveUrl = (id: string) => {
            return `https://drive.google.com/file/d/${id}/preview`;
        };

        setVideoUrl(formatGoogleDriveUrl(fileId));
    }, [fileId]);

    if (!videoUrl) return null;

    return (
        <div className={`aspect-video video-wrapper ${className}`}>
            <iframe
                src={videoUrl}
                width={width}
                className="max-h-60 md:max-h-96"
                title={title}
                allowFullScreen={allowFullScreen}
                allow="autoplay"
                style={{ border: "none" }}
            />
        </div>
    );
};

export default GoogleDriveVideo;
