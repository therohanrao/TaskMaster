![Image](/img/logo.png)

# TaskMaster 

## Table of Contents
* [Description](#description)
* [Installation](#Installation)
  * [In my-app](#In-my-app)
  * [Database setup](#Database-setup)
  * [In api](#In-api)
- [Demo](#demo)
- [Troubleshooting](#Troubleshooting)
- [Mid-Quarter Demos](#Mid-Quarter-Demos)
    * [Presentation #2](#Presentation-2)
    * [Presentation #1](#Presentation-1)
- [Contributing](#Contributing)

## Description
   TaskMaster is a calendar application that focuses on tasks and events. The goal of TaskMaster is to solve organizational challenges that are faced by individuals, groups, and companies that need to complete tasks in a timely manner. If the user so chooses, it may even be used as a to-do list with no specified deadline. We hope that, with our product, users will be able to set up events and use it for project development and task distribution with ease.

   TaskMaster allows users to actively watch over tasks, marking them as complete, hence deleting them, when necessary. Users are able to add tasks, which gives other users the option to contribute to said task. This allows users to form “groups” which make delegating specific tasks or subtasks easier. Tasks can be extremely long and many obstacles can get in the way of quickly completing tasks, which is why our calendar allows users to have tasks that are days, months, or even years long. After a task is complete, a user can archive a task with an optional completion message. This places the task in their archive, and the user is notified via email a record of their completed task. A user can pull a task from their archive, and move it to their current tasks, if they wish. The interface is a dynamic calendar with three dropdowns and two buttons. The three drop downs are for adding tasks, contributing to a task, and searching for a task. The first button navigates to the archive and the second button navigates to tasks that end on the date selected by the user on the calendar. 
  

   From the user’s perspective, it is a simple and clean interface. We enable users to create an account. With this, they are able to login and utilize the calendar. If a user forgets their login information, we give them the option to try and recover their account by resetting the password, so long as they provide the correct username and answer to the security question they made when creating the account. Thank you for using TaskMaster!

          
# Installation

> A few things you will need to install to get started with our app:

* [Node.js](https://nodejs.org/en/download/)
    -
    - When installing, keep all the defaults
* [Node Package Manager (npm)](https://www.npmjs.com/get-npm) 
    -
    - which is already installed with Node.js
* A mySQL database, which can be created with the following:
    -
    - [WampServer](https://sourceforge.net/projects/wampserver/) (for Windows)
    - [MAMP](https://www.mamp.info/en/downloads/) (for Mac)
    - [phpMyAdmin](https://www.phpmyadmin.net/)



#

Open up two Command prompts

Navigate to the project directory with both

Enter the "my-app" directory with one and the "api" directory with the other

> my-app is our frontend and api is our backend

## **In my-app**:

Use the package manager [npm](https://www.npmjs.com/get-npm) to install the react-start-scripts.

```bash
npm install
```

Next run npm start, which should automatically open up our frontend in a browser at https://localhost:3000

```bash
npm start
```

## **Database setup**

Open up the database app you installed and log in:

![Image](/img/databaselogin.jpg)

Once inside, create two databases: one named **users** and another named **tasks**:

![Image](/img/database1.png)

In the **tasks** database create a table with the following structure: 

> For simplicity, name it **tasks** as well

![Image](/img/databasetasks.jpg)

In the **users** database create a table with the following structure: 

> For simplicity, name it **users** as well

![Image](/img/databaseusers.jpg)

You're almost ready to use TaskMaster!
At this point, we can now exit this browser.

## **In api**:

Again, run npm start:
```bash
npm start
```

If your database is setup and the backend is connected properly, you will see this message outputted in the command prompt:
```bash
DB connection succeeded.
DB connection succeeded.
```

**Welcome to TaskMaster!**

## **Demo**

[![Watch the video](https://img.youtube.com/vi/A7cm_KLtnC4/maxresdefault.jpg)](https://youtu.be/A7cm_KLtnC4)


## **Troubleshooting**:

You might get an error like this:
```bash
DB connection failed
 Error : {
  "errno": "ECONNREFUSED",
  "code": "ECONNREFUSED",
  "syscall": "connect",
  "address": "127.0.0.1",
  "port": 3308,
  "fatal": true
}
DB connection failed
 Error : {
  "errno": "ECONNREFUSED",
  "code": "ECONNREFUSED",
  "syscall": "connect",
  "address": "127.0.0.1",
  "port": 8889,
  "fatal": true
}
```
Make sure both the port numbers in the `"port": 3308` and `"port": 8889` lines match the port number used by your database.

> It's best to change both these port numbers to **3308** for WampServer and **8889** for MAMP, as they're the defaults

If any other errors persist, please contact us

![Image](/img/TMContact.jpg)

---

## Mid-Quarter Demos

### Presentation #2
[![Watch the video](https://img.youtube.com/vi/W_7tX75a0oQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=W_7tX75a0oQ)

---

### Presentation #1
[![Watch the video](https://img.youtube.com/vi/Y4Ebtd4wPCY/maxresdefault.jpg)](https://www.youtube.com/watch?v=Y4Ebtd4wPCY)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

