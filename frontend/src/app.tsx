import { useState, useEffect } from 'preact/hooks';
import axios from 'axios';
import { FaDiscord, FaTwitter, FaYoutube, FaTwitch } from 'react-icons/fa';

interface Minigame {
  id: number;
  name: string;
  description: string;
}

const App = () => {
  const [minigames, setMinigames] = useState<Minigame[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchMinigames = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/minigames');
        setMinigames(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des mini-jeux:', error);
      }
    };

    fetchMinigames();
  }, []);

  return (
    <div>
      <header>
        <nav class="container">
          <div class={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <h1 class="navbar-title">Mineria</h1>
            <button class="menu-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul class={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#accueil" onClick={toggleMenu}>Accueil</a></li>
              <li><a href="#minijeux" onClick={toggleMenu}>Mini-jeux</a></li>
              <li><a href="#classement" onClick={toggleMenu}>Classement</a></li>
              <li><a href="#boutique" onClick={toggleMenu}>Boutique</a></li>
              <li><a href="#evenements" onClick={toggleMenu}>Événements</a></li>
              <li><a href="#apropos" onClick={toggleMenu}>À propos</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="accueil" class="hero">
          <div class="container">
            <h1>Bienvenue sur Mineria</h1>
            <p>Le serveur ultime de mini-jeux Minecraft inspiré de Holycube Saison VI</p>
            <a href="#" class="cta-button">Jouer maintenant</a>
          </div>
        </section>

        <section id="minijeux" class="container">
          <h2>Nos Mini-jeux</h2>
          <div class="minigame-list">
            {minigames.map((minigame) => (
              <div key={minigame.id} class="minigame-card">
                <h3>{minigame.name}</h3>
                <p>{minigame.description}</p>
                <a href="#" class="play-button">Jouer</a>
              </div>
            ))}
          </div>
        </section>

        <section id="classement" class="container">
          <h2>Classement des joueurs</h2>
          <table class="leaderboard">
            <thead>
              <tr>
                <th>Rang</th>
                <th>Joueur</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>xXDragonSlayerXx</td>
                <td>15000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>BuildMaster2000</td>
                <td>14500</td>
              </tr>
              <tr>
                <td>3</td>
                <td>PvPKing99</td>
                <td>14000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="boutique" class="container">
          <h2>Boutique du serveur</h2>
          <div class="shop-items">
            <div class="shop-item">
              <h3>VIP</h3>
              <p>Accès prioritaire aux serveurs et cosmétiques exclusifs</p>
              <span class="price">9.99€</span>
              <a href="#" class="buy-button">Acheter</a>
            </div>
            <div class="shop-item">
              <h3>MVP</h3>
              <p>Tous les avantages VIP + commandes spéciales et plus</p>
              <span class="price">19.99€</span>
              <a href="#" class="buy-button">Acheter</a>
            </div>
          </div>
        </section>

        <section id="evenements" class="container">
          <h2>Événements à venir</h2>
          <div class="event-list">
            <div class="event-item">
              <h3>Tournoi Bed Wars</h3>
              <p>Date : 15 juillet 2024</p>
              <p>Prix : 1000€ de récompenses</p>
            </div>
            <div class="event-item">
              <h3>Chasse au trésor</h3>
              <p>Date : 1er août 2024</p>
              <p>Trouvez les trésors cachés dans notre monde spécial</p>
            </div>
          </div>
        </section>

        <section id="apropos" class="container">
          <h2>À propos de Mineria</h2>
          <p>Mineria est un serveur Minecraft de mini-jeux inspiré de Holycube Saison VI, offrant une variété de jeux passionnants pour tous les joueurs. Notre équipe de développeurs travaille constamment pour vous offrir la meilleure expérience de jeu possible.</p>
          <h3>Caractéristiques du serveur :</h3>
          <ul>
            <li>Plus de 20 mini-jeux uniques</li>
            <li>Serveurs haute performance</li>
            <li>Système anti-triche avancé</li>
            <li>Événements hebdomadaires</li>
            <li>Communauté active et accueillante</li>
          </ul>
        </section>

        <section id="contact" class="container">
          <h2>Contactez-nous</h2>
          <p>Rejoignez notre communauté sur Discord et suivez-nous sur les réseaux sociaux pour rester informé des dernières nouveautés !</p>
          <div class="social-links">
            <a href="#" class="social-icon"><FaDiscord /></a>
            <a href="#" class="social-icon"><FaTwitter /></a>
            <a href="#" class="social-icon"><FaYoutube /></a>
            <a href="#" class="social-icon"><FaTwitch /></a>
          </div>
        </section>
      </main>

      <footer>
        <div class="container">
          <p>&copy; 2024 Mineria. Tous droits réservés.</p>
          <ul class="footer-links">
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Règles du serveur</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;