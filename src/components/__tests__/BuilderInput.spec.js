import { describe, it, expect, beforeEach } from 'vitest'
import { mount, } from '@vue/test-utils'
import BuilderInput from '../BuilderInput.vue'

describe('BuilderPreview', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(BuilderInput, { 
            props: { 
                label: 'Test',
                modelValue: 'Initial value',
                'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
            }
        })
    });

    it('Reads and updates the model value correctly', async () => {
        // Initial value is set correctly
        expect(wrapper.find('input').element.value).toBe('Initial value')

        // Upates to the input are reflected in the model
        await wrapper.find('input').setValue('test');
        expect(wrapper.props('modelValue')).toBe('test')

        // Updates to the model value are reflected in the input
        await wrapper.setProps({ modelValue: 'updated' });
        expect(wrapper.find('input').element.value).toBe('updated')
    })

    it('Renders the type correctly', async () => {
        // Default type is text
        expect(wrapper.find('input').attributes('type')).toBe('text')

        // Type can be set to password
        await wrapper.setProps({ type: 'password' });
        expect(wrapper.find('input').attributes('type')).toBe('password')
    })
})
