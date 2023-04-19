import React from "react";

const Componente1 = () => {

    return (

        <section>
            <Saluto/>
        </section>
        

    );
};

const Persona = () => {

    return <h2>Ciao sono Gianluca</h2>

}

const Messaggio = () => <h4>Sono un messaggio</h4>

const Saluto = () => {

    return (

        <>
            <Persona/>
            <Messaggio/>
        </>

    )

}
export default Componente1


/* 
quello che stiamo facendo in realtà è


const Componente1 = () => {

    return React.createElement(
        "div", 
        {props}, 
        React.createElement("h1", {}, "Ciao")
        );
};

export default Componente1
*/

