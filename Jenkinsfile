pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'cd frontend && npm install'
                sh 'cd backend && npm install'
            }
        }
        
        stage('Test') {
            steps {
                sh 'cd frontend && npm test'
                sh 'cd backend && npm test'
            }
        }
        
        stage('Build') {
            steps {
                sh 'cd frontend && npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
    }
    
    post {
        always {
            emailext (
                subject: "Pipeline Status: ${currentBuild.result}",
                body: "Build ${currentBuild.number} status: ${currentBuild.result}",
                to: 'votre-email@example.com'
            )
        }
    }
} 