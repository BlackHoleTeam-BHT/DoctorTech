import $ from 'jquery';


//Note : to get the New Articles 
export const MedicalNewsAPI = (user) => {
  console.log(1000000000)
  return (dispatch, getState) => {

    $.ajax({
      url: 'https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=1de56e7232b74585b19b44db1c2e6d18',
      type: 'GET',
      success: (res) => {
        console.log('MedicalNewsAPI', res.articles)
        dispatch({ type: 'Articles', data: res.articles })
      },
      error: (error) => {
        console.log("Error during MedicalNewsAPI", error)
      }
    })


  }



}


//http://api.openweathermap.org/data/2.5/weather?id=250441&APPID=c8cc230b2e6224f2bfae9783ac9ee316


//Note : weather API 
export const WeatherAPI = (user) => {
    console.log(1000000000)
    return (dispatch, getState) => {

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?id=250441&APPID=c8cc230b2e6224f2bfae9783ac9ee316',
            type: 'GET',
            success: (res) => {
             console.log('WeatherAPI',res.weather)
             
             dispatch({ type: 'Weather', data: res})    
                
            },
            error: (error) => {
               console.log("Error during WeatherAPI",error)
            }
        })


    }



}
