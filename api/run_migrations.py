import requests

API_URL = 'http://localhost:5000/server/api/create-tables'

def run_migrations():
    try:
        response = requests.post(API_URL)
        response.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)
        print("Migrations successful:", response.json())
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    run_migrations()
