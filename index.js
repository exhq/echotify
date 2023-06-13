import * as Gluon from '@gluon-framework/gluon';
import injection from './injection.js';

const Window = await Gluon.open('https://open.spotify.com');

await new Promise((resolve) => {
  setTimeout(resolve, 1000);
});



await Window.resources.js(injection.toString().slice(21, -1));