pipeline {
    agent any

    environment {
        // A unique image tag based on the git commit hash
        IMAGE_TAG = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
        // Docker image name with the tag
        DOCKER_IMAGE = "amanjain4269/techknow-app:${IMAGE_TAG}"
    }

    stages {
        stage('Build') {
            steps {
                // Building your Docker image here
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                // Pushing the Docker image to Docker Hub
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://index.docker.io/v1/']) {
                    sh 'docker push ${DOCKER_IMAGE}'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                // Kubernetes credentials
                withKubeConfig([credentialsId: 'k8sCred']) {
                    // Modifying the deployment file to use the dynamic Docker Image tag
                    sh "sed -i 's|image: amanjain4269/techknow-app:latest|image: ${DOCKER_IMAGE}|' deployment.yaml"
                    // Applying Kubernetes manifests (deployment.yaml and service.yaml)
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl apply -f service.yaml'
                }
            }
        }
    }
}
