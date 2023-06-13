import * as Gluon from '@gluon-framework/gluon';
import { readFile } from 'fs';

const Window = await Gluon.open('https://open.spotify.com');

const filePaths = ['./injection.js', './injection.css'];

const readAndProcessFile = () => {
  filePaths.forEach(filePath => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      if (filePath === './injection.js') {
        Window.resources.js(data);
      } else if (filePath === './injection.css') {
        Window.resources.css(data);
      }
    });
  });
};

setInterval(readAndProcessFile, 200);



