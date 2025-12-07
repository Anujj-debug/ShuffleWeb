/**
 * Utility to detect if the user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') {
    return false;
  }
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
}

/**
 * Get transition duration based on user's motion preference
 * @param {number} normalDuration - Duration in milliseconds for normal motion
 * @returns {number} Duration in milliseconds (0.01ms if reduced motion preferred)
 */
export function getTransitionDuration(normalDuration = 200) {
  return prefersReducedMotion() ? 0.01 : normalDuration;
}

/**
 * Listen for changes in motion preference
 * @param {Function} callback - Function to call when preference changes
 * @returns {Function} Cleanup function to remove listener
 */
export function onMotionPreferenceChange(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  const handler = (e) => callback(e.matches);
  
  // Modern browsers
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }
  
  // Fallback for older browsers
  mediaQuery.addListener(handler);
  return () => mediaQuery.removeListener(handler);
}
