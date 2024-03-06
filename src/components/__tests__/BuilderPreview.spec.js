import { describe, it, expect, beforeEach } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import BuilderPreview from '../BuilderPreview.vue'

describe('BuilderPreview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(BuilderPreview, {
      global: {
        plugins: [createTestingPinia({
          initialState: {
            builder: {
              givenName: 'Sam',
              surname: 'Smith',
              email: 'sam.smith@designcrowd.com',
              phone: '02 1234 5678',
              houseNumber: '2',
              street: 'Hill St',
              suburb: 'Surry Hills',
              state: 'NSW',
              postcode: '2010',
              country: 'Australia',
            }
          }
        })],
      },
    })
  });

  it('Displays information from the store correctly as per the hcard spec', async () => {
    // Note the names of the classes here should match the hCard spec
    expect(await wrapper.find('.given-name').text()).toBe('Sam');
    expect(await wrapper.find('.family-name').text()).toBe('Smith');
    expect(await wrapper.find('.email').text()).toBe('sam.smith@designcrowd.com');
    expect(await wrapper.find('.tel').text()).toBe('02 1234 5678');
    expect(await wrapper.find('.street-address').text()).toBe('2 Hill St');
    expect(await wrapper.find('.locality').text()).toBe('Surry Hills');
    expect(await wrapper.find('.region').text()).toBe('NSW');
    expect(await wrapper.find('.postal-code').text()).toBe('2010');
    expect(await wrapper.find('.country-name').text()).toBe('Australia');
  });
})
