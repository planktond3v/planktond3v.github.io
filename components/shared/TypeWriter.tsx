'use client';
// ─────────────────────────────────────────────────────────────────────────────
//  TypeWriter.tsx  —  Animated typewriter component
//
//  Cycles through an array of strings, typing them one character at a time
//  and then deleting them before moving to the next word.
//  No external library required — pure React hooks.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';

interface TypeWriterProps {
  words:         string[];
  typingSpeed?:  number;   // ms per character typed
  deleteSpeed?:  number;   // ms per character deleted
  pauseDuration?: number;  // ms to wait before deleting
  className?:    string;
  cursorClassName?: string;
}

export default function TypeWriter({
  words,
  typingSpeed   = 80,
  deleteSpeed   = 40,
  pauseDuration = 2000,
  className     = '',
  cursorClassName = '',
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting,  setIsDeleting]  = useState(false);
  const [wordIndex,   setWordIndex]   = useState(0);
  const [isPaused,    setIsPaused]    = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex];

    // If pausing between type and delete phase
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase: add one more character
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Finished typing — pause before deleting
          setIsPaused(true);
        }
      } else {
        // Deleting phase: remove one character
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          // Finished deleting — move to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, wordIndex, words, typingSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      {/* Blinking cursor */}
      <span
        className={`
          inline-block w-0.5 h-[1em] ml-0.5 align-text-bottom
          bg-cyan-400 animate-blink
          ${cursorClassName}
        `}
      />
    </span>
  );
}
