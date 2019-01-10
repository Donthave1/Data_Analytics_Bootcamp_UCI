
# coding: utf-8

# In[1]:


get_ipython().magic('matplotlib inline')
import matplotlib.pyplot as plt
import pandas as pd
import os


# # Voice Gender
# Gender Recognition by Voice and Speech Analysis
# 
# This database was created to identify a voice as male or female, based upon acoustic properties of the voice and speech. The dataset consists of 3,168 recorded voice samples, collected from male and female speakers. The voice samples are pre-processed by acoustic analysis in R using the seewave and tuneR packages, with an analyzed frequency range of 0hz-280hz (human vocal range).
# 
# ## The Dataset
# The following acoustic properties of each voice are measured and included within the CSV:
# 
# * meanfreq: mean frequency (in kHz)
# * sd: standard deviation of frequency
# * median: median frequency (in kHz)
# * Q25: first quantile (in kHz)
# * Q75: third quantile (in kHz)
# * IQR: interquantile range (in kHz)
# * skew: skewness (see note in specprop description)
# * kurt: kurtosis (see note in specprop description)
# * sp.ent: spectral entropy
# * sfm: spectral flatness
# * mode: mode frequency
# * centroid: frequency centroid (see specprop)
# * peakf: peak frequency (frequency with highest energy)
# * meanfun: average of fundamental frequency measured across acoustic signal
# * minfun: minimum fundamental frequency measured across acoustic signal
# * maxfun: maximum fundamental frequency measured across acoustic signal
# * meandom: average of dominant frequency measured across acoustic signal
# * mindom: minimum of dominant frequency measured across acoustic signal
# * maxdom: maximum of dominant frequency measured across acoustic signal
# * dfrange: range of dominant frequency measured across acoustic signal
# * modindx: modulation index. Calculated as the accumulated absolute difference between adjacent measurements of fundamental frequencies divided by the frequency range
# * label: male or female

# In[2]:


voice = pd.read_csv(os.path.join('..', 'Resources', 'voice.csv'))
voice.head()


# In[3]:


# Assign X (data) and y (target)

X = voice.drop("label", axis=1)
y = voice["label"]
print(X.shape, y.shape)


# Split our data into training and testing

# In[5]:


# Split the data using train_test_split
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=1, stratify=y)


# Create a Logistic Regression Model

# In[6]:


# Create a logistic regression model
from sklearn.linear_model import LogisticRegression
classifier = LogisticRegression()
classifier


# Fit (train) or model using the training data

# In[7]:


# Fit the model to the data
classifier.fit(X_train, y_train)


# Validate the model using the test data

# In[8]:


# Print the r2 score for the test data
print(f"Training Data Score: {classifier.score(X_train, y_train)}")
print(f"Testing Data Score: {classifier.score(X_test, y_test)}")


# Make predictions

# In[10]:


# Make predictions using the X_test and y_test data
# Print at least 10 predictions vs their actual labels
predictions = classifier.predict(X_test)
print(f"First 10 predictions: {predictions[:10]}")
print(f"First 10 actual labels: {y_test[:10].tolist()}")


# In[13]:


pd.DataFrame({"Prediction": predictions, "Actual": y_test}).reset_index(drop=True)

