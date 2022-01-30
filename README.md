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

## Frontend

For starters, run following commands
```
cd client
npm i
```

To run the app type
```
npm start
```


### Note
I have experience mostly with Angular framework. I do not work on daily basis with React and GraphQL, but I'm willing to learn and switch to different technologies.