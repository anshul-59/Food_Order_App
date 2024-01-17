import LogoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={LogoImg} alt="keep calm its just an image" />
        <h1>FOOD APP</h1>
      </div>
      <nav>
        <button>Cart []</button>
      </nav>
    </header>
  );
}
