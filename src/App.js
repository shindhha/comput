import logo from './logo.svg';
import './App.css';

function NavBarSection() {
  return (
    <div>

    </div>
  );
}

function Button(props) {
  return (
    <div class = "btn btn-primary">
      {props.text}
    </div>
  );
}

function NavBar(props) {
  return (
    <div class="container-fluid d-flex justify-content-between align-items-center  px-5">
      <div class="d-flex justify-content-start gap-3">
        <NavBarLink src="" text="Home"/>
        <NavBarLink src="" text="Store"/>
        <NavBarLink src="" text="Wipes"/>
        <NavBarLink src="" text="LeaderBoard"/>
        <NavBarLink src="" text="Verify"/>
        <NavBarLink src="" text="Status"/>
        <NavBarLink src="" text="Discord"/>
        <NavBarLink src="" text="Twitter"/>
        <NavBarLink src="" text="Facebook"/>
        <NavBarLink src="" text="Steam"/>

      </div>
      <div class ="text-white">
        <Button text="Bonjour"/>
      </div>
    </div>
  );
}


function Thumbnails(props) {

  return (

    
      <div class="col-md-3 shadow-sm  bg-grey thumbnail rounded-3 element">
        <div class="">
          <img src="/rsc/imgcy.jpg" alt="..." class= "thumbnail-img"/>
          <div class="caption">
            <h3 class="text-white">{props.header}</h3>
          </div>
          <div class="caption text-white fw-bold">
            {props.text}
          </div>
        </div>
      </div>
    
  );
}

function Jumbotron() {
  return (
    <div class="jumbotron">
      <h1>Hello, world!</h1>
      <p>...</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
  </div>
  );
}

function NavBarLink(props) {
  return (
    <div class="">
      <img src={props.img}/>
      <a>{props.text}</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div class="  gap-3 bg-custom-dark container-fluid p-5">
        <div class="p-3">
          <h1 class="text-white">COMMUNITY</h1>
        </div>
        <div class= "gap-4 row justify-content-center">
          <Thumbnails header="MONTHLY PLAYERS" text="1,701"/>
          <Thumbnails header="TOTAL PLAYERS" text="55,077"/>
          <Thumbnails header="REGISTERED USERS" text="98"/>
        </div>
        
      </div>
      <div class="  gap-3 bg-custom-grey container-fluid p-5">
        <div class="p-3">
          <h1 class="text-white">FEATURES</h1>
        </div>
        <div class= "gap-4 row justify-content-center">
          <Thumbnails header="Support 24/7" text="Nous fournissons une assistance 24 heures sur 24, 7 jours sur 7 et 365 jours par an à tous nos utilisateurs."/>
          <Thumbnails header="99,9% Uptime" text="Nous disposons de l'infrastructure nécessaire pour pouvoir offrir un service actif 24h / 24."/>
          <Thumbnails header="Anti-DDoS" text="Nous avons actuellement un firewall pour contrer les attaques ddos."/>
        </div>
        
      </div>
      

    </div>
  );
}

export default App;


const scrollElement = document.getElementById('scrollElement');
const container = document.querySelector('.container');

let animationStarted = false;

window.addEventListener('scroll', () => {
    const elementBottom = container.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (!animationStarted && elementBottom <= windowHeight) {
        scrollElement.classList.add('animate-slide-up');
        animationStarted = true;
    }
});
