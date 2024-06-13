import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { nowPlaying,options} from "../utils/constant";
import { useDispatch } from "react-redux";

const UseNowPLayingMovies = async()=>{
    const dispatch = useDispatch();
    try {
      const res = await axios.get(nowPlaying,options);
      dispatch(getNowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error);
    }
  }

export default UseNowPLayingMovies;