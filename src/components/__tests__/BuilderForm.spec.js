import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import BuilderForm from '../BuilderForm.vue'

describe('BuilderForm', () => {
  let wrapper;
  const consoleMock = vi.spyOn(console, 'error').mockImplementation(() => undefined);
  const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => undefined);
  const clipboardMock = vi.fn(x => x);

  window.__defineGetter__('navigator', function() {
    return {
      clipboard: {
        writeText: clipboardMock,
      }
    }
  })

  beforeEach(() => {
    wrapper = mount(BuilderForm, {
      global: {
        plugins: [createTestingPinia()],
      }
    });

    consoleMock.mockReset();
    clipboardMock.mockReset();
    alertMock.mockReset();
  });

  it('Logs an error when creating an hCard which doesn\'t exist', () => {
    // console.error not called during mount
    expect(consoleMock).not.toHaveBeenCalled();

    wrapper.vm.handleCreateHCard();

    // Called when creating an hCard but the relevant element doesn't exist
    expect(consoleMock).toHaveBeenCalledOnce();
    expect(consoleMock).toHaveBeenLastCalledWith('vcard element not found');
    expect(clipboardMock).not.toHaveBeenCalled();
  });

  it('Copies the vcard element contents to clipboard when it exists', () => {
    // Add a vcard element to the document
    const hcardEl = document.createElement('div');
    hcardEl.classList.add('vcard');
    hcardEl.innerHTML = 'hcard contents';
    document.body.appendChild(hcardEl);

    wrapper.vm.handleCreateHCard();

    // Ensure console.error is not called, and the contents of the vcard element are copied to the clipboard correctly
    expect(consoleMock).not.toHaveBeenCalled();
    expect(clipboardMock).toHaveBeenCalledOnce();
    expect(clipboardMock).toHaveBeenLastCalledWith('<div class="vcard">hcard contents</div>');
  });
})
