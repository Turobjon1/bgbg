// let arr = [1,2,3,4,5,6,7,8,9,1]

// let mevalar = ['olma', 'nok', 'anor','uzum','banan']

// for (const arrayniIchi of mevalar) {
//     console.log(arrayniIchi);
// }

// mevalar.forEach((a)=>{
//   app(a);
// })

// function app(meva) {
//     console.log(meva);
// }

let nums = [34, 67 , 49, 20, 23, 56, 90, 1000, 78, 54, 50]

let Otadiv = document.getElementById('ota')

    for (const a of nums) {
        let add = document.createElement('h1')
        add.innerHTML = a;
        if(a>50){
         add.classList.add('bg-green')
        }else{
            add.classList.add(`bg-red`)
        } 
        Otadiv.appendChild(add)               
    }

       
        
    
