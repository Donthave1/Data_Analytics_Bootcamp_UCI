
# coding: utf-8

# In[1]:


from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris


# In[4]:


iris = load_iris()


# In[5]:


print(iris.DESCR)


# In[6]:


rf = RandomForestClassifier(n_estimators=200)
rf = rf.fit(iris.data, iris.target)
rf.score(iris.data, iris.target)


# In[7]:


importances = rf.feature_importances_
importances


# In[9]:


sorted(zip(importances, iris.feature_names), reverse=True)

