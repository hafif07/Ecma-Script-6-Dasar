// var Siswa =['Riffin','Hibban','Rizqan','Idris']

// console.log(...Siswa)
// //menggunakan titik tiga di depan
var array = ['a','s','d']
function nama(...parameter){
    return parameter.join('-')
}
console.log(nama(...array))
 