import burger2 from '../images/burger2.webp'
import '../css/Intro.css'
function Intro(){
    return(
<div className="main">
  <div class="left">
    <img src={burger2} alt="" />
  </div>
  <div class="right">
    <div class="panel">
    <h1>
    What's a burger? 
    </h1>
    <p>
    What's a burger? It's the rockstar of sandwiches! A juicy patty (could be beef, chicken, or veggies) in a bun, topped with flavor explosions like cheese, lettuce, and secret sauces. It's the OG of comfort food—tasty, messy, and the reason ketchup stains exist. The bun holds it all together, but your dignity might be another story. Welcome to the world of burger bliss! 🍔✨
    </p>
  </div>
  </div>
</div>
    );
}
export default Intro;