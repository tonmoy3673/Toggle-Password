console.log('connected');
// =========== get view icon ======//
const viewIcon = document.getElementById('icon');

// ========== get copy icon =========//
const copyIcon = document.getElementById('copy');
// ========== get password value =========//
const input = document.getElementById('pass')
input.addEventListener('input',function(){
  if (input.value) {
      console.log(input.value);
    viewIcon.style.display='block'
    copyIcon.style.display='block'

  }
  else{
    viewIcon.style.display='none';
    copyIcon.style.display='none';
  }
  
})


// ============= toggle view icon ======//
const toggleViewIcon =()=>{
    if (input.type ==='password') {
        input.type ='text'
        viewIcon.src='/images/eye-open.png';
        
    }
   else{
    input.type='password';
    viewIcon.src='./images/eye-close.png'
   }
}

// =========== copy =========//
