import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { namespace } from 'rsuite-utils/lib/Picker/constants';

import { getDOMNode } from '../TestWrapper';
import DropdownMenuGroup from '../../src/_picker/DropdownMenuGroup';
import DropdownMenuItem from '../../src/DropdownMenuItem';

const classPrefix = 'dropdown-menu-group';
const titleClassName = `.${classPrefix}-title`;

describe('picker - DropdownMenuGroup', () => {
  it('Should output a `menu-item-group`', () => {
    const Title = 'Title';
    const instance = getDOMNode(<DropdownMenuGroup title="title">{Title}</DropdownMenuGroup>);

    assert.equal(instance.className, classPrefix);
    assert.equal(instance.querySelector(`.${classPrefix}-children`).innerText, Title);
  });

  it('Should have a title', () => {
    const instance = getDOMNode(<DropdownMenuGroup title={<div>title</div>} />);

    assert.equal(instance.querySelector(titleClassName).innerText, 'title');
  });

  it('Should have 2 option', () => {
    const instance = getDOMNode(
      <DropdownMenuGroup title={<div>title</div>}>
        <DropdownMenuItem>1</DropdownMenuItem>
        <DropdownMenuItem>2</DropdownMenuItem>
      </DropdownMenuGroup>
    );

    assert.equal(instance.querySelectorAll('.rs-dropdown-item').length, 2);
  });

  it('Should be closed', () => {
    const instance = getDOMNode(<DropdownMenuGroup title="title" />);

    ReactTestUtils.Simulate.click(instance.querySelector(titleClassName));
    assert.ok(instance.className.match(/\bclosed\b/));
  });

  it('Should call onClick callback when click title', done => {
    const doneOp = () => {
      done();
    };
    const instance = getDOMNode(<DropdownMenuGroup title="title" onClick={doneOp} />);

    ReactTestUtils.Simulate.click(instance.querySelector(titleClassName));
    assert.ok(instance.className.match(/\bclosed\b/));
  });

  it('Should have a custom className', () => {
    const instance = getDOMNode(<DropdownMenuGroup className="custom" title="title" />);
    assert.ok(instance.className.match(/\bcustom\b/));
  });

  it('Should have a custom style', () => {
    const fontSize = '12px';
    const instance = getDOMNode(<DropdownMenuGroup style={{ fontSize }} title="title" />);
    assert.equal(instance.style.fontSize, fontSize);
  });
});
