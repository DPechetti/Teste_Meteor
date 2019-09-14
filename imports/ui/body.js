import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
    tasks: [
        {text : 'Texto 1'},
        {text : 'Texto 2'},
        {text : 'Texto 3'},
    ],
})