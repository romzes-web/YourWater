import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
  it('category 1', () => {
    const wrapper = mount(Header, { links: { title: 'Главная' } })
    expect(wrapper.text()).toContain('Главная')
  })
  
  it('category 2', () => {
      const wrapper = mount(Header, { links: { title: 'Каталог' } })
      expect(wrapper.text()).toContain('Каталог')
    })

  it('category 3', () => {
      const wrapper = mount(Header, { links: { title: 'О воде' } })
      expect(wrapper.text()).toContain('О воде')
    })

  it('category 4', () => {
      const wrapper = mount(Header, { links: { title: 'О доставке' } })
      expect(wrapper.text()).toContain('О доставке')
    })

  it('category 5', () => {
      const wrapper = mount(Header, { links: { title: 'Оплата' } })
      expect(wrapper.text()).toContain('Оплата')
    })

  it('category 6', () => {
      const wrapper = mount(Header, { links: { title: 'Контакты' } })
      expect(wrapper.text()).toContain('Контакты')
    })
  
})
