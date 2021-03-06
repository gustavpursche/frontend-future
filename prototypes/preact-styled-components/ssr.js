/* @flow */
import render from 'preact-render-to-string';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import template from './template';
import FaciaPage from './src/Template/FaciaPage';

import cardData from './data';

export default (req: express$Request, res: express$Response) => {
  const html = render(FaciaPage(cardData));
  const styles = styleSheet.getCSS();
  res.end(template({
    body: html,
    title: 'From the server',
    styles,
  }));
};
