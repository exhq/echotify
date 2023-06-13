import * as Gluon from '@gluon-framework/gluon';
import { readFile } from 'fs';

const Window = await Gluon.open('https://open.spotify.com');


const filePath = './injection.js';

const readAndProcessFile = () => {
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    Window.resources.js(data)
  });
};

setInterval(readAndProcessFile, 200);


