import React from 'react';
import './App.css';
import axios from 'axios';
import Movies from './movies';

class App extends React.Component {
  // 초기값 선언
  state = {
    isLoading: true,
    movies: [],
  }
  
  getMovies = async () => { // 비동기
    const {data: {data:{movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?with_rt_ratings');
    // console.log(movies.data.data.movies); // 경로확인
    console.log(movies);
    this.setState({movies, isLoading: false}); // api 연결해제
  }

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return(
      <div>
        {/* {isLoading ? '로딩' : '대기'} */}
        {isLoading ? '로딩' : movies.map((movie)=>{

          return(
            <Movies
              id ={movie.id}
              year={movie.year}
              title={movie.title}
              poster={movie.medium_cover_image}
              summary={movie.summary}
            />
          )
        })}
      </div>
    )
  }
};

// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

export default App;
