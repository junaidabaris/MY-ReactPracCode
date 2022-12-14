import { Link } from "react-router-dom"
import '../CompSec/Routing.css'
function Home({ data, setCount }) {
    // console.log(data);
    return (
        <div className="Home">
            <div>
                <h2> You Clicked : {data} Times</h2>
                <button onClick={() => { setCount(data + 1) }}>Click For Chenge</button>
                <h3><Link to='/products'>Go to products page</Link></h3>
            </div>
        </div>
    )
}
export default Home