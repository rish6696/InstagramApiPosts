window.onload=()=>{

    

  var button=document.getElementById('btn');
 button.onclick=()=>{

    axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
     
 }
}