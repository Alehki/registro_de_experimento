// Web de registro.

const namee = document.getElementById(`name`)
const pass = document.getElementById(`pass`)
const btn = document.getElementById(`btn`)



const guardar = () =>{
    const person = {
        id: Math.random(1, 100),
        namee: namee.value,
        pass: pass.value,
    }
    localStorage.setItem(person.id, JSON.stringify(person))
    namee.value = ``
    pass.value = ``
}

btn.addEventListener(`click`, () =>{
    if(namee.value===`` || pass.value===``){
        alert(`Error, datos vacios`)
        // Agregaste esto pero lo podrias hacer mas
        // agregando un numero de intentos.
    }else{
        guardar()
    }
})


// ---------------------------------------------------------------------------------------------------------

const namee2 = document.getElementById(`name2`)
const pass2 = document.getElementById(`pass2`)
const btn2 = document.getElementById(`btn2`)

btn2.addEventListener(`click`, () =>{
    const array = Object.keys(localStorage)
    let valor = false
    for(const key of array){
        const objeto = JSON.parse(localStorage.getItem(key))
        if(objeto.namee===namee2.value && objeto.pass===pass2.value){
            valor = true
        }
    }

    if(valor){
        // alert(`Los datos son exitosos`)
        location.href = `/registro_xd/usuario.html`
        // Cosas de la pàgina de usuario.
        
        // const title_usuario = document.getElementById(`title_usuario`)
        // title_usuario.textContent = `Bienvenido señor usuario ${namee2.value}`
    }else{
        if(namee2.value===`` || pass2.value===``){
            alert(`Datos vacios`)
        }else{
            alert(`Datos incorrectos`)
        }
    }
    namee2.value = ``
    pass2.value = ``
})

// const person = {
//     name: `Juan`,
//     age: 26,
//     sons: [`Laura`, `Diego`, `Pepe`, `Rosa`, `Tomas`]
// }

// // console.log(person.name)
// // console.log(person[`age`])

// for(const key in person){
//     console.log(key)
// }

// for(const key in person){
//     console.log(person[key])
// }

// for(const son in person.sons){
//     console.log(son)
// }


const Euclides = (a, b) =>{
    if(b==0){
        return a
    }else{
        return Euclides(b, a%b)
    }
}




// Multiplicaciòn sin usar el signo de multiplicar.

const suma = (a, b) =>{
    let valor = 0;

    const signo = Math.abs(b) == b

    for (let i = 1; i <= Math.abs(b); i++) {
        if(signo){
            valor += a
        }else{
            valor -= a
        }
    }
    return valor
}


// Obtener el numero mayor de un arreglo solo iterandolo una vez.

const numbers = [-1,-3,-3,-12]

let valor = numbers[0]

for(const number of numbers){
    if(valor<number){
        valor = number
    }
}

console.log(valor)