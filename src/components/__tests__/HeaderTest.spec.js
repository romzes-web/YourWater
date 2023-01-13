import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
  it('category 1', () => {
    const wrapper = mount(Header, { 
      links: { 
        title: String
      } 
    })
    expect(wrapper.text()).toContain('Главная')
    expect(wrapper.text()).toContain('Каталог')
    expect(wrapper.text()).toContain('О воде')
    expect(wrapper.text()).toContain('О доставке')
    expect(wrapper.text()).toContain('Оплата')
    expect(wrapper.text()).toContain('Контакты')
  })
})
