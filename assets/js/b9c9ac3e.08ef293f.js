"use strict";(self.webpackChunkmicrosite=self.webpackChunkmicrosite||[]).push([[9616],{2467:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=t(4848),s=t(8453);const r={sidebar_position:4},a="AWS Deployment Overview",o={id:"microservices_deployment",title:"AWS Deployment Overview",description:"The deployment process for the project leverages several AWS services to ensure scalability, security, and high availability. Each microservice is containerized using Docker to maintain consistency between development and production environments. A Dockerfile is defined for each service, specifying the base image, dependencies, and runtime configurations. These Docker images are built locally and pushed to Amazon Elastic Container Registry (ECR), which serves as the repository for storing versioned images. This setup allows for secure and seamless retrieval of images during deployment.",source:"@site/docs/microservices_deployment.md",sourceDirName:".",slug:"/microservices_deployment",permalink:"/communication_website/docs/microservices_deployment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/communication_website/docs/architecture"},next:{title:"AWS Cognito",permalink:"/communication_website/docs/cognito"}},c={},d=[{value:"API Gateway Issue",id:"api-gateway-issue",level:3},{value:"Transition to ALBs",id:"transition-to-albs",level:3},{value:"CloudFront Configuration Problems",id:"cloudfront-configuration-problems",level:3}];function l(e){const i={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"aws-deployment-overview",children:"AWS Deployment Overview"})}),"\n",(0,n.jsxs)(i.p,{children:["The deployment process for the project leverages several AWS services to ensure scalability, security, and high availability. Each microservice is containerized using Docker to maintain consistency between development and production environments. A ",(0,n.jsx)(i.code,{children:"Dockerfile"})," is defined for each service, specifying the base image, dependencies, and runtime configurations. These Docker images are built locally and pushed to Amazon Elastic Container Registry (ECR), which serves as the repository for storing versioned images. This setup allows for secure and seamless retrieval of images during deployment."]}),"\n",(0,n.jsx)(i.p,{children:"Amazon ECS is used to orchestrate the microservices, running serverlessly with AWS Fargate to eliminate infrastructure management. Each microservice is defined as an ECS task, specifying its associated Docker image, required CPU and memory resources, and environment variables such as database connection details. These tasks are managed within an ECS cluster configured inside a Virtual Private Cloud (VPC), with subnets and security groups ensuring controlled communication between services. ECS services are defined to handle the lifecycle of tasks, and Application Load Balancers (ALBs) are integrated to distribute incoming traffic efficiently, monitor health statuses, and ensure fault tolerance."}),"\n",(0,n.jsx)(i.p,{children:"To further optimize content delivery, AWS CloudFront acts as a content delivery network (CDN), caching static assets like frontend resources at global edge locations. Dynamic requests are routed through the ALBs to the backend microservices, ensuring both high performance and secure communication. API Gateway serves as the central access point for all RESTful APIs, managing routes to ECS services and adding features like throttling, caching, and authentication."}),"\n",(0,n.jsx)(i.p,{children:"User authentication and authorization are handled by AWS Cognito. Cognito User Pools manage user registration and login processes, generating JWT tokens for secure user sessions. These tokens are validated by backend microservices, while Cognito Identity Pools provide temporary credentials for accessing AWS resources such as S3. The authentication layer integrates seamlessly with other AWS services, enhancing both security and user experience."}),"\n",(0,n.jsx)(i.p,{children:"For data persistence, Amazon RDS is utilized with PostgreSQL as the database engine. RDS instances are deployed in private subnets for added security, with automated backups and scaling ensuring high availability and durability. ECS tasks securely connect to the RDS database using IAM roles and environment variables for credentials, streamlining database management."}),"\n",(0,n.jsx)(i.p,{children:"Amazon Managed Streaming for Apache Kafka (MSK) enables inter-service communication. Producers and consumers within the microservices utilize Kafka to handle message streaming efficiently. This includes tasks like token validation and sending tenant-specific notifications. MSK ensures fault-tolerant and scalable messaging while integrating securely with ECS."}),"\n",(0,n.jsx)(i.p,{children:"File storage is managed with Amazon S3, where documents like contracts and receipts are securely stored in private buckets. Access is controlled through IAM policies, and files can be accessed via signed URLs or served through CloudFront for public resources. This setup ensures both data security and accessibility."}),"\n",(0,n.jsx)(i.p,{children:"Monitoring is centralized through Amazon CloudWatch, where logs, metrics, and alarms provide real-time visibility into the application\u2019s health. ECS tasks, RDS, and MSK all send logs and custom metrics to CloudWatch, enabling proactive alerting and performance tracking. This comprehensive monitoring approach ensures any issues are identified and addressed promptly."}),"\n",(0,n.jsx)(i.p,{children:"The end-to-end deployment flow integrates these components seamlessly. The frontend, hosted on CloudFront, communicates with the backend through API Gateway, which routes requests to ECS services via ALBs. The backend microservices manage the business logic, interact with RDS for data storage, and use MSK for messaging. File uploads and storage are handled securely via S3, with CloudFront enhancing delivery speed for public resources. The deployment strategy is designed to provide a robust, secure, and scalable foundation for the application\u2019s operations."}),"\n",(0,n.jsx)(i.h1,{id:"deployment-challenges-\ufe0f",children:"Deployment Challenges \u26a0\ufe0f"}),"\n",(0,n.jsx)(i.p,{children:"Our Terraform-based infrastructure was successfully built and is functional, with key components such as ECS, RDS, and Kafka integrated seamlessly. However, during deployment, we encountered a few significant challenges:"}),"\n",(0,n.jsx)(i.h3,{id:"api-gateway-issue",children:"API Gateway Issue"}),"\n",(0,n.jsx)(i.p,{children:"Initially, we planned to use API Gateway as the central entry point for routing requests to the appropriate microservices. However, we faced difficulties in configuring the service to handle request prefixes correctly for each microservice. This misconfiguration led to routing issues, making it impossible to redirect traffic as expected. To resolve this, we decided to bypass API Gateway and rely solely on Application Load Balancers (ALBs) for traffic distribution."}),"\n",(0,n.jsx)(i.h3,{id:"transition-to-albs",children:"Transition to ALBs"}),"\n",(0,n.jsx)(i.p,{children:"The ALBs were configured to handle traffic routing efficiently, ensuring that requests were directed to the correct ECS service. To secure the ALBs, we utilized the SSL certificates provided by the professor, ensuring encrypted communication between the client and our backend."}),"\n",(0,n.jsx)(i.h3,{id:"cloudfront-configuration-problems",children:"CloudFront Configuration Problems"}),"\n",(0,n.jsx)(i.p,{children:"We also encountered issues with AWS CloudFront during our deployment. While CloudFront was intended to serve static assets and cache resources for faster delivery, its integration with other components introduced complexities. As a result, we opted to forego CloudFront and rely exclusively on the ALBs for both static and dynamic traffic."}),"\n",(0,n.jsx)(i.p,{children:"These decisions simplified the deployment architecture while maintaining the necessary functionality and security. Moving forward, we aim to revisit these configurations to better integrate CloudFront and API Gateway into our system, ensuring optimized performance and scalability."})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var n=t(6540);const s={},r=n.createContext(s);function a(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);