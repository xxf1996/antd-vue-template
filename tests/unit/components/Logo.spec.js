import { shallowMount } from '@vue/test-utils' // 挂载Vue组件（不渲染子组件，mount可以渲染子组件）
import Logo from '@/components/common/Logo'
import utils from '@/utils'

describe('@/components/common/Logo.vue', () => {
  it('showTitle: false', () => {
    const wrapper = shallowMount(Logo, {
      propsData: { showTitle: false } // 给组件传递props值
    })
    expect(wrapper.find('span.logo-name').isVisible()).toBe(false) // 断言
  })

  it('showTitle: true', () => {
    const wrapper = shallowMount(Logo, {
      propsData: { showTitle: true }
    })
    expect(wrapper.find('span.logo-name').isVisible()).toBe(true)
  })

  it('check title', () => {
    const wrapper = shallowMount(Logo, {
      propsData: { showTitle: true }
    })
    expect(wrapper.find('span.logo-name').text()).toBe(utils.APP_NAME)
  })
})
