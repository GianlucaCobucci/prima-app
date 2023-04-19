import React from 'react'


const Product = (props) => { /* props sono parametri dei componenti */
    
    const {img, nome, prezzo, costoFinale} = props /* destrutturo questi elementi e gli dico che sono props, così non devo mettere props.prezzo ecc in ogni riga */
    /* questo però possiamo farlo anche mettendo le props direttamente come parametro della fuzione  */
    /* const Product = ({img, nome, prezzo, costoFinale}) => { */
    
    return (

    <article>

        <div className='card'>

            <img 
                src={img} 
                alt={`${nome}`} /* uguale a alt={alt} */
            />

            <h6>{nome}</h6>

            <p>{prezzo}</p> {/* due graffe aperte e chiuse perché prima gli dico che voglio usare jsx, poi che vogio un oggetto */}
            
            <p>bamby000</p>

        </div>

        <p className='card-time'>RIAPRE PRESTO</p>
            
        <button> {costoFinale}</button>

        <hr/>

    </article>

  )

}

export default Product