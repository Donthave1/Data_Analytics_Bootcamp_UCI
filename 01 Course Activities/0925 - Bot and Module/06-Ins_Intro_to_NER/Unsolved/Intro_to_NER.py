<<<<<<< HEAD

# coding: utf-8

# # spaCy and Named Entity Recognition

# In[1]:


||||||| merged common ancestors
=======

# coding: utf-8

# # spaCy and Named Entity Recognition


>>>>>>> 48243e39545a32ad227a4eb9239d6d0abf8712d9
import spacy
from spacy import displacy
<<<<<<< HEAD
from IPython.core.display import display, HTML

||||||| merged common ancestors
=======
from IPython.core.display import display, HTML

# In[3]:
>>>>>>> 48243e39545a32ad227a4eb9239d6d0abf8712d9

<<<<<<< HEAD
# In[3]:


# Load the spaCy model
||||||| merged common ancestors
# Load spaCy model
=======

# Load the spaCy model
>>>>>>> 48243e39545a32ad227a4eb9239d6d0abf8712d9
nlp = spacy.load('en_core_web_md')

# Save a sentence for processing
doc = nlp(u"Amazon is already hiring near the nation's capital - and Boston.")

# Print the entity text, starting char, ending char, and label
<<<<<<< HEAD
for ent in doc.ents:
    print(ent.text, ent.start_char, ent.end_char, ent.label_)


# In[4]:
||||||| merged common ancestors
=======
for ent in doc.ents:
    print(ent.text, ent.start_char, ent.end_char, ent.label_)


# In[6]:
>>>>>>> 48243e39545a32ad227a4eb9239d6d0abf8712d9

<<<<<<< HEAD

# What is 'GPE', anyway?
spacy.explain("GPE")


# ### Create an Entity Visualization from a news Article

# In[5]:
||||||| merged common ancestors
# What is `GPE`, anyway?
=======

# What is 'GPE', anyway?
spacy.explain("ORDINAL")


# ### Create an Entity Visualization from a news Article

# In[7]:
>>>>>>> 48243e39545a32ad227a4eb9239d6d0abf8712d9


# Save an excerpt from a news article
news_article = """Amazon (AMZN) is considered to be one of the greatest growth stocks of our generation. 
After a mixed but overall positive Prime Day, AMZN reached an all time high price of $1860, reflecting a 
market capitalization greater than $900 billion, which would make it the second most valuable company in 
the world after Apple (NASDAQ:AAPL)."""

<<<<<<< HEAD

# In[6]:


||||||| merged common ancestors
=======

# In[8]:


>>>>>>> 48243e39545a32ad227a4eb9239d6d0abf8712d9
# Ready the article for processing
<<<<<<< HEAD
doc2 = nlp(news_article)
||||||| merged common ancestors
=======
doc2 = nlp(news_article)

>>>>>>> 48243e39545a32ad227a4eb9239d6d0abf8712d9

# Add a title to the document
<<<<<<< HEAD
doc2.user_data['title'] = "News Snippet"

# Render the visualization
html_template = displacy.serve(doc2, style="ent")
display(HTML(html_template))

# In[9]:

||||||| merged common ancestors
=======
doc2.user_data['title'] = "News Snippet"

>>>>>>> 48243e39545a32ad227a4eb9239d6d0abf8712d9

<<<<<<< HEAD
get_ipython().system('jupyter nbconvert --to script Intro_to_NER.ipynb#')
||||||| merged common ancestors
=======
# Render the visualization
html_template = displacy.serve(doc2, style="ent")
display(HTML(html_template))
>>>>>>> 48243e39545a32ad227a4eb9239d6d0abf8712d9

