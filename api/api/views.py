from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from . import prompt_utils
from . import pinecone_utils

# Semantic search
@api_view(['POST'])
def get_courses(request, format=None):
	prompt = request.data.get("prompt")
	
	# Validate prompt
	valid, message = prompt_utils.validate_prompt(prompt)
	if not valid:
		return Response({"error": message}, status=status.HTTP_400_BAD_REQUEST)

	# Get embedding
	embedding_vector, message = prompt_utils.embedding(prompt)
	if not embedding_vector:
		return Response(
			{"prompt": prompt, "embedding": embedding_vector, "message": message}, 
			status=status.HTTP_500_INTERNAL_SERVER_ERROR
		)

	# Query Pinecone
	response, message = pinecone_utils.query_pinecone(
		settings.PINECONE_INDEX, 15, settings.PINECONE_NAMESPACE, embedding_vector
	)
	if not response:
		return Response(
			{"prompt": prompt, "response": response, "message": message}, 
			status=status.HTTP_500_INTERNAL_SERVER_ERROR
		)

	return Response(
		{"prompt": prompt, "courses": response, "message": message}, 
		status=status.HTTP_200_OK
	)