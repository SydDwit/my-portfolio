const fs = require('fs');

// Read the file
let content = fs.readFileSync('components/SkillTag.tsx', 'utf8');

// Simple generic icon SVG
const genericIcon = '<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>';

// Replace all remaining emoji icons (that don't start with <svg)
content = content.replace(/icon: '[^<][^']*'/g, `icon: ${genericIcon}`);

// Write back to file
fs.writeFileSync('components/SkillTag.tsx', content);

console.log('Icons replaced successfully!');
