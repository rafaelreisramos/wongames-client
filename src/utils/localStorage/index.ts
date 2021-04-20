const APP_KEY = '@WONGAMES'

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return

  const item = window.localStorage.getItem(`${APP_KEY}/${key}`)

  return JSON.parse(item!)
}

export function setStorageItem(key: string, item: string[]) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(item)

  return window.localStorage.setItem(`${APP_KEY}/${key}`, data)
}
