---
sidebar_position: 5
---

# AWS RDS

### Database Documentation for Microservices

Each microservice has an independently configured database, hosted on **Amazon RDS** with **MySQL** support. The databases are distributed across **multiple Availability Zones** in the `eu-north-1` region, ensuring resilience and high availability. Below are the details of the databases for each microservice:

- **User Microservice Database**
  - **Endpoint**: `users-db.cx0l8y6gjm4e.eu-north-1.rds.amazonaws.com`
  - **Port**: 3306
  - **Availability Zone**: `eu-north-1c`
  - **Security Groups**: `default`, `all_open`

- **Task Microservice Database**
  - **Endpoint**: `task-db.cx0l8y6gjm4e.eu-north-1.rds.amazonaws.com`
  - **Port**: 3306
  - **Availability Zone**: `eu-north-1c`
  - **Security Groups**: `default`, `all_open`

- **Landlord Microservice Database**
  - **Endpoint**: `landlord-db.cx0l8y6gjm4e.eu-north-1.rds.amazonaws.com`
  - **Port**: 3306
  - **Availability Zone**: `eu-north-1a`
  - **Security Groups**: `default`, `all_open`

All databases are contained within subnets associated with the **VPC `homeharmony-network`**, ensuring network isolation and security. Using different Availability Zones for each service provides greater availability in case of a failure in one of the zones.
