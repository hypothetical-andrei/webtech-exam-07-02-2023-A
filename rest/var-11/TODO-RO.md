#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metoda `PUT` la adresa `/students/:id`:

- Dacă s-a trimis un request cu un corp gol sau nedifinit, se va returna un json cu următorul format: `{"message": "body is missing"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă din corpul request-ului lipsesc proprietăți se va returna un json cu următorul format: `{"message": "malformed request"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Un student inexistent nu poate fi modificat. Dacă se cere modificarea unui student inexistent se va returna un mesaj cu formatul: `{"message": "not found"}`. Codul de răspuns va fi: `404`; (0.5 pts)
- Dacă studentul există și corpul request-ului este valid, va fi modificat și se va returna un răspuns cu  codul `202`. Corpul răspunsului va fi `{"message": "accepted"}`;(0.5 pts)
- Dacă se face un request `GET /students` corpul răspunsului trebuie să conțină 10 `students`, inclusiv cel modificat anterior; (0.5 pts)
