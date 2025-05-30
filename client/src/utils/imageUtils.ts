/**
 * Preloads images specified by the CSS selector.
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
export const preloadImages = (selector: string = 'img'): Promise<void> => {
  return new Promise((resolve) => {
    // Use dynamic import for imagesloaded to avoid SSR issues
    import('imagesloaded').then((imagesLoaded) => {
      imagesLoaded.default(
        document.querySelectorAll(selector), 
        { background: true }, 
        // Convert the callback to match expected type
        () => resolve()
      );
    });
  });
};