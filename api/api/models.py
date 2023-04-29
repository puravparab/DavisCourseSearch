from django.db import models

class SearchLog(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	prompt = models.CharField(max_length=200)

	def __str__(self):
		return self.prompt