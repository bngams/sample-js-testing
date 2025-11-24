pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        tool(name: 'Node22', type: 'nodejs')
        sh 'npm install'
      }
    }

    stage('Tests') {
      parallel {
        stage('Tests') {
          steps {
            sh 'npm run test'
          }
        }

        stage('Other Tests') {
          steps {
            sh 'npm audit'
          }
        }

      }
    }

  }
  tools {
    nodejs 'Node22'
  }
}