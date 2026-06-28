// 1.- libraries
import { ChangeEvent, useState } from "react";

// 2.- components
import Avatar from "../../atoms/Avatar";

// 3.- icons
import { CameraIcon } from "@heroicons/react/24/solid";

interface AvatarUploaderProps {
    src?: string | null;
    onChange?: (file: File | null) => void;
}

const AvatarUploader: React.FC<AvatarUploaderProps> = ({ src = null, onChange }) => {
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
        onChange?.(file);
    };

    return (
        <div className="relative inline-block">
            <Avatar src={preview ?? src} size="xl" />
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
            />
            <div className="absolute bottom-0 right-0 bg-black/60 rounded-full p-1 pointer-events-none">
                <CameraIcon className="w-4 h-4 text-white" />
            </div>
        </div>
    );
};

export default AvatarUploader;
