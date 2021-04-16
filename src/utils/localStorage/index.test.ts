import { getStorageItem, setStorageItem } from '.'

describe('getLocalStorage()', () => {
  beforeEach(() => window.localStorage.clear())

  it('should get local storage items', () => {
    window.localStorage.setItem('@WONGAMES/cart', JSON.stringify(['1', '2']))

    expect(getStorageItem('cart')).toStrictEqual(['1', '2'])
  })
})

describe('setLocalStorage()', () => {
  beforeEach(() => window.localStorage.clear())

  it('should add local storage items', () => {
    setStorageItem('cart', ['1', '2'])

    const item = window.localStorage.getItem('@WONGAMES/cart')

    expect(JSON.parse(item!)).toStrictEqual(['1', '2'])
  })
})
