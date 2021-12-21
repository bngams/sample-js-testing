pipeline {
  agent any
 
  tools { nodejs 'node17'}
 
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
  }
}
