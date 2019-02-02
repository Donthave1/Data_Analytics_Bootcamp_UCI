import tweepy
from .config import consumer_key, consumer_secret, access_token, access_token_secret

def get_tweepy_api():
    # Setup Tweepy API Authentication
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    return tweepy.API(auth, parser=tweepy.parsers.JSONParser())