import * as blessed from 'blessed';

export const orfBox = blessed.box({
  name: 'orf',
  top: '50%',
  left: '50%',
  width: '50%',
  height: '50%',
  label: 'orf.at',
  border: {
    type: 'line'
  },
  style: {
    fg: '#0f0',
    border: {
      fg: '#555'
    },
    focus: {border: {fg: '#f00'}},
  }
});
