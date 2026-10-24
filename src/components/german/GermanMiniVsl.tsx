import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { media } from "@/data/germanOffer";
import { trackGerman } from "@/lib/germanTracking";

export function GermanMiniVsl() {
  const video = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const sent = useRef(new Set<string>());
  const position = useRef(0);
  const mark = (event: string) => {
    if (sent.current.has(event)) return;
    sent.current.add(event);
    trackGerman(event, { video: "coach-mini-vsl-de" });
  };
  const close = () => {
    if (video.current) {
      position.current = video.current.currentTime;
      video.current.pause();
    }
    setOpen(false);
  };
  return (
    <div className="de-mini-vsl">
      <Dialog.Root
        open={open}
        onOpenChange={(next) => {
          if (next) setOpen(true);
          else close();
        }}
      >
        <Dialog.Trigger asChild>
          <button
            className="de-mini-screen de-mini-trigger"
            type="button"
            onClick={() => {
              setEnded(false);
              setFailed(false);
            }}
            aria-label="Mini-Präsentation mit Ton ansehen"
          >
            <img
              src={media.vslPoster}
              alt="Coach Martínez zeigt die Trainingsplattform"
              width={720}
              height={1280}
              fetchPriority="high"
              decoding="async"
            />
            <span className="de-mini-play">
              <Play size={48} fill="currentColor" />
              <strong>JETZT ANSEHEN</strong>
              <span>51 Sekunden · Auf Deutsch · Mit Ton</span>
            </span>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="de-vsl-backdrop" />
          <Dialog.Content
            className="de-vsl-modal"
            aria-describedby="de-vsl-description"
            onOpenAutoFocus={() => {
              const v = video.current;
              if (!v) return;
              document.querySelectorAll("video").forEach((other) => {
                if (other !== v) other.pause();
              });
              void v.play().catch(() => setFailed(true));
            }}
          >
            <Dialog.Title className="sr-only">
              Training mit Methode · Mini-Präsentation
            </Dialog.Title>
            <Dialog.Description id="de-vsl-description" className="sr-only">
              Coach Martínez stellt die Plattform auf Deutsch vor. Du kannst das Video jederzeit
              schließen.
            </Dialog.Description>
            <Dialog.Close className="de-vsl-close" aria-label="Video schließen">
              <X size={22} />
            </Dialog.Close>
            {!ended && (
              <video
                ref={video}
                src={media.vsl}
                preload="none"
                playsInline
                autoPlay
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                width={720}
                height={1280}
                onContextMenu={(e) => e.preventDefault()}
                onLoadedMetadata={(e) => {
                  if (position.current > 0 && position.current < e.currentTarget.duration - 0.5)
                    e.currentTarget.currentTime = position.current;
                }}
                onPlay={() => {
                  setFailed(false);
                  mark("VSL_Play");
                }}
                onTimeUpdate={(e) => {
                  const v = e.currentTarget;
                  if (!Number.isFinite(v.duration) || !v.duration) return;
                  const p = v.currentTime / v.duration;
                  setProgress(p * 100);
                  for (const m of [25, 50, 75]) if (p >= m / 100) mark(`VSL_${m}`);
                }}
                onEnded={() => {
                  position.current = 0;
                  setEnded(true);
                  mark("VSL_Complete");
                }}
                onError={() => setFailed(true)}
              >
                Dein Browser unterstützt dieses Video nicht.
              </video>
            )}
            {!ended && (
              <div
                className="de-vsl-progress"
                role="progressbar"
                aria-label="Videofortschritt"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
              >
                <span style={{ width: `${progress}%` }} />
              </div>
            )}
            {failed && (
              <div className="de-mini-error" role="status">
                <p>Tippe hier, um das Video mit Ton zu starten.</p>
                <button
                  type="button"
                  onClick={() => {
                    setFailed(false);
                    void video.current?.play().catch(() => setFailed(true));
                  }}
                >
                  VIDEO STARTEN
                </button>
              </div>
            )}
            {ended && (
              <div className="de-vsl-end">
                <p>Dein nächstes Training. Mit einem klaren Plan.</p>
                <button
                  className="de-cta"
                  type="button"
                  onClick={() => {
                    close();
                    trackGerman("ClickZumAngebot", { source: "vsl" });
                    setTimeout(
                      () =>
                        document
                          .getElementById("angebot")
                          ?.scrollIntoView({
                            behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                              ? "instant"
                              : "smooth",
                          }),
                      50,
                    );
                  }}
                >
                  PLATTFORM ENTDECKEN ↓
                </button>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <p className="de-note de-center">Coach Martínez · Deine Trainingsplattform in 51 Sekunden.</p>
    </div>
  );
}
