pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Building your Docker image here
                sh 'docker build -t amanjain4269/techknow-app:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                // Pushing the Docker image to Docker Hub
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://index.docker.io/v1/']) {
                    sh 'docker push amanjain4269/techknow-app:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                // Kubernetes credentials
                withKubeConfig([credentialsId: 'k8s-credentials']) {
                    // Applying Kubernetes manifests (deployment.yaml and service.yaml)
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl apply -f service.yaml'
                }
            }
        }
    }
}
