import Image from "next/image";
import { clsx } from "clsx";
import { useModal } from "@/lib/hooks/useModal";
import { Modal } from "./modal";
import { preventBubbling } from "@/lib/helper";
import type { ImageProps, StaticImageData } from "next/image";

type ImagePreviewProps = Omit<ImageProps, "src"> & {
  src: StaticImageData;
  customLink?: string;
  wrapperClassName?: string;
};

export function ImagePreview({
  src,
  alt,
  className,
  customLink,
  wrapperClassName,
}: ImagePreviewProps): JSX.Element {
  const { open, openModal, closeModal } = useModal();

  const { src: imageLink } = src;

  const imageIsGif = imageLink.endsWith(".gif");
  const placeholder: ImageProps["placeholder"] = imageIsGif ? "empty" : "blur";

  customLink ??= imageLink;
  return (
    <>
      <Modal open={open} closeModal={closeModal}>
        <div className="relative">
          <div className="group relative max-w-6xl">
            <Image
              className="max-h-[70vh] w-fit rounded-md object-contain"
              src={src}
              alt={alt}
            />
            <a
              className="absolute bottom-0 right-0 mx-2 mb-2 translate-y-4 rounded-md bg-white/40 px-2 py-1 
                         text-sm text-black/80 opacity-0 outline-none transition hover:!bg-accent-main 
                         hover:text-white focus-visible:translate-y-0 focus-visible:!bg-accent-main
                         focus-visible:text-white focus-visible:opacity-100 group-hover:translate-y-0 
                         group-hover:opacity-100 dark:bg-black/40 dark:text-white/80"
              href={customLink}
              target="_blank"
              rel="noreferrer"
              onClick={preventBubbling()}
            >
              {alt}
            </a>
          </div>
          <a
            className="absolute -bottom-7 left-0 font-medium text-white/80 underline decoration-transparent 
                       underline-offset-2 outline-none transition-colors hover:text-gray-400 
                       focus-visible:text-black focus-visible:decoration-inherit 
                        dark:hover:decoration-white dark:focus-visible:text-white"
            href={customLink}
            target="_blank"
            rel="noreferrer"
            onClick={preventBubbling()}
          >
            Open original
          </a>
        </div>
      </Modal>
      <button
        className={clsx("smooth-tab grid", wrapperClassName)}
        onClick={openModal}
      >
        <Image
          className={clsx(
            "mx-auto cursor-pointer rounded-md transition hover:brightness-75",
            className,
          )}
          src={src}
          alt={alt}
          title={alt}
          placeholder={placeholder}
        />
      </button>
    </>
  );
}
