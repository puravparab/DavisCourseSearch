# Davis Course Search
Sematic searching the entire catalogue of UC Davis Courses

## Installation
Clone the repository
```
git clone https://github.com/puravparab/DavisCourseSearch.git
cd DavisCourseSearch
```

### API
#### Without Docker
Run virtual environment using pipenv
```
cd api
pip install --user pipenv
pipenv shell
pipenv sync
```

Rename .env.template to .env and enter your credentials

Run the following commands
```
python manage.py collectstatic
python manage.py migrate
```

Run the server at http://127.0.0.1:8000 or http://localhost:8000
```
python manage.py runserver
```