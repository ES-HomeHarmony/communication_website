"use strict";(self.webpackChunkmicrosite=self.webpackChunkmicrosite||[]).push([[575],{4693:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"Sprint 3","metadata":{"permalink":"/communication_website/blog/Sprint 3","source":"@site/blog/2024-11-18-sprint_3/sprint_3.md","title":"Sprint 3","description":"From: 2024/11/05","date":"2024-11-18T00:00:00.000Z","tags":[],"readingTime":3.64,"hasTruncateMarker":false,"authors":[{"name":"Tiago Gomes","url":"https://github.com/caridade1706","imageURL":"https://github.com/caridade1706.png","key":"tiago","page":null},{"name":"Sara Almeida","url":"https://github.com/SardinhaAlmeida","imageURL":"https://github.com/SardinhaAlmeida.png","key":"sara","page":null}],"frontMatter":{"slug":"Sprint 3","title":"Sprint 3","authors":["tiago","sara"]},"unlisted":false,"nextItem":{"title":"Sprint 2","permalink":"/communication_website/blog/Sprint 2"}},"content":"import Architecture from \'@site/static/img/Architecure_before.png\';\\n\\n\\n**From**: 2024/11/05\\n**To**: 2024/11/18\\n\\n**Scrum Master**: Tiago Gomes\\n\\n**Product Owner**: Sara Almeida\\n\\n**Developers**: Mariana Perna, Roberto Castro\\n\\n## Sprint Goal\\n\\nThe goal for this sprint was to start developing the notification microservice so the landlord can invite tenants, through notification, to a house. This way they can better manage the expenses and we get to develop the tenant side of seeing the expenses and submit issues.\\n\\n| Expected     | Quantity |\\n| ------------ | -------- |\\n| Stories      | 6        |\\n| Tasks        | 1        |\\n| Epics        | 3        |\\n| Story Points | 24       |\\n\\n## Sprint Backlog\\n\\n| Tasks (SCRUM-\\\\*)  | Description                                  | Assignee          | State | \\n| ---------------  | --------------------------------------------- | ---------------    | ----- | \\n| SCRUM-76         | Document History - API/Database               | Sara Almeida       | Done  |\\n| SCRUM-78         | Document History - Sort/Filter                | Sara Almeida       | Done  |\\n| SCRUM-79         | Document History - S3 metadata storage        | Roberto Castro     | Done  |\\n| SCRUM-80         | Document History - Testing                    | Tiago Gomes        | In Progress  |\\n| SCRUM-104        | Document History - Frontend                   | Roberto Castro     | Done  |\\n| SCRUM-120        | Inviting tenants                              | Tiago Gomes        | To-do |\\n| SCRUM-88         | Automatic Division of Expenses - API/Database | -                  | To-do |\\n| SCRUM-109        | Automatic Division of Expenses - Frontend | -                  | To-do |\\n| SCRUM-92         | Automatic Division of Expenses - Testing | -                  | To-do |\\n| SCRUM-113        | View Reported Issues - API/Database | -                  | To-do |\\n| SCRUM-114        | View Reported Issues - Frontend | -                  | To-do |\\n| SCRUM-115        | View Reported Issues - Testing | -                  | To-do |\\n| SCRUM-116        | Check Submited Issues - API/Database | -                  | To-do |\\n| SCRUM-117        | Check Submited Issues - Frontend | -                  | To-do |\\n| SCRUM-118        | Check Submited Issues - Testing | -                  | To-do |\\n| SCRUM-110        | Submit Issue - API/Database | -                  | To-do |\\n| SCRUM-111        | Submit Issue - Frontend | -                  | To-do |\\n| SCRUM-112        | Submit Issue - Testing | -                  | To-do |\\n| SCRUM-119        | Notification Microservice setup | Roberto Castro                  | To-do |\\n\\n## User Stories\\n\\n| User Stories  | Description                    | Developer     | State | Story Points |\\n| --------------| ------------------------------ | ------------- | ----- | ------------ |\\n| SCRUM-28      | Landlord View Document History | None           | In progess  | 6            |\\n| SCRUM-120      | Inviting tenants           | None           | To-do  | 6            |\\n| SCRUM-30      | Automatic Division of Expenses           | None           | To-do  | 2            |\\n| SCRUM-35      | View All Reported Issues           | None           | To-do  | 3            |\\n| SCRUM-34      | Check Submitted Issues           | None           | To-do  | 3            |\\n| SCRUM-33      | Submit an Issues           | None           | To-do  | 4            |\\n\\n## Sprint Review\\n\\n| Concluded    | Quantity |\\n| ------------ | -------- |\\n| Stories      | 0        |\\n| Tasks        | 0        |\\n| Epics        | 0        |\\n| Story Points | 0        |\\n\\n## Sprint Retrospective\\n\\nAs a team, we decided this would be a **Sprint 0**. We felt like we weren\'t sure of the direction we were going and we really wanted to take time thinking what was indeed valuable to our application and to our users. This way, we didn\'t make any progress this sprint concerning the development of features. Instead, we took a step back and re-evaluated our priorities, besides digging deeper into learning about terraform.\\n\\nFrom this, we concluded that the *Task Management Microservice* was not a priority nor it was inovative to our users. We decided to focus on improving the *Houses Management Microservice* and creating a solid *Notification Microservice*. We still intent to have landlords and tenants, but we think that the features of adding and managing expenses and managing issues are more valuable to our users as landlords and having a unified place to see all the expenses is the most valuable and inovative feature to our tenants.\\n\\n<img src={Architecture} alt=\\"Architecture\\" width=\\"600\\" height=\\"400\\"/>\\n\\nThis way, from the backlog we had, Epics 2 and 4 will be removed and, for the next sprint, we will focus on continuing the development of the *Houses Management Microservice*. We feel like this was the best decision so we can deliver a more valuable product to our users."},{"id":"Sprint 2","metadata":{"permalink":"/communication_website/blog/Sprint 2","source":"@site/blog/2024-11-04-sprint_2/sprint_2.md","title":"Sprint 2","description":"From: 2024/10/22","date":"2024-11-04T00:00:00.000Z","tags":[],"readingTime":3.075,"hasTruncateMarker":false,"authors":[{"name":"Mariana Perna","url":"https://github.com/MarianaPerna07","imageURL":"https://github.com/MarianaPerna07.png","key":"mariana","page":null},{"name":"Roberto Castro","url":"https://github.com/RobertoCastro391","imageURL":"https://github.com/RobertoCastro391.png","key":"berto","page":null}],"frontMatter":{"slug":"Sprint 2","title":"Sprint 2","authors":["mariana","berto"]},"unlisted":false,"prevItem":{"title":"Sprint 3","permalink":"/communication_website/blog/Sprint 3"},"nextItem":{"title":"Sprint 1","permalink":"/communication_website/blog/Sprint 1"}},"content":"**From**: 2024/10/22\\n**To**: 2024/11/04\\n\\n**Scrum Master**: Mariana Perna\\n\\n**Product Owner**: Roberto Castro\\n\\n**Developers**: Tiago Gomes, Sara Almeida\\n\\n## Sprint Goal\\n\\nThe objective of this sprint is to make the entire landlord functionality operational and resolve any security issues. Additionally, we will explore AWS S3 to be able to store all files that are necessary.\\n\\n| Expected     | Quantity |\\n| ------------ | -------- |\\n| Tasks        | 24       |\\n| Epics        | 2        |\\n| Story Points | 35       |\\n\\n## Sprint Backlog\\n\\n| Taks (SCRUM-\\\\*)  | Description                                   | Developer          | State | \\n| ---------------  | --------------------------------------------- | ---------------    | ----- | \\n| SCRUM-82         | Addition of Expenses - API/Database           | Roberto Castro     | Done  |\\n| SCRUM-105        | Addition of Expenses - Frontend               | Sara Almeida       | Done  |\\n| SCRUM-106        | Addition of Expenses - Integration            | Roberto Castro     | Done  |\\n| SCRUM-86         | Addition of Expenses - Testing                | Sara Almeida       | Done  |\\n| SCRUM-55         | Pending Payments - API/Database               | Sara Almeida       | Done  |\\n| SCRUM-57         | Pending Payments - Frontend                   | Sara Almeida       | Done  |\\n| SCRUM-59         | Pending Payments - Testing                    | Sara Almeida       | Done  |\\n| SCRUM-17         | Landing Page - Testing                        | Sara Almeida       | Done  |\\n| SCRUM-95         | Create Houses - API/Database                  | Mariana Perna      | Done  |\\n| SCRUM-100        | Create Houses - Frontend                      | Tiago Gomes        | Done  |\\n| SCRUM-96         | Create Houses - Testing                       | Tiago Gomes        | Done  |\\n| SCRUM-76         | Document History - API/Database               | Sara Almeida       | Done  |\\n| SCRUM-78         | Document History - Sort/Filter                | Sara Almeida       | Done  |\\n| SCRUM-79         | Document History - S3 metadata storage        | Roberto Castro     | Done  |\\n| SCRUM-80         | Document History - Testing                    | Tiago Gomes        | Done  |\\n| SCRUM-104        | Document History - Frontend                   | Roberto Castro     | Done  |\\n| SCRUM-98         | Add Tenants to House - API/DATABASE           | Mariana Perna      | Done  |\\n| SCRUM-99         | Add Tenants to House - Testing                | Tiago Gomes        | Done  |\\n| SCRUM-101        | Add Tenants to House - Frontend               | Roberto Castro     | Done  |\\n| SCRUM-107        | Message broker configure users                | Mariana Perna      | Done  |\\n| SCRUM-60         | Token logic (jwt client secret not exposed)   | Tiago Gomes        | Done  |\\n| SCRUM-93         | Refactor of the acceptance test               | Sara Almeida       | Done  |\\n| SCRUM-108        | Message broker configure landlords            | Mariana Perna      | Done  |\\n| SCRUM-26         | Deploy Landord Microservice in AWS ECS        | Mariana Perna      | Done  |\\n\\n## User Stories\\n\\n| User Stories  | Description                    | Developer     | State | Story Points |\\n| --------------| ------------------------------ | ------------- | ----- | ------------ |\\n| SCRUM-11      | Landlord Addition of Expenses  | All           | Done  | 9            |\\n| SCRUM-6       | Management of Pending Payments | All           | Done  | 5            |\\n| SCRUM-15      | Landlord Landing Page          | All           | Done  | 3            |\\n| SCRUM-94      | Create Houses                  | All           | Done  | 4            |\\n| SCRUM-28      | Landlord View Document History | All           | Done  | 6            |\\n| SCRUM-97      | Add tenants to house           | All           | Done  | 8            |\\n\\n## Sprint Review\\n\\n| Concluded    | Quantity |\\n| ------------ | -------- |\\n| Tasks        | 24       |\\n| Epics        | 1        |\\n| Story Points | 35       |\\n\\n## Sprint Retrospective\\n\\nDespite the unexpected departure of a team member, we managed to successfully achieve our sprint objectives. Although we faced several challenges and experienced an increased workload, the team adapted well, showing resilience and dedication to meet our goals.\\n\\n## Sprint Burndown Chart\\n\\n![Burndown Chart](../../static/img/sprint2.png)"},{"id":"Sprint 1","metadata":{"permalink":"/communication_website/blog/Sprint 1","source":"@site/blog/2024-10-21-sprint_1/sprint_1.md","title":"Sprint 1","description":"From: 2024/10/13","date":"2024-10-21T00:00:00.000Z","tags":[],"readingTime":2.45,"hasTruncateMarker":false,"authors":[{"name":"Sara Almeida","url":"https://github.com/SardinhaAlmeida","imageURL":"https://github.com/SardinhaAlmeida.png","key":"sara","page":null},{"name":"Tiago Gomes","url":"https://github.com/caridade1706","imageURL":"https://github.com/caridade1706.png","key":"tiago","page":null}],"frontMatter":{"slug":"Sprint 1","title":"Sprint 1","authors":["sara","tiago"]},"unlisted":false,"prevItem":{"title":"Sprint 2","permalink":"/communication_website/blog/Sprint 2"}},"content":"**From**: 2024/10/13\\n**To**: 2024/10/21\\n\\n**Scrum Master**: Sara Almeida\\n\\n**Product Owner**: Tiago Gomes\\n\\n**Developers**: Roberto Castro, Mariana Perna, Rafaela Dias\\n\\n## Sprint Goal\\n\\nThe main goal for this sprint is to incorporate AWS Cognito IDP with our application and test it. We also aim to learn about AWS services by deploying our frontend and usermicroservice and hosting our DBs.\\n\\n| Expected     | Quantity |\\n| ------------ | -------- |\\n| Tasks        | 22       |\\n| Epics        | 2        |\\n| Story Points | 27       |\\n\\n## Sprint Backlog\\n\\n| Tasks (SCRUM-*) | Description                             | Developer        | State |\\n| --------------- | --------------------------------------- | -----------------| ----- |\\n| SCRUM-8         | User Login                              | Tiago Gomes      | Done  |\\n| SCRUM-2         | User Registration                       | Sara Almeida     | Done  |\\n| SCRUM-11        | Landlord Addition of Expenses           | Mariana Perna    | Done  |\\n| SCRUM-14        | Tenant Landing Page                     | Sara Almeida     | Done  |\\n| SCRUM-15        | Landlord Landing Page                   | Roberto Castro   | Done  |\\n| SCRUM-16        | User Profile Page                       | Rafaela Dias     | Done  |\\n| SCRUM-18        | Deploy User Microservice in AWS ECS     | Tiago Gomes      | Done  |\\n| SCRUM-20        | Deploy Frontend Container in AWS ECS    | Mariana Perna    | Done  |\\n| SCRUM-21        | AWS Networking Setup                    | Sara Almeida     | Done  |\\n| SCRUM-23        | Initial AWS Database Configuration      | Tiago Gomes      | Done  |\\n| SCRUM-24        | Link Frontend with Backend              | Mariana Perna    | Done  |\\n| SCRUM-26        | Deploy Landlord Microservice in AWS ECS | Roberto Castro   | Done  |\\n\\n## User Stories\\n\\n| User Stories    | Description                   | Developer      | State | Story Points |\\n| --------------- | ----------------------------- | -------------- | ----- | ------------ |\\n| SCRUM-5         | User Registration             | Mariana Perna  | Done  | 3            |\\n| SCRUM-6         | User Login                    | Mariana Perna  | Done  | 3            |\\n| SCRUM-7         | Landlord Addition of Expenses | Tiago Gomes    | Done  | 6            |\\n| SCRUM-8         | Tenant Landing Page           | Sara Almeida   | Done  | 3            |\\n| SCRUM-9         | Landlord Landing Page         | Roberto Castro | Done  | 5            |\\n| SCRUM-10        | User Profile Page             | Rafaela Dias   | Done  | 3            |\\n| SCRUM-11        | Deploy User Microservice      | Roberto Castro | Done  | 4            |\\n\\nTeam Velocity: 27\\n\\n## Sprint Review\\n\\n| Concluded    | Quantity |\\n| ------------ | -------- |\\n| Tasks        | 22       |\\n| Epics        | 2        |\\n| Story Points | 27       |\\n\\n## Sprint Retrospective\\n\\nIn this sprint, we focused on essential features, including user authentication and core functionality for landlords and tenants. We successfully completed 22 tasks covering various parts of the user journey, from registration and login to expense management and profile setup. Additionally, we deployed core services to AWS ECS, configured databases, and established networking. All planned tasks were completed, reflecting the team\'s strong commitment and efficient collaboration.\\n\\n## Sprint Burndown Chart\\n\\n![Burndown Chart](../../static/img/burndown_chart_sprint_1.png)"}]}}')}}]);