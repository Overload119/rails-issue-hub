// This file is loaded after application.js from Sprockets.

require('./components'); // Load all the component code.

import Turbolinks from 'turbolinks';
import * as ActiveStorage from 'activestorage';
import LocalTime from 'local-time';

ActiveStorage.start();
Turbolinks.start();
LocalTime.start();
