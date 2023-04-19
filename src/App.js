/* import Componente1 from './Componente1' */
import Product from './Product';

const primaCard = {
  nome: "10€ Amazon",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f15566.jpg",
  prezzo: 5.40 + "€",
  costoFinale: 5,
};

const secondaCard = {
  nome: "30€ Amazon",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f15566.jpg",
  prezzo: 10.40 + "€",
  costoFinale: 15,
};

const terzaCard = {
  nome: "40€ Amazon",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f15566.jpg",
  prezzo: 15.40 + "€",
  costoFinale: 55,
};

function App() {

  const numeri = [1,2,3,4,5,6,7,8,9]
  console.log(Math.max(...numeri))

  return (

    <div className="App">

      <h2>La nostra prima card</h2>

      <section className='card-section'>

        {/* <Product //nel componente Products ho inserito variabile props 
          nome="dario" 
          zona="arancione"
        /> */}

        <Product {...primaCard}/>  

        <br></br>

        <Product {...secondaCard}/>   

        <br></br>

        <Product {...terzaCard}/>  

      </section>

      {/*<Componente1/>*/}  

    </div>
  ); 
}

export default App;
