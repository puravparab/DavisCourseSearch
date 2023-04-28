from django.conf import settings

import pinecone
pinecone.init(api_key=settings.PINECONE, environment=settings.PINECONE_ENV)

# Send a query to your pinecone vector database
def query_pinecone(index_name, top_k, namespace, embedding_vector):
	index = pinecone.Index(index_name)

	try:
		query_response = index.query(
			namespace=namespace,
			top_k=top_k,
			include_values=True,
			include_metadata=True,
			vector=embedding_vector
			# filter = {}
		)
		response = clean_response(query_response)
		return response, "Query succesful"

	except Exception as e:
		return None, str(e)

# Clean pinecone query response
def clean_response(query_response):
	response = []
	for course in query_response["matches"]:
		code = course["metadata"]["code"]
		name = course["metadata"]["name"]
		credits = course["metadata"]["credits"]
		description = course["metadata"]["description"]
		prerequisites = course["metadata"]["prerequisites"]

		response.append({
			"code": code,
			"name": name,
			"credits": credits,
			"description": description,
			"prerequisites": prerequisites
		})

	return response