from django.conf import settings

import openai
from openai.embeddings_utils import get_embedding
openai.api_key = settings.OPEN_AI

'''
Validate prompt:

1. String validation
2. Max length check
'''
def validate_prompt(prompt):
	# Check if prompt is a string
	if not isinstance(prompt, str): return False, "Prompt is not a string"

	'''
	Max length of the string 
	(Refactor to make this token length)
	'''
	max_length = 100
	if len(prompt) > max_length: return False, "Prompt is less than 100 characters"

	return True, "Prompt is valid"

# Get embeddings from OpenAI for specified prompt
def embedding(prompt):
	try:
		embedding = get_embedding(prompt, engine='text-embedding-ada-002')
		return embedding, "Successful"
	except Exception as e:
		return None, str(e)