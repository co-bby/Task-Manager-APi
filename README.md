
# Task Manager API

A Task Manager Rest API




## Tech Stack

**Client:** Vanilla Javascript

**Server:** Node, Express, MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/co-bby/Task-Manager-APi
```

Go to the project directory

```bash
  cd Task-Manager-Api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL` = mongodb+srv://<username>:<password>@cluster0.9t7ho.mongodb.net/?retryWrites=true&w=majority




## API Reference

#### Get all tasks

```http
  GET localhost:3000/api/v1/tasks
```


#### Get a single Task

```http
  GET localhost:3000/api/v1/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the task |

### Delete a single Task

```http
  GET localhost:3000/api/v1/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the task |


### Update a Task
```http
  GET localhost:3000/api/v1/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the task      |
| `req.body`| `json`   | **Required**  |