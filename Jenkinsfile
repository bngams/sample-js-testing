pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        deleteDir()
        sh 'git clone https://github.com/bngams/sample-js-testing.git .'
      }
    }
    stage('Install') {
      agent any
      environment {
        node = 'node'
      }
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}