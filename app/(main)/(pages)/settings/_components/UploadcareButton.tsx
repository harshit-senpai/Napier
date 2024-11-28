"use client";

import { useRouter } from "next/navigation";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

type props = {
  onUpload?: any;
};

export const UploadcareButton = ({ onUpload }: props) => {
  const router = useRouter();

  const handleChangeEvent = (e: any) => {
    const successfulFiles = e.allEntries.filter((file: any) => file.status === "success");
    
    if (successfulFiles.length > 0) {
      const imageUrl = successfulFiles[0].cdnUrl;
      onUpload(imageUrl);
      router.refresh();
    }
  };

  return (
    <div>
      <FileUploaderRegular
        onChange={handleChangeEvent}
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="61e02af960ad7c287a94"
      />
    </div>
  );
};
