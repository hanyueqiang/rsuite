import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { findDOMNode } from 'react-dom';

import Toggle from '../../src/_picker/PickerToggle';
import { namespace } from 'rsuite-utils/lib/Picker/constants';
import { getDOMNode } from '../TestWrapper';

const cleanClassName = `.${namespace}-toggle-clean`;

describe('Toggle', () => {
  it('Should output a toggle', () => {
    const Title = 'Title';
    const instance = getDOMNode(<Toggle title="title">{Title}</Toggle>);

    assert.equal(instance.tagName, 'A');
    assert.include(instance.className, 'toggle');
    assert.equal(instance.innerText, Title);
  });

  it('Should output a button', () => {
    const Title = 'Title';
    const instance = getDOMNode(
      <Toggle title="title" componentClass="button">
        {Title}
      </Toggle>
    );

    assert.equal(instance.tagName, 'BUTTON');
    assert.include(instance.className, 'toggle-custom');
    assert.equal(instance.innerText, Title);
  });

  it('Should be cleanable', () => {
    const instance = getDOMNode(
      <Toggle title="title" cleanable hasValue>
        Title
      </Toggle>
    );

    assert.include(instance.className, 'toggle-cleanable');
  });

  it('Should call `onClean` callback', done => {
    const doneOp = () => {
      done();
    };
    const instance = getDOMNode(
      <Toggle title="title" hasValue cleanable onClean={doneOp}>
        Title
      </Toggle>
    );

    ReactTestUtils.Simulate.click(instance.querySelector(cleanClassName));
  });

  it('Should have a custom className', () => {
    const instance = getDOMNode(<Toggle className="custom" />);
    assert.include(instance.className, 'custom');
  });

  it('Should have a custom style', () => {
    const fontSize = '12px';
    const instance = getDOMNode(<Toggle style={{ fontSize }} />);
    assert.equal(instance.style.fontSize, fontSize);
  });
});
