"use client";

import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type props = {
  onUpload?: any;
};

export const UploadcareButton = ({ onUpload }: props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };

    ctxProviderRef.current?.addEventListener(
      "file-upload-success",
      handleUpload
    );
  }, []);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="a9428ff5ff90ae7a64eb" />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </div>
  );
};
