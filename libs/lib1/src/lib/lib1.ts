let counter = 0
export function lib1(): string {
  return `lib${++counter}`;
}
export function lib1_part2(): string {
  return `lib_part2${++counter}`;
}
