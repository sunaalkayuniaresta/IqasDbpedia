// const api_url = "http://127.0.0.1:5000/?sentence='Siapa nama presenter yang Lahir di Jakarta? %%26^[]'"

// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     show(data);
// }

// function test(){
//     console.log("berhasil test")
// getapi(api_url);
// console.log("berhasil test akhir")

// }

// getapi(api_url);



function show(data) {
console.log(data)
document.getElementById("result").innerHTML = data['langkah5']
}

 function test(){
    const pertanyaan =  document.getElementsByClassName("pertanyaan").value;

console.log( pertanyaan)

console.log("BERHASIL TEST AWAL")

    // var apiUrl = 'http://127.0.0.1:5000/?sentence="Siapa nama presenter yang Lahir di Jakarta? %%26^[]"';
    // fetch(apiUrl).then(response => {
    //   return response.json();
    // }).then(data => {
    //     console.log("BERHASIL TEST tengah")

    //     console.log(data);
    //     show(data)
    // }).catch(err => {
    // console.log("gagal")

    //   // Do something for an error here
    // });
    // console.log("BERHASIL TEST akhir")

}