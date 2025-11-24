pipeline {
    agent any

    // config. globale (declarative syntax)
    tools {
      nodejs 'Node22'
    }

    
    stages {
        // Not needed if jenkinsfile is loaded from SCM
        // stage('Clone') {
          // steps {
            // via fonction. checkout
            // checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/bngams/sample-js-testing.git']])
            // via fonction git 
            // git 'https://github.com/bngams/sample-js-testing.git'
          // }
        // }
        stage('Build') {
            steps {
                // Diff entre une fonction (snippet groovy) et la ligne  5 en mode global / déclaratif
                tool name: 'Node22', type: 'nodejs'
                sh 'npm install'
            }
        }
        stage('Tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
