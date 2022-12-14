import './Togler.css'
function Togler() {


    //javascript 
    function javascript(param) {
        let value = 1
        for (let i = 1; i <= param; i++) {
           value = value * i
        }
        console.log(value);
    }

    javascript(6)


    const myFunction = () => {
        var element = document.getElementById("1");
        var secelement = document.getElementById("2");
        element.classList.toggle("mynewclass");
        secelement.classList.toggle("hidden");
        // console.log(element);
        // console.log(secelement);
        // console.log(element.classList);
    }

    return (
        <div>
            <button id='2' onClick={myFunction} className=''>Click</button>
            <div id='1' className='hidden'>
                <h1>After click</h1>
                <button onClick={myFunction}>Click</button>
            </div>
        </div>
    )

}
export default Togler