pipeline {
  agent any
 
  tools { nodejs 'node12'}
 
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
