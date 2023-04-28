# Davis Course Search
Sematic searching the entire catalogue of UC Davis Courses
[Course Data][course_data]

---

## Requirements
- python 10
- node v18.16.0
- npm 9.5.1
- OpenAI API
- Pinecone Vector DB

## Installation
Clone the repository
```
git clone https://github.com/puravparab/DavisCourseSearch.git
cd DavisCourseSearch
```
### API
#### Without Docker:
Run virtual environment using pipenv
```
cd api
pip install --user pipenv
pipenv shell
pipenv sync
```

Rename .env.template to .env and enter your credentials

Run the following commands
(You might have to restart the virtual environment to load the env variables)
```
python manage.py collectstatic
python manage.py migrate
```

Run the server at http://127.0.0.1:8000 or http://localhost:8000
```
python manage.py runserver 0.0.0.0:8000
```

### Client
#### Without Docker:
Install dependencies
```
cd client
npm ci
```

Create a file called .env.local and your server url:
```
SERVER_URL=http://localhost:8000/
```

Run client
```
npm run start
```

---

Original Creator - [Purav Parab](https://github.com/puravparab)


[course_data]: https://github.com/puravparab/DavisScripts/blob/7e59d64d7c2d54d3a7697a558c1c5b05dfbc8040/course_data.json