import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

// decorators can also be added to stories
addDecorator((story) => (
  <div>
    <h1>Examples</h1>
    {story()}
  </div>
));

configure(loadStories, module);