pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        deleteDir()
        sh 'git clone https://github.com/bngams/sample-js-testing.git .'
      }
    }
    stage('Install and run') {
      agent any
      steps {
        sh 'npm install'
        sh 'npm run test'
      }
    }
  }
  tools {
    nodejs 'node'
  }
}