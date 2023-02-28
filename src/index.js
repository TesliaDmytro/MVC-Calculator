'use strict';

import './style.css';

import { Model } from './model.js';
import { View } from './view.js';
import { Control } from './control.js';

new Control(new Model(), new View());