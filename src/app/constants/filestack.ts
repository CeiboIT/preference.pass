export const filePickerAPIKey = 'AvU18027ZTseNQSjZNyhMz'; // development
const _compress = 'https://process.filestackapi.com/' + filePickerAPIKey + '/compress/';

export function compress (url) {
    return _compress + url;
}

export function resize(url, width, height?) {
  if (height) {
    console.log('https://process.filestackapi.com/' + filePickerAPIKey + '/resize=width:' + width + ',height:' + height + '/' + url);
    return 'https://process.filestackapi.com/' + filePickerAPIKey + '/resize=width:' + width + ',height:' + height + '/' + url;
  } else {
    return 'https://process.filestackapi.com/' + filePickerAPIKey + '/resize=width:' + width + '/' + url;
  }
}
