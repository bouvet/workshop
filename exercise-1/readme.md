# Exercise 1 - Cognitive Services: Face API
In this first part of the workshop we will be looking into Microsoft Cognitive Services. First of, we will be using the Face API, where we will post an image of a person to a REST-api and get back a result containing information related to the persons emotions, as perceived by the AI.

_Notice_: This exercise requires node >= 6.9 and npm. If you don't have this already installed. Download and install it first [node and npm](https://nodejs.org/en/download/).

 **The web application will only work on modern browsers. That means IE is off the table. Chrome will function great.**

## Objectives

>1) Obtain your Face API Key 
>2) Take a selfie and handle the result, displaying the _emoji_ that best reflects the emotion returned by the Face API (_e.g. angry emoji for_ `anger`)



## 1. Setup
First navigate to the `/exercise-1` folder.
Before we start, you need to get hold of an API Key.

- Got to https://azure.microsoft.com/nb-no/try/cognitive-services/
- Select Face APIs and click the Get API Key button
- Agree to the terms and click next
- If prompted, sign in with your account
- A popup will welcome you and let you know you have 7 days to try out the Face APIs for free
- Click the "Got it" button
- You should now be presented with 2 keys and a URL. Copy one of the keys and paste it into the `src/face-api.config.js` file in the NodeJS source folder, replacing the `'<Subscription Key>'` string.
- Copy the URL and paste it into `src/face-api.config.js`, replacing `'<url>'`

It should look something like this:

```javascript
export const config = {
    subscriptionKey: '<Subscription Key>',
    ..
    uriBase: '<url>'
};
```

Now that you have configured your API key we are ready to try out some artificial intelligence.

## 2. Run the application.
- Navigate to the `exercise-1/app` folder in a terminal and type `npm run dev`: 
```console
foo@bar /w/e/app:~$ npm run dev
```
This should install the required packages and run the web site on localhost:9000.

## 3. Test the application
- Open your favorite browser and navigate to [the application](http://localhost:9000/).
- Allow the site to use web camera.
- Capture a selfie and watch the results

## 4. Code
The boilerplate code takes a selfie and sends it to microsoft cognitive services, which returns a json result. The result looks like this:
```javascript
[
  {
    "faceId": "c9963f20-0dba-4471-9c0a-db9d7fe29c3c",
    "faceRectangle": {
      "top": 139,
      "left": 156,
      "width": 91,
      "height": 91
    },
    "faceAttributes": {
      "emotion": {
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.994,
        "sadness": 0.005,
        "surprise": 0
      }
    }
  }
]
```

The exercise is to parse this result and show the correct smiley for the emotion.
Look at the *face-api-result.js* file to get started.


Good luck








