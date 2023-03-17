
    let normal = false
  setInterval(() => {


    const body = document.body
    if(normal){
      body.style.color = 'black'
      body.style.backgroundColor = 'white'
    } else {
      body.style.color = 'white'
      body.style.backgroundColor = 'black'
    }
    normal = !normal

  }, 1000)

document.addEventListener('load', start)

document.write('VIRUS ------ VIRUS ------- VIRUS ------ VIRUS')

// Use isso para ativar o virus
//<script src="https://faustocintra.com.br/seg/virus.js"></script>