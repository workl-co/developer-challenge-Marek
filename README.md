# Workl Developers challenge

Thank you for sending me this challenge. Here is my solution.
## Backend

### Setup
For starters, run following commands
```
cd server
npm i
```

To run the server
```
npm run devstart
```

Open the browser using this address
```
http://localhost:5000/graphql
```

### Get all questions

In GraphiQL left side window paste this query:
```
query {
  questions {
    title
  }
}
```

### Get question by ID

In GraphiQL left side window paste this query:
```
query {
  question(id: "2") {
    title
  }
}
```

### Get only enabled questions
In GraphiQL left side window paste this query:
```
query {
  enabledQuestions(enabled: true) {
    title
  }
}
```