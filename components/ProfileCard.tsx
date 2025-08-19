'use client';
// components/ProfileCard.tsx
import Image from 'next/image';
import {
  MapPin,
  Download,
  Phone,
  Flag,
  Globe,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  name: string;
  title: string;
  location: string;
  phone?: string;
  nationality?: string;
  education?: {
    institution: string;
    degree: string;
    period?: string;
  };
  avatarSrc?: string; // defaults to /avatar.png
  resumeHref?: string; // e.g. /resume.pdf
};

export default function ProfileCard({
  name,
  title,
  location,
  phone,
  nationality,
  education,
  avatarSrc = '/avatar.jpg',
  resumeHref = '/resume.pdf',
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced background gradient with hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl transition-all duration-500 group-hover:from-blue-100/60 group-hover:to-purple-100/40 dark:group-hover:from-blue-800/20 dark:group-hover:to-purple-800/20"></div>

      {/* Subtle moving gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent rounded-xl transition-all duration-700 transform ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}
      ></div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header with Avatar and Basic Info */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative flex-shrink-0">
            <Image
              src={avatarSrc}
              alt={`${name} photo`}
              width={150}
              height={150}
              className={`w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-xl shadow-md border-2 border-white dark:border-gray-800 transition-all duration-300 ${
                isHovered ? 'scale-105 shadow-lg' : ''
              }`}
            />
            {/* Enhanced online indicator with pulse */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-sm">
              <div
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full m-1.5 sm:m-2 transition-all duration-300 ${
                  isHovered ? 'animate-pulse' : ''
                }`}
              ></div>
            </div>
          </div>

          <div className="flex-1">
            <h3
              className={`text-base font-bold text-gray-900 dark:text-white mb-1 transition-all duration-300 ${
                isHovered ? 'text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              {name}
            </h3>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-3 transition-all duration-300">
              {title}
            </p>

            {/* Enhanced Download Resume Button */}
            <Link
              href={resumeHref}
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 transform active:scale-95 group/btn"
            >
              <Download
                size={12}
                className="transition-transform duration-300 group-hover/btn:rotate-12"
              />
              Download Resume
            </Link>
          </div>
        </div>

        {/* Enhanced Contact Information Grid */}
        <div className="grid grid-cols-2 gap-3 flex-1 content-start">
          {/* Location */}
          <div className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-700/50 hover:scale-105 group/item">
            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/70">
              <MapPin
                size={12}
                className="text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover/item:scale-110"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Address
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                {location}
              </p>
            </div>
          </div>

          {/* Phone */}
          {phone && (
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 dark:hover:border-green-700/50 hover:scale-105 group/item">
              <div className="w-5 h-5 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-800/70">
                <Phone
                  size={10}
                  className="text-green-600 dark:text-green-400 transition-all duration-300 group-hover/item:scale-110"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Phone
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                  {phone}
                </p>
              </div>
            </div>
          )}

          {/* Nationality */}
          {nationality && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-200 dark:hover:border-purple-700/50 hover:scale-105 group/item">
              <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-800/70">
                <Flag
                  size={12}
                  className="text-purple-600 dark:text-purple-400 transition-all duration-300 group-hover/item:scale-110"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Nationality
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {nationality}
                </p>
              </div>
            </div>
          )}

          {/* Education */}
          {education && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-200 dark:hover:border-indigo-700/50 hover:scale-105 group/item">
              <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-indigo-200 dark:group-hover/item:bg-indigo-800/70">
                <GraduationCap
                  size={12}
                  className="text-indigo-600 dark:text-indigo-400 transition-all duration-300 group-hover/item:scale-110"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Education
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                  {education.institution}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {education.degree}
                </p>
              </div>
            </div>
          )}

          {/* Status */}
          <div className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:border-emerald-200 dark:hover:border-emerald-700/50 hover:scale-105 group/item">
            <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-emerald-200 dark:group-hover/item:bg-emerald-800/70">
              <Globe
                size={12}
                className="text-emerald-600 dark:text-emerald-400 transition-all duration-300 group-hover/item:scale-110"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Status
              </p>
              <div className="flex items-center gap-1">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Available
                </p>
                <div
                  className={`w-1.5 h-1.5 bg-green-500 rounded-full transition-all duration-300 ${
                    isHovered ? 'animate-pulse scale-125' : ''
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
