

function Menu() {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="#inicio"><img src="/src/images/UP_C0DE.png" alt="Logo" /></a>
        </div>
        <nav>
          <ul>
            <li><a href="#">Diseños</a></li>
            <li><a href="#">Soporte</a></li>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Inicia Sesion</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <video autoPlay muted loop id="video-background">
          <source src="/src/images/Up_Code.actualizadomp4.mp4" type="video/mp4" />
          Tu navegador no admite el elemento video.
        </video>
      </main>
    </div>
  );
}

export default Menu;
