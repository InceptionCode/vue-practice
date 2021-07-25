import { mount } from '@cypress/vue'
import BaseButton from './_base-button.vue'

describe('@components/_base-button', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>'
    mount(BaseButton, {
      slots: {
        default: slotContent,
      },
    })
    cy.contains('foo')
  })
})
