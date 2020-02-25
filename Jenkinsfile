pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        deleteDir()
        sh 'git clone https://github.com/bngams/sample-js-testing.git .'
      }
    }
    stage('Install and run tests') {
      agent any
      steps {
        sh 'npm install'
        sh 'npm run test'
      }
    }
    stage('Build image') {
      agent any
      docker.build("testdevops/samplejs")
    }
  }
  tools {
    nodejs 'node'
  }
}
