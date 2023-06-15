pipeline {
  agent any
 
  tools { nodejs 'Node 17'}
 
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
