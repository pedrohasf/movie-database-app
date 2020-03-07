const GENRES_DATA = []
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=52b17608145274a1143f81584b638e71&language=en-US')
    .then(response=> response.json()).then(data=>{
          data['genres'].map((genre)=>{
              GENRES_DATA.push(genre)
              return true
          })
        }
    )
export default GENRES_DATA