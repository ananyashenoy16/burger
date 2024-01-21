import panda from '../images/panda-bg.webp';
import '../css/Home.css'
import Spline from '@splinetool/react-spline';
// import Navbar from './Navbar';
import Intro from './Intro';
import History from './History'
import Contact from './Contact';

function Home(){
    
    return(
       <div class="full">
        <div class="left">
        <h1>Why <span>'Burger'?</span> Because that's what they call me!</h1>
        </div>
    
       <div class="right">
         <div className="burger">
        <Spline scene="https://prod.spline.design/AEw0bph7vU2YB-qM/scene.splinecode"  />
        </div>
        </div>
     
 
       </div>
    );
}
export default Home;