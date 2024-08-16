//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ name, color }) {
  return (
    <div className="Card">
      <h2>Hola {name}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div style={{ backgroundColor: color, color: "#fff" }}>
        {color}
      </div>
    </div>
  );
}

export default Card;
