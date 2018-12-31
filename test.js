// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import TopBar from './src/components/CenterContainer/TopBar.vue'

describe('TopBar', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(TopBar)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<md-button id="export-components" class="md-raised md-primary md-accent" @click="createFiles">Export Components</md-button>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('md-button')).toBe(true)
  })
})
