# TechKnow React App

Welcome to TechKnow, a web application built with React that showcases technology-related articles and topics.

## Prerequisites

Before you get started, make sure you have the following installed on your system:

- Node.js: https://nodejs.org/
- Docker: https://www.docker.com/get-started
- Minikube: https://minikube.sigs.k8s.io/docs/start/
- kubectl: https://kubernetes.io/docs/tasks/tools/install-kubectl/

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/amanjain4269/techknow-app.git
cd techknow-app
```

2. Clone the repository:

npm install
npm run build

3. Dockerize the React App:
Create a Dockerfile in the root directory of your React app with the following content:

```bash
- From the file provided: Dockerfile (https://github.com/Amanjain4269/TechKnow/blob/master/Dockerfile)
```

4. Build and Push the Docker Image:

```bash
docker build -t amanjain4269/techknow-app:latest .
docker push amanjain4269/techknow-app:latest
```

5. Set Up Minikube and Start the Cluster:
Follow the Minikube installation instructions for your OS: https://minikube.sigs.k8s.io/docs/start/
6. Then start Minikube:
```bash
minikube start
```

7. Deploy the Application to Kubernetes:
Create a deployment.yaml file with the following content: https://github.com/Amanjain4269/TechKnow/blob/master/deployment.yaml

Create a service.yaml file with the following content: https://github.com/Amanjain4269/TechKnow/blob/master/service.yaml

8. Apply the deployment and service:
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

9. Jenkins Pipeline (Optional)
If you want to set up a Jenkins pipeline for continuous deployment, follow these additional steps:

Install Jenkins on your system: https://www.jenkins.io/doc/book/installing/

Set up your Jenkins pipeline using the provided Jenkinsfile.

Make sure to install the necessary plugins, such as Kubernetes plugin and Docker plugin, in Jenkins.

Run the Jenkins pipeline, and it will build the Docker image, push it to Docker Hub, and deploy the application to the Kubernetes cluster using Minikube.

**Note: Please note that this `README.md` assumes that you have already created the `Jenkinsfile` and provided the necessary configurations for the Jenkins pipeline. If not, you can refer to the earlier provided Jenkinsfile template and modify it to fit your project's requirements.

