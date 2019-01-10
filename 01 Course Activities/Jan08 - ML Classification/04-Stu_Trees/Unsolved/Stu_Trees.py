
# coding: utf-8

# In[1]:


from sklearn import tree
import pandas as pd
import os


# In[2]:


df = pd.read_csv(os.path.join("..", "Resources", "diabetes.csv"))
df.head()


# In[3]:


target = df["Outcome"]
target_names = ["negative", "positive"]


# In[4]:


data = df.drop("Outcome", axis=1)
feature_names = data.columns
data.head()


# In[5]:


# Split the data using train_test_split
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(data, target, random_state=42)


# In[7]:


# Create a Decision Tree Classifier
clf = tree.DecisionTreeClassifier()


# In[8]:


# Fit the classifier to the data
clf = clf.fit(X_train, y_train)


# In[9]:


# Calculate the R2 score for the test data
clf.score(X_test, y_test)


# In[14]:


# Bonus
# Create, fit, and score a Random Forest Classifier
from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier(n_estimators=2000)
rf = rf.fit(X_train, y_train)
rf.score(X_test, y_test)


# In[15]:


sorted(zip(rf.feature_importances_, feature_names), reverse=True)

