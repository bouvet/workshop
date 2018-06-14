# Exercise 2 - Custom Vision: Object Detection

In this exercise we'll look at the [custom vision service](https://www.customvision.ai). You'll use this service to create a copy of the famous "Hotdog or Not" app.


## 1. Registration
First, navigate to the [custom vision website](https://www.customvision.ai) and create a user. 

## 2. Create Custom Vision project
Before we can start training our classifier, we need to create a project in the Custom Vision portal.

- Open a browser and navigate to the Custom Vision (customvision.ai) portal.
- Log in using a valid account (learn more above).
- If this is your first time visiting the portal, it will request some permissions. Click the Yes button to agree (you can revoke these permissions later if necessary).
- If this is your first time visiting the portal, it will also prompt you to agree with the terms and conditions. Check the box to indicate consent and then click the I agree button.
- Click New Project.
- Provide the required values:

Name: hotdogLab  
Description: Custom Hotdog Lab  
Domains: Food

- Click Create Project.

## 3. Upload and train
Now we are ready to train our custom vision service.
- Click on the newly created project in customvision.ai
- Now, click *Add Images* and select all images in the provided *exercise-2/train_img* folder and tag the images as hotdog.
- When completed, click on *Train* up in the right corner.
- Wait for the training to complete.

## 4. Test the predictive model
You have now created your very own machine learning model for predicting if an image is a hotdog or not.
- Test the service by clicking *Quick Test* and upload a hotdog image you find on google or have laying around (preferably one not in your training data). Also try with an image of something else. Notice how the Probability changes.

## 5. Node.js Application
You're now ready to connect the custom vision service with the provided Node.js application.
- Go to the *Performance Tab* -> *Predict URL* and copy url and Prediction-Key form the *If you have an image file* section.
- Paste these in *exercise-2/app/vision-api.config.js*

The config file should look like should look like: 

```javascript
export const config = {
    predictionKey: '<Prediction-Key>',
    uriBase: "<url>"
};
```
To run the aplication:
- Navigate to the `exercise-2/app` folder in a terminal and type `npm run dev`: 
```console
foo@bar /w/e/app:~$ npm run dev
```
This should install the required packages and run the web site on localhost:9000.


## 6. Code
Fix the code so it returns hotdog when images of hotdogs are uploaded and not hotdog when images of everything else is provided.

Your code goes in *exercise-2/app/vision-api-result.js*

Good luck!