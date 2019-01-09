import $ from 'jquery';


//Note : to get the New Articles 
export const MedicalNewsAPI = (user) => {
    console.log(1000000000)
    return (dispatch, getState) => {

        $.ajax({
            url: 'https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=1de56e7232b74585b19b44db1c2e6d18',
            type: 'GET',
            success: (res) => {
             console.log('MedicalNewsAPI',res.articles)
             
                    dispatch({ type: 'Articles', data: res.articles})    
           
             
                
            },
            error: (error) => {
               console.log("Error during MedicalNewsAPI",error)
            }
        })


    }



}
