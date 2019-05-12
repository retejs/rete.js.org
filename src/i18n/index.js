export function assignSection(list, name) {
  return list.map(([origin, translation]) => ([origin, translation, name]))
}