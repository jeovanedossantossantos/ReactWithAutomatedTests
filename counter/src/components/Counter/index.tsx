import React, { useState } from 'react';
import { Container } from './style';


export const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0);

    function getModifier() {
      if (counter > 0) return "counter__title--increment";
      if (counter < 0) return "counter__title--decrement";
      return "";
    }
    return (

        <Container>
            <div className="counter">
            <h1 className={`counter__title ${getModifier()}`}>{counter}</h1>
            <section className="buttons">
                <button
                    onClick={() => setCounter(counter + 1)}
                    className="button button--increment"
                >
                    incrementar
                </button>
                <button
                    onClick={() => setCounter(counter - 1)}
                    className="button button--decrement"
                >
                    decrementar
                </button>
            </section>
        </div>
        </Container>
    )
}