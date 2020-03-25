// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Attempt to mock global $localize function.
import Spy = jasmine.Spy;
import createSpy = jasmine.createSpy;

// tslint:disable-next-line:variable-name
const _global: any = typeof global !== 'undefined' && global;

_global.$localize = createSpy('$localize');

declare global {
  const $localize: Spy;
}

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
