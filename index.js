const loadData=async(place='dhaka')=>{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=23fee447520245119a443437230409&q=${place}&aqi=no`)
    const json =await response.json()
    // console.log(json)
    displayData(json)
}
const displayData=(data)=>{
    console.log(data)
    
    const div=document.getElementById('content')
    div.setAttribute('id','content')
    div.innerHTML=`
    
    <h1 class="text-xl font-semibold mb-2">Weather in <span class="text-blue-500">${data.location.name}</span></h1>
    <p class="text-gray-600 font-bold">Country: <span class="font-semibold">${data.location.country}</span></p>
    <p class="text-gray-600 font-bold" >Local Time: <span class="font-semibold">${data.location.localtime}</span></p>
    <p class="text-4xl font-semibold mt-4">Temp: <span class="text-blue-500">${data.current.temp_c}°C</span></p>
    <img class="flex ml-12 mt-4" src=${data.current.condition.icon} alt="">
    <p class="mb-2 ml-10 text-blue-600 text-semibold ">${data.current.condition.text}</p>
    <p class="text-gray-600  font-bold">Wind Speed: <span class="font-semibold">${data.current.wind_mph}</span></p>
    <p class="text-gray-600  font-bold">Humidity: <span class="font-semibold">${data.current.humidity}</span></p>
    <p class="text-gray-600   font-bold">Cloud: <span class="font-semibold">${data.current.cloud}</span></p>
    `
    


}
const search=()=>{
    const inputLocation =document.getElementById('inputLocation')
    const searchValue =inputLocation.value;
    inputLocation.value =''
    const content =document.getElementById('content')
    content.value =''
    loadData(searchValue)
}

loadData()