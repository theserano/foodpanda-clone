import { helix } from 'ldrs'
import "./Loading.scss";

helix.register()

const Loading = () => {
  return (
    <div className='loading'>
        <l-helix
        size="85"
        speed="2.5" 
        color="black" 
        ></l-helix>
    </div>
  )
}

export default Loading
