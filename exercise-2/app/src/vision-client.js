import {config} from './vision-api.config';
import {fetchImageBlob} from './image-processor';

export const runCustomVision = (imageStr) =>{
    return fetchImageBlob(imageStr)
        .then(blob => {
            return fetch(config.uriBase, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Prediction-Key':  config.subscriptionKey
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