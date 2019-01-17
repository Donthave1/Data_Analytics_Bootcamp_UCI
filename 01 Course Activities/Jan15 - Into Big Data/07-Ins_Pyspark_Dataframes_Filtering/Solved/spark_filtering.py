
# coding: utf-8

# ## Filtering Data

# In[1]:


from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("Wine").getOrCreate()


# In[2]:


from pyspark import SparkFiles

url ="https://s3.amazonaws.com/dataviz-curriculum/day_1/wine.csv"
spark.sparkContext.addFile(url)
df = spark.read.csv(SparkFiles.get("wine.csv"), sep=",", header=True)
df.show()


# In[4]:


df.printSchema()


# In[5]:


# Order a dataframe by ascending values
df.orderBy(df["points"].asc()).head(5)


# In[6]:


# Import functions
from pyspark.sql.functions import avg
df.select(avg("points")).show()


# In[7]:


# Using SQL
df.filter("price<20").show()


# In[8]:


# Filter by price on certain columns
df.filter("price<20").select(['points','country', 'winery','price']).show()


# ### Using Python Comparison Operators

# In[9]:


# Same results only this time using python
df.filter(df["price"] < 200).show()


# In[10]:


df.filter( (df["price"] < 200) | (df['points'] > 80) ).show()


# In[11]:


df.filter(df["country"] == "US").show()


# In[ ]:


get_ipython().system('jupyter nbconvert --to script')

