---
slug: Sprint 3
title: Sprint 3
authors: [tiago, sara]
---
import Architecture from '@site/static/img/Architecure_before.png';

# Sprint 3

**From**: 2024/11/05
**To**: 2024/11/18

**Scrum Master**: Tiago Gomes

**Product Owner**: Sara Almeida

**Developers**: Mariana Perna, Roberto Castro

## Sprint Goal

The goal for this sprint was to start developing the notification microservice so the landlord can invite tenants, through notification, to a house. This way they can better manage the expenses and we get to develop the tenant side of seeing the expenses and submit issues.

| Expected     | Quantity |
| ------------ | -------- |
| Stories      | 6        |
| Tasks        | 1        |
| Epics        | 3        |
| Story Points | 24       |

## Sprint Backlog

| Tasks (SCRUM-\*)  | Description                                  | Assignee          | State | 
| ---------------  | --------------------------------------------- | ---------------    | ----- | 
| SCRUM-76         | Document History - API/Database               | Sara Almeida       | Done  |
| SCRUM-78         | Document History - Sort/Filter                | Sara Almeida       | Done  |
| SCRUM-79         | Document History - S3 metadata storage        | Roberto Castro     | Done  |
| SCRUM-80         | Document History - Testing                    | Tiago Gomes        | In Progress  |
| SCRUM-104        | Document History - Frontend                   | Roberto Castro     | Done  |
| SCRUM-120        | Inviting tenants                              | Tiago Gomes        | To-do |
| SCRUM-88         | Automatic Division of Expenses - API/Database | -                  | To-do |
| SCRUM-109        | Automatic Division of Expenses - Frontend | -                  | To-do |
| SCRUM-92         | Automatic Division of Expenses - Testing | -                  | To-do |
| SCRUM-113        | View Reported Issues - API/Database | -                  | To-do |
| SCRUM-114        | View Reported Issues - Frontend | -                  | To-do |
| SCRUM-115        | View Reported Issues - Testing | -                  | To-do |
| SCRUM-116        | Check Submited Issues - API/Database | -                  | To-do |
| SCRUM-117        | Check Submited Issues - Frontend | -                  | To-do |
| SCRUM-118        | Check Submited Issues - Testing | -                  | To-do |
| SCRUM-110        | Submit Issue - API/Database | -                  | To-do |
| SCRUM-111        | Submit Issue - Frontend | -                  | To-do |
| SCRUM-112        | Submit Issue - Testing | -                  | To-do |
| SCRUM-119        | Notification Microservice setup | Roberto Castro                  | To-do |

## User Stories

| User Stories  | Description                    | Developer     | State | Story Points |
| --------------| ------------------------------ | ------------- | ----- | ------------ |
| SCRUM-28      | Landlord View Document History | None           | In progess  | 6            |
| SCRUM-120      | Inviting tenants           | None           | To-do  | 6            |
| SCRUM-30      | Automatic Division of Expenses           | None           | To-do  | 2            |
| SCRUM-35      | View All Reported Issues           | None           | To-do  | 3            |
| SCRUM-34      | Check Submitted Issues           | None           | To-do  | 3            |
| SCRUM-33      | Submit an Issues           | None           | To-do  | 4            |

## Sprint Review

| Concluded    | Quantity |
| ------------ | -------- |
| Stories      | 0        |
| Tasks        | 0        |
| Epics        | 0        |
| Story Points | 0        |

## Sprint Retrospective

As a team, we decided this would be a **Sprint 0**. We felt like we weren't sure of the direction we were going and we really wanted to take time thinking what was indeed valuable to our application and to our users. This way, we didn't make any progress this sprint concerning the development of features. Instead, we took a step back and re-evaluated our priorities, besides digging deeper into learning about terraform.

From this, we concluded that the *Task Management Microservice* was not a priority nor it was inovative to our users. We decided to focus on improving the *Houses Management Microservice* and creating a solid *Notification Microservice*. We still intent to have landlords and tenants, but we think that the features of adding and managing expenses and managing issues are more valuable to our users as landlords and having a unified place to see all the expenses is the most valuable and inovative feature to our tenants.

<img src={Architecture} alt="Architecture" width="600" height="400"/>

This way, from the backlog we had, Epics 2 and 4 will be removed and, for the next sprint, we will focus on continuing the development of the *Houses Management Microservice*. We feel like this was the best decision so we can deliver a more valuable product to our users.