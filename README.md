
# Task Manager API

- [Task Manager API](#task-manager-api)
  - [Tech Stack](#tech-stack)
  - [Run Locally](#run-locally)
  - [Environment Variables](#environment-variables)
  - [API Reference](#api-reference)
      - [Get all tasks](#get-all-tasks)
      - [Get a single Task](#get-a-single-task)
    - [Delete a single Task](#delete-a-single-task)
    - [Update a Task](#update-a-task)




## Tech Stack
**Architecture:** Model-View-Controller(MVC)

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

`MONGO_URL` =




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