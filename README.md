# Shop application

## Prerequested:
- Python ^3.12
- Docker

## Dev

1. Install dependencies using Poetry:
```bash
pip install poetry
poetry install
```
2. Run the database:
```bash
docker-compose up -d
```
3. Run Django migrations:
```bash
poetry run python manage.py migrate
```
4. Start the server:
```bash
poetry run python manage.py runserver
```