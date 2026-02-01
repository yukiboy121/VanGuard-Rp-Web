# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [1.2.0] - 2026-02-01

### Added

- Integrated Bootstrap 5 CSS framework.
- Helper `css/video.css` and `js/video.js` for handling the hero video background.
- New "Ready to Join Vanguard?" CTA section before the footer.
- Hero section video background with YouTube IFrame API integration (autoplay, loop, muted).
- Play/Pause control button for the hero background video.
- Dark overlay to hero video for better text visibility.

### Changed

- Replaced hero section CTA buttons with a single "Join Our Discord" button.
- Updated `.btn-discord` styling to match the site's "Monochrome Luxury" theme (White background, Black text).
- Enforced `100vh` height on the hero section.
- Reduced hero subtitle font size for better proportion.
- **Fixed video sizing:** Implemented an aggressive 15% safety zoom (`scale(1.15)`) to eliminate cinematic black bars and letterboxing.
- **Fixed video visibility:** Adjusted Z-index stacking (Video: 0, Grid Overlay: 1) to resolve layering conflicts with the global background.
- **Improved autoplay support:** Added `playsinline` and robust state synchronization in `js/video.js` to ensure compatibility with iOS Safari and handle browser autoplay restrictions gracefully.

### Removed

- Removed "Scroll Down" indicator and animation from the hero section.
- Removed "Server Online" badge from the hero section.

## [1.1.4] - 2026-02-01

### Changed

- Removed "Join Discord" CTA from the header.
- Centered the header logo on desktop view.
- Updated navigation menu layout to split items evenly (3 left, 3 right) around the logo.

## [1.1.3] - 2026-02-01

### Changed

- Updated footer logo to `Assets/Logo/vanguard logo.png`.
- Restored rotation animation for header and preloader logos.
- Added a pause interval to the header logo rotation.

## [1.1.2] - 2026-02-01

### Removed

- Removed particle background animation to improve performance and visual clarity.

## [1.1.1] - 2026-02-01

### Changed

- Reduced font sizes across the website by approximately 10-20% for improved readability and aesthetics.

## [1.1.0] - 2026-02-01

### Added

- Created `css/` directory.
- Created `js/` directory.

### Changed

- Refactored `index.html` to separate concerns.
- Moved all inline CSS to `css/style.css`.
- Moved all inline JavaScript to `js/script.js`.
- Updated `index.html` to link to the new external files.
