import { config } from './face-api.config';
import { fetchImageBlob } from './image-processor';

const recognizeFace = (imageStr) => {
    return fetchImageBlob(imageStr)
        .then(blob => {
            let url = config.uriBase + '/detect?returnFaceAttributes=' + config.params.returnFaceAttributes;
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream', //'application/json',
                    'Ocp-Apim-Subscription-Key': config.subscriptionKey
                },
                body: blob
            }).then((response) => {
                if (response.status == 200) {
                    return response.json();
                }
                throw new Error(response.statusText);
            }).then((responseJson) => {
                return responseJson;
            });
        });

};

export { recognizeFace };