const firebaseConfig = {
    apiKey: "AIzaSyBOU34XGJg-jmWxQHZf2yxnQbxteDpOi58",
    authDomain: "ctproject2-f8486.firebaseapp.com",
    databaseURL: "https://ctproject2-f8486-default-rtdb.firebaseio.com",
    projectId: "ctproject2-f8486",
    storageBucket: "ctproject2-f8486.appspot.com",
    messagingSenderId: "727243302143",
    appId: "1:727243302143:web:c37d93bc09fb95438998ca"
  };


  firebase.initializeApp(firebaseConfig);
  var ct2DB=firebase.database().ref('ct2');
  document.getElementById('login').addEventListener("submit",submitForm)
 function submitForm(e){
  e.preventDefault();
  var name=getElemenVal('name');
  var email=getElemenVal('email');
  var psd=getElemenVal('psd');
  console.log(name);
 }
 const getElemenVal =(id)=>{
  return document.getElementById(id).value;
 }