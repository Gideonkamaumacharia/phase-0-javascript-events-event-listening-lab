//let input = document.getElementById('button')
//input.addEventListener('click', () =>{
  //alert("I was clicked")
//})

const input = document.getElementById('button');

function addingEventListener() {
  alert('I was clicked!');
  input.addEventListener('click', addingEventListener);
}

