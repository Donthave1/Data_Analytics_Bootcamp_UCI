
# coding: utf-8

# In[1]:


import numpy as np
import matplotlib.pyplot as plt

from matplotlib import style
style.use("ggplot")
# from matplotlib import rcParams
# rcParams['figure.figsize'] = 10, 8


# In[3]:


from sklearn.datasets.samples_generator import make_blobs
X, y = make_blobs(n_samples=100, centers=2, random_state=0, cluster_std=.95)
plt.scatter(X[:, 0], X[:, 1], c=y, s=100, cmap="bwr");
plt.show()


# In[4]:


# Split data into training and testing
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)


# In[5]:


# Create the SVC Model
from sklearn.svm import SVC 
model = SVC(kernel='linear')
model


# In[12]:


from sklearn.model_selection import GridSearchCV
param_grid = {'C': [1, 5, 50], 'gamma': [0.0001, 0.0005, 0.001, 0.005]}
grid = GridSearchCV(model, param_grid, verbose=3)


# In[13]:


grid.fit(X_train, y_train)


# In[8]:


print(grid.best_params_)


# In[9]:


print(grid.best_score_)


# In[10]:


predictions = grid.predict(X_test)


# In[11]:


from sklearn.metrics import classification_report
print(classification_report(y_test, predictions, target_names=["blue", "red"]))

