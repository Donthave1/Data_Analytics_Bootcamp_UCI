
# coding: utf-8

# In[1]:


from sklearn import tree
from sklearn.datasets import load_iris


# In[2]:


iris = load_iris()
clf = tree.DecisionTreeClassifier()
clf = clf.fit(iris.data, iris.target)


# In[3]:


import graphviz 
dot_data = tree.export_graphviz(
    clf, out_file=None, 
    feature_names=iris.feature_names,  
    class_names=iris.target_names,  
    filled=True, rounded=True,  
    special_characters=True)  

import pydotplus
graph = pydotplus.graph_from_dot_data(dot_data)
graph.write_png('iris.png')

graph = graphviz.Source(dot_data)  
graph 

