# Custom Machine Learning Excersise

## Intro
In this workshop you'll learn how to create a custom predictive Machine Learning service by using [Azure Machine Learning Studio](https://studio.azureml.net/).

We'll use this tool to create a ML service that can predict the quality of red wine based on the wines attributes. When you are done with your ML service, copy endpoint and api key over to [Machine Learning Scorer](http://mlscorer.azurewebsites.net/) were all scores will be shown in a highscore list.

## Step-by-step

### 1. Create a User on Machine Learning Studio

Go to [Azure Machine Learning Studio](https://studio.azureml.net/) and follow the steps to sign in with your microsoft account.

### 2. Upload the provided dataset
The dataset that will be used to train the machine learning service is located [here](https://github.com/bouvet/workshop/tree/master/exercise-3/winequality-red.csv),  download it to your computer. (The dataset is located in */exercise-3/winequality-red.csv*)

Next, we're going to upload the dataset to Machine Learning Studio:
1. Go back to Machine Learning Studio, and click on *Datasets* in the menu to on the right. 
2. Click *New* in the bottom right corner and upload the winequality-red.csv file.

### 3. Create a new machine learning experiment
Your're now ready to create your experiment. 

In Machine Learning Studio:
1. Click *Experiments* in the menu on the right. 
2. Click *New* in the bottom right corner and select *Blank Experiment*.
3. Give the Experiment a name

### 4. Insert and preprocess the dataset
A good machine learning experiment starts with a dataset.
Insert the winequality dataset and select which columns to use:
1. Drag and drop *Saved Datasets* -> *My Datasets* -> *winequality-red.csv* from the the toolbox to the right out onto the experiment pane.
2. Use the *Select Columns in Dataset* component to reduce the number of fields used in the experiment. Drag it from *Data Transformation* -> *Manipulation* -> *Select Columns in Dataset*. 
3. Link dataset with the *Select Columns in Dataset* component by dragging a line from one to the other.
4. Click on the *Select Columns in Dataset* component and click *Launch column selector* to select the columns you want to use later in the experiment.

Part of the challenge behind this excercise is to figure which fields to use, it is recommended to retry with different configurations to find the best result.

Split the dataset into a training set and a test set with the *Split Data* component.

5. Drag it onto the experiment pane from *Data Transformation* -> *Sample and Split* -> *Split Data*. Link it up with the *Select Columns in Dataset*.
6. Click on the *Split Data* component and set the *Fraction of rows in the first output dataset* to *0.7*

### 5. Train model and chose an algorithm
1. Drag the *Train Model* component onto the experiment pane from *Machine Learning* -> *Train* -> *Train Model*. Link it with the *Split Data* components right output. 
2. Select what column you want the model to predict, in this case its *quality*. Click on the *Train Model* component and *Launch column selector* and chose *quality* as the dependant variable.

It is now time to select the machine learning algorithm. Use the Azure Machine Learning: Algorithm Cheat Sheet to select one. You'll likely have to try mulitple before finding a suitable one. Pro-tip: visualize the dataset by right clicking to see what you are trying to predict.

![alt text](https://acomdpsstorage.blob.core.windows.net/dpsmedia-prod/azure.microsoft.com/en-us/documentation/articles/machine-learning-algorithm-cheat-sheet/20150618090528/machine-learning-algorithm-cheat-sheet-microsoft-azure.png)

3. Drag the wanted Machine Learning Algorithm from *Machine Learning* -> *Initialize Model* -> *[Category]* -> *[Algorithm]* onto the experiment pane. The algorithm component should be connected to the *Train Model* components top right side.


### 6. Score and Evaluate your model
Before running the model add the *Score Model* and *Evaluate Model* components to score and evaluate how good your predictive model is.

1. Drag the *Score Model* component from the toolbox located in *Machine Learning* -> *Score* -> *Score Model*. This should be connected to *Train Model* and the right output of the *Split Data* component.
This component will test your model on data it has not trained on to see how well it can solve the general problem.

2. Drag the *Evaluate Model* component from the toolbox located in *Machine Learning* -> *Evaluate* -> *Evaluate Model*. This should be connected to *Score Model*.

### 7. Run the experiment
You are now ready to run the experiment. Click on *Run* in the bottom center and wait while your experiment is training. When finished you can inspect the results by visualizing the *Score Model* and *Evaluate Model* components.

### 8. Publish your model
When you are pleased with the results, publish the predictive model as a web service service by clicking *Set up Web Service* in the bottom center. (You can use the same bottom to update the service later)

After clicking you'll notice that the experiment pane changed, and you have to run the experiment again before you can click *Deploy Web Service".

### 9. Submit your model to MLScorer 
After the experiment is deployed. Navigate to *Web Serices* on the right menu.
1. Find your predictive experiement and click it.
2. Click on *Test Preview* -> *Consume*
3. Copy the Primary Key and Request-Response values and paste them in the [mlscorer](http://mlscorer.azurewebsites.net/enter), fill out the rest of the fields and enter the competition.
4. See [highscores](http://mlscorer.azurewebsites.net/enter) to see how you scored.

![alt text](https://github.com/bouvet/workshop/blob/master/exercise-3/mlscorer-copy-paste.png?raw=true)

### 10. Retry and improve your score
You can update your model, redeploy it and enter the MLScorer as many times as you like.
Feel free to utilize more or different components while experimenting. How good can you get your prediction?

## Completed Experiment

By following the step-by-step, your experiment should end up looking something like this:

![alt text](https://github.com/bouvet/workshop/blob/master/exercise-3/ml-wine.PNG?raw=true)
Your experiment should end up looking something like this


















