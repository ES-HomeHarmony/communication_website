---
sidebar_position: 4
---

# AWS Deployment Overview

The deployment process for the project leverages several AWS services to ensure scalability, security, and high availability. Each microservice is containerized using Docker to maintain consistency between development and production environments. A `Dockerfile` is defined for each service, specifying the base image, dependencies, and runtime configurations. These Docker images are built locally and pushed to Amazon Elastic Container Registry (ECR), which serves as the repository for storing versioned images. This setup allows for secure and seamless retrieval of images during deployment.

Amazon ECS is used to orchestrate the microservices, running serverlessly with AWS Fargate to eliminate infrastructure management. Each microservice is defined as an ECS task, specifying its associated Docker image, required CPU and memory resources, and environment variables such as database connection details. These tasks are managed within an ECS cluster configured inside a Virtual Private Cloud (VPC), with subnets and security groups ensuring controlled communication between services. ECS services are defined to handle the lifecycle of tasks, and Application Load Balancers (ALBs) are integrated to distribute incoming traffic efficiently, monitor health statuses, and ensure fault tolerance.

To further optimize content delivery, AWS CloudFront acts as a content delivery network (CDN), caching static assets like frontend resources at global edge locations. Dynamic requests are routed through the ALBs to the backend microservices, ensuring both high performance and secure communication. API Gateway serves as the central access point for all RESTful APIs, managing routes to ECS services and adding features like throttling, caching, and authentication.

User authentication and authorization are handled by AWS Cognito. Cognito User Pools manage user registration and login processes, generating JWT tokens for secure user sessions. These tokens are validated by backend microservices, while Cognito Identity Pools provide temporary credentials for accessing AWS resources such as S3. The authentication layer integrates seamlessly with other AWS services, enhancing both security and user experience.

For data persistence, Amazon RDS is utilized with PostgreSQL as the database engine. RDS instances are deployed in private subnets for added security, with automated backups and scaling ensuring high availability and durability. ECS tasks securely connect to the RDS database using IAM roles and environment variables for credentials, streamlining database management.

Amazon Managed Streaming for Apache Kafka (MSK) enables inter-service communication. Producers and consumers within the microservices utilize Kafka to handle message streaming efficiently. This includes tasks like token validation and sending tenant-specific notifications. MSK ensures fault-tolerant and scalable messaging while integrating securely with ECS.

File storage is managed with Amazon S3, where documents like contracts and receipts are securely stored in private buckets. Access is controlled through IAM policies, and files can be accessed via signed URLs or served through CloudFront for public resources. This setup ensures both data security and accessibility.

Monitoring is centralized through Amazon CloudWatch, where logs, metrics, and alarms provide real-time visibility into the application’s health. ECS tasks, RDS, and MSK all send logs and custom metrics to CloudWatch, enabling proactive alerting and performance tracking. This comprehensive monitoring approach ensures any issues are identified and addressed promptly.

The end-to-end deployment flow integrates these components seamlessly. The frontend, hosted on CloudFront, communicates with the backend through API Gateway, which routes requests to ECS services via ALBs. The backend microservices manage the business logic, interact with RDS for data storage, and use MSK for messaging. File uploads and storage are handled securely via S3, with CloudFront enhancing delivery speed for public resources. The deployment strategy is designed to provide a robust, secure, and scalable foundation for the application’s operations.

# Deployment Challenges ⚠️

Our Terraform-based infrastructure was successfully built and is functional, with key components such as ECS, RDS, and Kafka integrated seamlessly. However, during deployment, we encountered a few significant challenges:

### API Gateway Issue
Initially, we planned to use API Gateway as the central entry point for routing requests to the appropriate microservices. However, we faced difficulties in configuring the service to handle request prefixes correctly for each microservice. This misconfiguration led to routing issues, making it impossible to redirect traffic as expected. To resolve this, we decided to bypass API Gateway and rely solely on Application Load Balancers (ALBs) for traffic distribution.

### Transition to ALBs
The ALBs were configured to handle traffic routing efficiently, ensuring that requests were directed to the correct ECS service. To secure the ALBs, we utilized the SSL certificates provided by the professor, ensuring encrypted communication between the client and our backend.

### CloudFront Configuration Problems
We also encountered issues with AWS CloudFront during our deployment. While CloudFront was intended to serve static assets and cache resources for faster delivery, its integration with other components introduced complexities. As a result, we opted to forego CloudFront and rely exclusively on the ALBs for both static and dynamic traffic.

These decisions simplified the deployment architecture while maintaining the necessary functionality and security. Moving forward, we aim to revisit these configurations to better integrate CloudFront and API Gateway into our system, ensuring optimized performance and scalability.
