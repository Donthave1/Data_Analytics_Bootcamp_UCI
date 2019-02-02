import pandas as pd
import spacy
import en_core_web_sm
import matplotlib

matplotlib.use("TkAgg")

from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg, NavigationToolbar2TkAgg
from matplotlib.figure import Figure

from auth.tweepy_api import get_tweepy_api


# Load model
nlp = en_core_web_sm.load()


def update_twitter(target_account):
    api = get_tweepy_api()
    # Create dictionary to hold text and label entities
    tweet_dict = {"text": [], "label": []}

    try:
        user_tweets = api.user_timeline(target_account, page=1)

        # Loop through tweets
        for tweet in user_tweets:

            print(tweet["text"])

            # Use nlp on each tweet
            doc = nlp(tweet["text"])

            # Check if nlp returns no entities
            if not doc.ents:
                print("No entities to visualize")
                print("----------------------------")
            else:
                # Print the entities for each doc
                for ent in doc.ents:
                    # Store entities in dictionary
                    tweet_dict["text"].append(ent.text)
                    tweet_dict["label"].append(ent.label_)
        # Convert dictionary to DataFrame
        tweet_df = pd.DataFrame(tweet_dict)
        tweet_df.head()

        # Group by labels# Group
        label_frequency = tweet_df.groupby(["label"]).count()

        fig = Figure(figsize=(5,4), dpi=100)
        ax = fig.add_subplot(111)
        label_frequency.plot.bar(ax=ax)
        return fig

        # Get bar graph as a figure and tweet chart
        
    except Exception:
        raise