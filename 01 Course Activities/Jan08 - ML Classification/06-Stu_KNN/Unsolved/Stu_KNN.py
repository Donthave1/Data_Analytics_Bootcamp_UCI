
# coding: utf-8

# In[1]:


import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier
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


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(data, target, random_state=42)


# In[6]:


# Loop through different k values to see which has the highest accuracy
# Note: We only use odd numbers because we don't want any ties
train_scores = []
test_scores = []
for k in range(1, 20, 2):
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X_train, y_train)
    train_score = knn.score(X_train, y_train)
    test_score = knn.score(X_test, y_test)
    train_scores.append(train_score)
    test_scores.append(test_score)
    print(f"k: {k}, Train/Test Score: {train_score:.3f}/{test_score:.3f}")
    
    
plt.plot(range(1, 20, 2), train_scores, marker='o')
plt.plot(range(1, 20, 2), test_scores, marker="x")
plt.xlabel("k neighbors")
plt.ylabel("Testing accuracy Score")
plt.show()


# In[7]:


# Choose the best k from above and re-fit the KNN Classifier using that k value.
# print the score for the test data
knn = KNeighborsClassifier(n_neighbors=13)
knn.fit(X_train, y_train)
print(f"k=13 Test Acc: {knn.score(X_test, y_test):.3f}")

