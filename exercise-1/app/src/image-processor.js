export const fetchImageBlob = (base64Str) => {
    return fetch(base64Str).then(res => res.blob());
};