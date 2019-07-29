
// function deklaration general
function luasPersegiPanjang(panjang, lebar) {
    return panjang
        * lebar
}
// function deklaration by arrow function
luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar
}
console.log(luasPersegiPanjang(12,10))

luasPersegiPanjang = (panjang, lebar) => (panjang * lebar)


function namaFunction(parameter){
    return parameter
}
console.log(namaFunction('riffin'))

