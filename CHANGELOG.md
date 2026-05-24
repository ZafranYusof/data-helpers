# Changelog

All notable changes to this project will be documented in this file.

## [2.0.1] - 2026-05-18

### Fixed
- `merge()` now correctly handles null values without throwing
- `chunk()` returns empty array for empty input

## [2.0.0] - 2026-05-01

### Added
- `omit()` function for excluding keys from objects
- `merge()` deep merge utility
- TypeScript type definitions
- Benchmark results in README

### Changed
- **BREAKING:** `flatten()` now only flattens one level (use `flattenDeep()` for recursive)
- Improved `unique()` performance using Set

## [1.0.0] - 2026-03-15

### Added
- `chunk()` array splitting
- `flatten()` array flattening
- `unique()` deduplication
- `pick()` object key selection