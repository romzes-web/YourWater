import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BreadcrumbsTest from '../Breadcrumbs.vue'

it('test title', () => {
    const wrapper = mount(BreadcrumbsTest, {
      props: {
        title: String,
      },
     })
     expect(wrapper.html().includes(String))
   })
