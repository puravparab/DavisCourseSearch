from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

import openai
from openai.embeddings_utils import get_embedding
openai.api_key = settings.OPEN_AI

# GET embeddings from OPEN AI
@api_view(['GET'])
def get_courses(request, format=None):
	# TEST
	prompt = "Biology and Programming"
	search_vector = get_embedding(prompt, engine='text-embedding-ada-002')
	return Response({"embedding": search_vector}, status=status.HTTP_200_OK)