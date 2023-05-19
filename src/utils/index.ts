export function unixNow(): number {
  return Math.floor(new Date().getTime() / 1000);
}

export function unixDate(date: string): number {
  return Math.floor(Date.parse(date) / 1000);
}
