from django.urls import path
from .views import *

app_name = 'api'

urlpatterns = [
	path('', get_courses, name='get-courses')
]