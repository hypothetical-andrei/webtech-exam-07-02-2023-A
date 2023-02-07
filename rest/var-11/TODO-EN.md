#Subject 3 (2.5 pts)
#TOPIC: REST

# Having the following application developed using NodeJS, complete the `PUT` method on path `/students/:id` :

- If no request body is present you should return a json with the following format: `{"message": "body is missing"}`. Response status code should be: `400`; (0.5 pts)
- If the request body properties are missing you should return a json with the following format: `{"message": "malformed request"}`. Response status code should be: `400`; (0.5 pts)
- Only an existing student can be modified. Otherwise, the response should be : `{message: "not found"}`. Response status code should be: `404`; (0.5 pts)
- If the student exists and the body is valid, it should be modified and a reponse with the code `202` should be returned. The response body should be `{"message": "accepted"}`; (0.5 pts)
- If a `GET /students` request is performed, the body should contain 10 `students`, including the one previoulsy modified; (0.5 pts)