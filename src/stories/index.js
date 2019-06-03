import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/react/demo';
import Introduction from "./Introduction"

storiesOf('Modal-Simple', module).add('Getting started', () => <Introduction showApp={linkTo('Button')} />);

storiesOf('Modals', module)
  .add('Simple use', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with some emoji', () => (
  //   <Button onClick={action('clicked')}>
  //     <span role="img" aria-label="so cool">
  //       😀 😎 👍 💯
  //     </span>
  //   </Button>
  // ));
