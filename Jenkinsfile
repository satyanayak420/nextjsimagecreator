pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS 22.0.0', type: 'NodeJSInstallation'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/satyanayak420/nextjsimagecreator.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        // stage('Deploy') {
        //     steps {
        //         script {
        //             // Replace this with your actual deployment command
        //             sh 'npm run deploy'
        //         }
        //     }
        // }
    }

    post {
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
