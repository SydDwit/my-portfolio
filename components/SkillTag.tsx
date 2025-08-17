// components/SkillTag.tsx
export default function SkillTag({ name }: { name: string }) {
  // Technology-specific colors and brand SVG icons
  const getTechInfo = (techName: string): { color: string; icon: JSX.Element } => {
    const techMap: { [key: string]: { color: string; icon: JSX.Element } } = {
      // Frontend
      'React': {
        color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300 border border-blue-600/30 dark:border-blue-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="2.2"/><ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/></svg>
      },
      'Next.js': {
        color: 'bg-gray-600/20 text-gray-900 dark:text-white border border-gray-600/30 dark:border-white/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2L22 20H2L12 2Z"/></svg>
      },
      'TypeScript': {
        color: 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 dark:border-blue-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="#3178c6"/><text x="12" y="16" fontSize="10" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">TS</text></svg>
      },
      'JavaScript': {
        color: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-500/30 dark:border-yellow-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="#f7df1e"/><text x="12" y="16" fontSize="10" fill="#000" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">JS</text></svg>
      },
      'HTML5': {
        color: 'bg-orange-600/20 text-orange-700 dark:text-orange-300 border border-orange-600/30 dark:border-orange-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3.183 2l1.604 18 7.202 2 7.222-2L20.817 2H3.183zM17.89 6.205h-5.957l.165 1.842h5.627l-.495 5.539L12 14.999l-5.23-1.413-.359-4.026h2.56l.183 2.056L12 12.274l2.846-.658.297-3.32H6.659l-.495-5.535h11.671l-.165 1.844z"/></svg>
      },
      'CSS3': {
        color: 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 dark:border-blue-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M1.5 3h21l-1.91 21.563L11.977 26l-8.565-1.438L1.5 3z"/><path d="M12 5.395V24.588l6.973-1.931L20.5 5.395H12z"/><path d="M12 13.321v2.956l3.298-.904.23-2.052H12zm0-3.193V7.175h7.424l-.07.719-.23 2.175L12 10.128z"/><path d="M12 13.321h-3.13l-.23-2.175H12v-2.953H4.07l.175 1.958.571 6.4L12 17.277v-3.956z"/></svg>
      },
      'Tailwind CSS': {
        color: 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 dark:border-cyan-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"/></svg>
      },
      'Bootstrap': {
        color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-600/30 dark:border-purple-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="#7952b3"/><text x="12" y="16" fontSize="9" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">B</text></svg>
      },
      
      // Backend
      'Node.js': {
        color: 'bg-green-600/20 text-green-700 dark:text-green-300 border border-green-600/30 dark:border-green-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.32,6.61 3,7.12 3,7.66V16.34C3,16.88 3.32,17.39 3.78,17.65L11.22,21.95C11.45,22.08 11.73,22.15 12,22.15C12.27,22.15 12.55,22.08 12.78,21.95L20.22,17.65C20.68,17.39 21,16.88 21,16.34V7.66C21,7.12 20.68,6.61 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M12,3.5L18.5,7.25V16.75L12,20.5L5.5,16.75V7.25L12,3.5Z"/></svg>
      },
      'PHP': {
        color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-600/30 dark:border-purple-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.75 14.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm0-2.25c-.41 0-.75-.34-.75-.75V9.5c0-.41.34-.75.75-.75s.75.34.75.75v3.75c0 .41-.34.75-.75.75zm2.5 2.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z"/></svg>
      },
      'Python': {
        color: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-500/30 dark:border-yellow-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>
      },
      'Flask': {
        color: 'bg-gray-600/20 text-gray-700 dark:text-gray-300 border border-gray-600/30 dark:border-gray-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2.5L8.5 8v3.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5V8L12 2.5zm0 1.5L14.5 8v3.5c0 1.7-1.3 3-3 3s-3-1.3-3-3V8L12 4z"/><path d="M9 18h6c.6 0 1 .4 1 1s-.4 1-1 1H9c-.6 0-1-.4-1-1s.4-1 1-1z"/><path d="M10 21h4c.6 0 1 .4 1 1s-.4 1-1 1h-4c-.6 0-1-.4-1-1s.4-1 1-1z"/></svg>
      },
      'FastAPI': {
        color: 'bg-teal-600/20 text-teal-700 dark:text-teal-300 border border-teal-600/30 dark:border-teal-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/><path d="M8 11h8v2H8v-2z"/><path d="M10 8h4v2h-4V8z"/><path d="M10 14h4v2h-4v-2z"/></svg>
      },
      'Express.js': {
        color: 'bg-gray-700/20 text-gray-800 dark:text-gray-300 border border-gray-700/30 dark:border-gray-700/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9-.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l2.488 3.207 1.092-1.474a1.588 1.588 0 011.882-.681z"/><path d="M.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.978-2.667C.402 14.604-.167 13.076.002 11.576zM1.116 10.12h10.330c.094-2.91-2.543-5.041-5.4-4.299-2.173.564-4.314 2.049-4.93 4.299z"/></svg>
      },
      
      // Databases
      'PostgreSQL': {
        color: 'bg-blue-700/20 text-blue-800 dark:text-blue-300 border border-blue-700/30 dark:border-blue-700/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.128 0c-.688 0-1.331.055-1.874.142-2.655.424-3.5 2.095-3.5 4.715v3.47h7v.856H5.586c-2.034 0-3.815 1.223-4.37 3.548-.641 2.669-.67 4.34 0 7.076.497 2.04 1.686 3.548 3.72 3.548h2.405v-3.193c0-2.31 1.997-4.357 4.37-4.357h6.998c1.949 0 3.499-1.609 3.499-3.57V4.857c0-1.89-1.596-3.313-3.499-3.549A21.758 21.758 0 0017.128 0zm-3.785 2.427c.726 0 1.312.594 1.312 1.329 0 .734-.586 1.328-1.312 1.328a1.32 1.32 0 01-1.313-1.328c0-.735.587-1.329 1.313-1.329z"/><path d="M6.872 24c.688 0 1.331-.055 1.874-.142 2.655-.424 3.5-2.095 3.5-4.715v-3.47h-7v-.856h12.168c2.034 0 3.815-1.223 4.37-3.548.641-2.669.67-4.34 0-7.076-.497-2.04-1.686-3.548-3.72-3.548H15.66v3.193c0 2.31-1.997 4.357-4.37 4.357H4.292c-1.949 0-3.499 1.609-3.499 3.57v8.428c0 1.89 1.596 3.313 3.499 3.549A21.758 21.758 0 006.872 24zm3.785-2.427c-.726 0-1.312-.594-1.312-1.329 0-.734.586-1.328 1.312-1.328a1.32 1.32 0 011.313 1.328c0 .735-.587 1.329-1.313 1.329z"/></svg>
      },
      'MySQL': {
        color: 'bg-orange-600/20 text-orange-700 dark:text-orange-300 border border-orange-600/30 dark:border-orange-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.17c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.72.384 3.566.455 5.53zM9.825 15.642c.748 0 1.316.671 1.316 1.566 0 .896-.567 1.566-1.316 1.566-.749 0-1.316-.67-1.316-1.566 0-.895.567-1.566 1.316-1.566zm4.708 0c.748 0 1.316.671 1.316 1.566 0 .896-.568 1.566-1.316 1.566-.749 0-1.317-.67-1.317-1.566 0-.895.568-1.566 1.317-1.566zm3.52-2.49c.285.24.436.622.436 1.047-.001.424-.152.807-.437 1.047-.284.24-.65.36-1.062.36-.412 0-.778-.12-1.062-.36-.285-.24-.437-.623-.437-1.047 0-.425.152-.807.437-1.047.284-.24.65-.36 1.062-.36.412 0 .778.12 1.062.36z"/><path d="M24 7.385c0 1.35-.366 2.619-1.057 3.632-.346.507-.793.93-1.316 1.244l-1.054-1.697.65-.402c.38-.235.65-.619.65-1.075 0-.456-.27-.84-.65-1.075l-.65-.402 1.054-1.697c.523.314.97.737 1.316 1.244C23.634 4.766 24 6.035 24 7.385z"/></svg>
      },
      'MongoDB': {
        color: 'bg-green-700/20 text-green-800 dark:text-green-300 border border-green-700/30 dark:border-green-700/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.017.49-9.027.3-.045.357-.218.357-.218s.065.3.068.358c.018 9.027.352 9.027.352 9.027L14.36 24c1.172-.89 4.527-4.027 4.43-9.539-.297-5.446-1.597-4.906-1.597-4.906z"/></svg>
      },
      'Redis': {
        color: 'bg-red-600/20 text-red-700 dark:text-red-300 border border-red-600/30 dark:border-red-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      
      // Tools
      'Git': {
        color: 'bg-gray-500/20 text-gray-700 dark:text-gray-300 border border-gray-500/30 dark:border-gray-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.713.713 1.87 0 2.584-.719.717-1.881.717-2.6 0-.719-.715-.719-1.871 0-2.584.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0L23.546 13.12c.603-.603.603-1.582 0-2.19"/></svg>
      },
      'GitHub': {
        color: 'bg-gray-800/20 text-gray-900 dark:text-gray-300 border border-gray-800/30 dark:border-gray-800/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      },
      'VS Code': {
        color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300 border border-blue-600/30 dark:border-blue-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 000 8.044L0 15.956a1 1 0 00.327.783l1.324 1.202a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29L23.15 21.413A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352z"/></svg>
      },
      'Docker': {
        color: 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 dark:border-blue-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.184.185.185m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.184.185.185m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.184.186.185m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
      },
      'Figma': {
        color: 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 dark:border-purple-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      'Postman': {
        color: 'bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-500/30 dark:border-orange-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      'Linux': {
        color: 'bg-gray-800/20 text-gray-900 dark:text-gray-300 border border-gray-800/30 dark:border-gray-800/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      'AWS': {
        color: 'bg-orange-600/20 text-orange-700 dark:text-orange-300 border border-orange-600/30 dark:border-orange-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      
      // Mobile
      'React Native': {
        color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300 border border-blue-600/30 dark:border-blue-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      'Flutter': {
        color: 'bg-blue-400/20 text-blue-700 dark:text-blue-300 border border-blue-400/30 dark:border-blue-400/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      'Expo': {
        color: 'bg-gray-700/20 text-gray-800 dark:text-gray-300 border border-gray-700/30 dark:border-gray-700/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      
      // Frameworks
      'Vue.js': {
        color: 'bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/30 dark:border-green-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>
      },
      'Angular': {
        color: 'bg-red-600/20 text-red-700 dark:text-red-300 border border-red-600/30 dark:border-red-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      'Laravel': {
        color: 'bg-red-500/20 text-red-700 dark:text-red-300 border border-red-500/30 dark:border-red-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      'Django': {
        color: 'bg-green-700/20 text-green-800 dark:text-green-300 border border-green-700/30 dark:border-green-700/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      
      // AI/ML
      'Machine Learning': {
        color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-600/30 dark:border-purple-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 7h6M7 9v6M17 9v6M9 17h6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
      },
      'Data Analysis': {
        color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300 border border-blue-600/30 dark:border-blue-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/></svg>
      },
      'TensorFlow': {
        color: 'bg-orange-600/20 text-orange-700 dark:text-orange-300 border border-orange-600/30 dark:border-orange-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.416 5.311l-6.168-3.564v14.018L12.46 24V0l10.248 5.856v5.31z"/></svg>
      },
      'Scikit-learn': {
        color: 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 dark:border-blue-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="#f7931e"/><text x="12" y="16" fontSize="8" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">SK</text></svg>
      },
      'Pandas': {
        color: 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 dark:border-purple-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M16.922 0h2.623v18.104h-2.623zm-7.53 18.104h-2.623V11.07h2.623zm4.607-11.07h-2.623v-7.03h2.623zm0 4.607h-2.623v6.463h-2.623v-6.463h2.623zm-7.53 0h2.623v2.623H6.469z"/></svg>
      },
      
      // Languages
      'Java': {
        color: 'bg-red-600/20 text-red-700 dark:text-red-300 border border-red-600/30 dark:border-red-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      'C++': {
        color: 'bg-blue-800/20 text-blue-900 dark:text-blue-300 border border-blue-800/30 dark:border-blue-800/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      'Dart': {
        color: 'bg-blue-400/20 text-blue-700 dark:text-blue-300 border border-blue-400/30 dark:border-blue-400/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      
      // Fun Facts (keep existing emojis)
      '🎮 Gaming': {
        color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-600/30 dark:border-purple-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      '🎙️ Podcasting': {
        color: 'bg-gray-600/20 text-gray-700 dark:text-gray-300 border border-gray-600/30 dark:border-gray-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      '🎬 Video Editing': {
        color: 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 dark:border-purple-500/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      '☕ Coffee Enthusiast': {
        color: 'bg-orange-700/20 text-orange-800 dark:text-orange-300 border border-orange-700/30 dark:border-orange-700/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      '🎵 Music Lover': {
        color: 'bg-pink-600/20 text-pink-700 dark:text-pink-300 border border-pink-600/30 dark:border-pink-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
      '📚 Tech Blogger': {
        color: 'bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 border border-indigo-600/30 dark:border-indigo-600/30',
        icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      },
    };

    return techMap[techName] || {
      color: 'bg-gray-600/20 text-gray-700 dark:text-gray-300 border border-gray-600/30 dark:border-gray-600/30',
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>
    };
  };

  const techInfo = getTechInfo(name);

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${techInfo.color} hover:bg-opacity-30 transition-colors duration-200`}>
      {techInfo.icon}
      {name}
    </span>
  );
}
