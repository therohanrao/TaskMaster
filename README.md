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
 CMD TaskMaster is a task and event-focused calendar application. 
          
It solves organizational challenges faced by the user(s) as either an individual or member of a community, company, or a group by providing an easy to use framework for events, project development, task distribution, and “to-do” lists with no specific deadline.

Users will be able to create tasks and sub-tasks within time-windows/deadlines 
or until the task is actively marked as complete. Group features will also be part 
of this application as users will be able to and delegate tasks to other users 
in the group, accept tasks from other users, and invite users to their group. 
Critical to the app is the idea of nesting, particularly nested tasks and nested groups. 
For example, this software project is a task that can be subdivided into many sub-tasks, 
and the CS97 class is a group that is divided into subgroups. We hope to also include 
location services (with respective permissions) by extending the application to local 
events, where users could view public events around their area. Out of scope features 
that this application will not implement in the time allotted will be a completely public     
marketplace where users could post tasks for anyone to complete. Users must assign tasks 
to specific groups or other specific users. Also any kind of locational directions to 
event locations found on the app will be an out of scope feature that we will not implement. 
The app will merely be able to indicate the location of an event.
          
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

once inside, create two databases: one named **users** and another named **tasks**:

![Image](/img/database1.png)

In the **tasks** database create a table with the following structure: 

> for simplicity, name it **tasks** as well

![Image](/img/databasetasks.jpg)

In the **users** database create a table with the following structure: 

> for simplicity, name it **users** as well

![Image](/img/databaseusers.jpg)

You're almost ready to use TaskMaster!
At this point, we can now exit this browser

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

you might get an error like this:
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
make sure both the port numbers in the `"port": 3308` and `"port": 8889` lines match the port number used by your database 

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

