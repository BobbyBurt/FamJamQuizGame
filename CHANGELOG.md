# Changelog

# Version 2 - 2023-05-02

This post-prototype version makes improvements necessary to easily import quiz data, smoothly run the game and to extend the code. Visual improvements are also made.

### Changed

- Code is now auto formatted to Prettier convention.
- Make answer graphics & functionality into prefab - decoupled from Game.ts
- Answers will disappear in `waiting` phase

### Added

- Quiz data loads from .json files
- Implement Input class - decoupled from Game.ts
- Implement debug keyboard input
- Create polished mat input graphics
- Mat input feedback animation, decoupled from Game.ts
- Create polished answer graphics
- RNG for answer order
- RNG for answer input combos
- Use + & - for question select

### Removed

- Remove number key question select

### Fixed

- Prevent crash from loading invalid question index