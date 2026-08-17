pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url:git@github.com:Rakesh-1202/myrepo.git 
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }

        stage('Check Image') {
            steps {
                sh 'docker images'
            }
        }
    }
}
