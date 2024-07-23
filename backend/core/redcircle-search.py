import requests
import json

#Search through Target's inventory

# Set up the request parameters
params = {
    'api_key': '9AA7878C7CFA439D905FC50A218AC561',
    'category_id': '5zja3',
    'type': 'search'
}

search_terms = ['highlighter pens', 'notebooks', 'markers']

""" # need a more generalized search
params = {
    'api_key': '9AA7878C7CFA439D905FC50A218AC561',
    'search_term': 'highlighter pens',
    'category_id': '5zja3',
    'type': 'search'
}
"""
# Make the HTTP GET request to RedCircle API
try:
    api_result = requests.get('https://api.redcircleapi.com/request', params=params)
    api_result.raise_for_status()  # Raise an error for bad status codes

    # Print the JSON response from RedCircle API in a readable format
    print(json.dumps(api_result.json(), indent=4))

except requests.exceptions.HTTPError as http_err:
    print(f"HTTP error occurred: {http_err}")
except Exception as err:
    print(f"Other error occurred: {err}")
