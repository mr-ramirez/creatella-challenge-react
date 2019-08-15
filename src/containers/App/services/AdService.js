import fetch from 'node-fetch';

const AdService = {
  getAd(randomNumber: number) {
    const url = `http://localhost:3000/ads/?r=${randomNumber}`;

    return fetch(url, { method: 'GET' })
      .then((response: Object) => response.arrayBuffer())
      .then((buffer) => {
        // eslint-disable-next-line no-undef
        const arrayOfBytes = [].slice.call(new Uint8Array(buffer));

        const imageBinaries = arrayOfBytes
          .map((byte) => String.fromCharCode(byte))
          .join('');
        
        return {
          base64Flag: 'data:image/jpeg;base64,',
          imageAsString: window.btoa(imageBinaries),
        };
      });
  }
};

Object.freeze(AdService);

export default AdService;
