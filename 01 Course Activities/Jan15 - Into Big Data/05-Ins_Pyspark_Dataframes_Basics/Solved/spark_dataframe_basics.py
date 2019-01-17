
# coding: utf-8

# ## Dataframe Basics

# In[1]:


# Import our SparkSession so we can use it
from pyspark.sql import SparkSession
# Create our SparkSession, this can take a couple minutes locally
spark = SparkSession.builder.appName("basics").getOrCreate()


# In[ ]:


# Load in data
from pyspark import SparkFiles
url = "https://s3.amazonaws.com/dataviz-curriculum/day_1/food.csv"
spark.sparkContext.addFile(url)
df = spark.read.csv(SparkFiles.get("food.csv"), sep=",", header=True)
df.show()


# In[4]:


# Let's show the data
df.show()


# In[5]:


# Print our schema
df.printSchema()


# In[6]:


# Show the columns
df.columns


# In[7]:


# Describe our data
df.describe()


# In[8]:


# Import struct fields that we can use
from pyspark.sql.types import StructField, StringType, IntegerType, StructType


# In[9]:


# Next we need to create the list of struct fields
schema = [StructField("food", StringType(), True), StructField("price", IntegerType(), True),]
schema


# In[10]:


# Pass in our fields
final = StructType(fields=schema)
final


# In[11]:


# Read our data with our new schema
dataframe = spark.read.csv(SparkFiles.get("food.csv"), sep=",", header=True, schema=final)
dataframe


# In[12]:


# Print it out
dataframe.printSchema()


# ### Accessing data

# In[13]:


dataframe['price']


# In[14]:


type(dataframe['price'])


# In[15]:


dataframe.select('price')


# In[16]:


type(dataframe.select('price'))


# In[17]:


dataframe.select('price').show()


# ### Manipulating Columns

# In[18]:


# Add new column
dataframe.withColumn('newprice', dataframe['price']).show()


# In[19]:


# Update column name
dataframe.withColumnRenamed('price','newerprice').show()


# In[20]:


# Double the price
dataframe.withColumn('doubleprice',dataframe['price']*2).show()


# In[21]:


# Add a dollar to the price
dataframe.withColumn('add_one_dollar',dataframe['price']+1).show()


# In[22]:


# Half the price
dataframe.withColumn('half_price',dataframe['price']/2).show()


# In[23]:


# Collecting a column as a list
dataframe.select("price").collect()


# # Converting PySpark DataFrame to Pandas DataFrame

# In[24]:


import pandas as pd
pandas_df = dataframe.toPandas() 


# In[25]:


pandas_df.head()

