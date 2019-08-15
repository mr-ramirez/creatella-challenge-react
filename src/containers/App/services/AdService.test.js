import fetch from 'node-fetch';

import AdService from './AdService';

jest.mock('node-fetch');

describe('Ad Service', () => {
  const fakeResponse = {
    arrayBuffer() {
      // eslint-disable-next-line no-undef
      return Promise.resolve([21,31]);
    },
  };

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    fetch.mockImplementation(() => Promise.resolve(fakeResponse));
  });

  it('SHOULD return response', async () => {
    const response: Object = await AdService.getAd(10);

    expect(response.imageAsString).toBeDefined();
    expect(response.base64Flag).toEqual('data:image/jpeg;base64,');
  });
});
