const initState = {
    article:[{
        "source": {
        "id": "medical-news-today",
        "name": "Medical News Today"
        },
        "author": "Ana Sandoiu",
        "title": "Scientists design 'smart' wound healing technique",
        "description": "Researchers have engineered a new molecule that changes the way that materials interact with the body's tissues to drive wound healing.",
        "url": "http://www.medicalnewstoday.com/articles/324110.php",
        "urlToImage": "https://cdn1.medicalnewstoday.com/content/images/hero/324/324110/324110_1100.jpg",
        "publishedAt": "2019-01-08T00:00:00Z",
        "content": "New research, published in the journal Advanced Materials, paves the way for \"a new generation of materials that actively work with tissues to drive [wound] healing.\" As more and more surgical procedures are performed in the United States, the number of surgi… [+3975 chars]"
        },{
            "source": {
            "id": "medical-news-today",
            "name": "Medical News Today"
            },
            "author": "Ana Sandoiu",
            "title": "Scientists design 'smart' wound healing technique",
            "description": "Researchers have engineered a new molecule that changes the way that materials interact with the body's tissues to drive wound healing.",
            "url": "http://www.medicalnewstoday.com/articles/324110.php",
            "urlToImage": "https://cdn1.medicalnewstoday.com/content/images/hero/324/324110/324110_1100.jpg",
            "publishedAt": "2019-01-08T00:00:00Z",
            "content": "New research, published in the journal Advanced Materials, paves the way for \"a new generation of materials that actively work with tissues to drive [wound] healing.\" As more and more surgical procedures are performed in the United States, the number of surgi… [+3975 chars]"
            },{
                "source": {
                "id": "medical-news-today",
                "name": "Medical News Today"
                },
                "author": "Ana Sandoiu",
                "title": "Scientists design 'smart' wound healing technique",
                "description": "Researchers have engineered a new molecule that changes the way that materials interact with the body's tissues to drive wound healing.",
                "url": "http://www.medicalnewstoday.com/articles/324110.php",
                "urlToImage": "https://cdn1.medicalnewstoday.com/content/images/hero/324/324110/324110_1100.jpg",
                "publishedAt": "2019-01-08T00:00:00Z",
                "content": "New research, published in the journal Advanced Materials, paves the way for \"a new generation of materials that actively work with tissues to drive [wound] healing.\" As more and more surgical procedures are performed in the United States, the number of surgi… [+3975 chars]"
                },{
                    "source": {
                    "id": "medical-news-today",
                    "name": "Medical News Today"
                    },
                    "author": "Ana Sandoiu",
                    "title": "Scientists design 'smart' wound healing technique",
                    "description": "Researchers have engineered a new molecule that changes the way that materials interact with the body's tissues to drive wound healing.",
                    "url": "http://www.medicalnewstoday.com/articles/324110.php",
                    "urlToImage": "https://cdn1.medicalnewstoday.com/content/images/hero/324/324110/324110_1100.jpg",
                    "publishedAt": "2019-01-08T00:00:00Z",
                    "content": "New research, published in the journal Advanced Materials, paves the way for \"a new generation of materials that actively work with tissues to drive [wound] healing.\" As more and more surgical procedures are performed in the United States, the number of surgi… [+3975 chars]"
                    }]

  }


  const APiReducer = (state = initState, action) => {
    switch (action.type) {
        case "":
        return{

        }
        default:
        return state;
    }

  }


  export default APiReducer