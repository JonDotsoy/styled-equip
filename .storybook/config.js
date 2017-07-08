import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/Inputs.js');
  require('../stories/Button.js');
  require('../stories/Shadow.js');
  require('../stories/Container.js');
}

configure(loadStories, module)
