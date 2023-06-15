pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Check node') {
      agent any
      steps {
        sh '''node --version
npm --version'''
      }
    }

  }
  tools {
    nodejs 'Node 17'
  }
}