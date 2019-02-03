import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/ui/startup/accounts-config.js';
import { App } from '../imports/ui/App';

Meteor.startup(() => {
  render(App(), document.getElementById('render-target'));
});
