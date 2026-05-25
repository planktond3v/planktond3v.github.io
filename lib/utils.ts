// ─────────────────────────────────────────────────────────────────────────────
//  lib/utils.ts  —  Shared utility helpers
//  Centralising these keeps components clean and DRY.
// ─────────────────────────────────────────────────────────────────────────────

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn  – merges Tailwind classes intelligently, resolving conflicts.
 *
 * Usage:  cn('px-4 py-2', condition && 'bg-cyan-500', 'px-6')
 *         → 'py-2 bg-cyan-500 px-6'  (px-4 is overridden by px-6)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * sleep  – promise-based delay helper (useful in animations / sequences).
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * clamp  – constrain a number between min and max.
 */
export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * randomBetween  – returns a random float between two values.
 */
export const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

/**
 * formatDate  – converts a Date or ISO string to a readable format.
 */
export const formatDate = (date: Date | string) =>
  new Date(date).toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  });
