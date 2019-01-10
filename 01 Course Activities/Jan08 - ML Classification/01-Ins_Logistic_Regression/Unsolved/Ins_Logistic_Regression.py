
# coding: utf-8

# # Logistic Regression
# 
# Logistic Regression is a statistical method for predicting binary outcomes from data.
# 
# Examples of this are "yes" vs "no" or "young" vs "old". 
# 
# These are categories that translate to probability of being a 0 or a 1 

# We can calculate logistic regression by adding an activation function as the final step to our linear model. 
# 
# This converts the linear regression output to a probability.

# In[1]:


get_ipython().magic('matplotlib inline')
import matplotlib.pyplot as plt
import pandas as pd


# In[2]:


from sklearn.datasets import make_blobs

X, y = make_blobs(centers=2, random_state=42)
print(f"Labels: {y[:10]}")
print(f"Data: {X[:10]}")


# In[3]:


plt.scatter(X[:, 0], X[:, 1], c=y)


# In[4]:


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=1, stratify=y)


# In[5]:


from sklearn.linear_model import LogisticRegression
classifer = LogisticRegression()
classifer


# In[6]:


classifer.fit(X_train, y_train)


# In[7]:


print(f"Training Data Score: {classifer.score(X_train, y_train)}")
print(f"Testing Data Score: {classifer.score(X_test, y_test)}")


# In[8]:


import numpy as np
new_data = np.array([[-2,6]])
plt.scatter(X[:, 0], X[:, 1], c=y)
plt.scatter(new_data[0,0], new_data[0,1], c='r', marker='o', s=100)


# In[9]:


predictions = classifer.predict(new_data)
print("Classes are either 0 (purple) or 1 (yellow)")
print(f"The new point was classified as: {predictions})")


# In[10]:


predictions = classifer.predict(X_test)
pd.DataFrame({"Prediction": predictions, "Actual": y_test})


# In[ ]:


get_ipython().system('jupyte')

