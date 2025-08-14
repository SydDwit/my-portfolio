"use client";
// components/ProfileCard.tsx
import Image from "next/image";
import { MapPin, Download } from "lucide-react";
import Link from "next/link";

type Props = {
  name: string;
  title: string;
  location: string;
  avatarSrc?: string; // defaults to /avatar.png
  resumeHref?: string; // e.g. /resume.pdf
};

export default function ProfileCard({
  name,
  title,
  location,
  avatarSrc = "/avatar.jpg",
  resumeHref = "/resume.pdf",
}: Props) {
  return (
    <div className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-4 md:p-6 flex items-center gap-4">
      <Image src={avatarSrc} alt={`${name} photo`} width={72} height={72} className="rounded-full border" />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm opacity-80">{title}</p>
        <p className="text-sm mt-1 flex items-center gap-1 opacity-70">
          <MapPin size={16} /> {location}
        </p>
      </div>
      <Link href={resumeHref} target="_blank" className="px-3 py-2 rounded-xl border hover:bg-black/5 dark:hover:bg-white/10 text-sm flex items-center gap-2">
        <Download size={16} /> Resume
      </Link>
    </div>
  );
}
