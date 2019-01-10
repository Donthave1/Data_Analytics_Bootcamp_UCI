
# coding: utf-8

# In[1]:


import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier


# In[3]:


iris = load_iris()


# In[4]:


# Split the data using train_test_split
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, random_state=42, stratify=iris.target)


# In[5]:


from sklearn.preprocessing import StandardScaler

X_scaler = StandardScaler().fit(X_train.reshape(-1, 1))


# In[6]:


X_train_scaled = X_scaler.transform(X_train)
X_test_scaled = X_scaler.transform(X_test)


# In[7]:


train_scores = []
test_scores = []
for k in range(1, 20, 2):
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X_train_scaled, y_train)
    train_score = knn.score(X_train_scaled, y_train)
    test_score = knn.score(X_test_scaled, y_test)
    train_scores.append(train_score)
    test_scores.append(test_score)
    print(f"k: {k}, Train/Test Score: {train_score:.3f}/{test_score:.3f}")
    
plt.plot(range(1, 20, 2), train_scores, marker="o")
plt.plot(range(1, 20, 2), test_scores, marker="x")
plt.xlabel("K Neighbors")
plt.ylabel("Testing accuracy score")
plt.show()



# In[9]:


knn = KNeighborsClassifier(n_neighbors=9)
knn.fit(X_train, y_train)
print(f"k=9 Test Acc: {knn.score(X_test, y_test):.3f}")


# In[10]:


new_iris_data = [[4.3, 3.2, 1.3, 0.2]]
predicted_class = knn.predict(new_iris_data)
print(predicted_class)

