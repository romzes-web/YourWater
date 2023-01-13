import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CatalogCategory from '../CatalogCategory.vue'

describe('CatalogCategory.vue', () => {
  it('should be the correct color', () => {
    const headingData = mountComponentWithProps(CatalogCategory, { color: 'red' });
    const styleData = headingData.style.getPropertyValue('color');

    console.log(styleData)

    expect(styleData).toEqual('blue');
  });

  it('should have the correct title', () => {
    const headingData = mountComponentWithProps(CatalogCategory, { title: 'Hello, Vue!' });
    const titleData = headingData.textContent;

    expect(titleData).toEqual('Hello, Vue!');
  });
});