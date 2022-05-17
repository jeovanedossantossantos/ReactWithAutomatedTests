import styled from "styled-components"

const Container = styled.div`
.counter {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.counter__title {
  font-size: 95px;
}

.counter__title--increment {
  color: var(--color-button-increment);
}
.counter__title--decrement {
  color: var(--color-button-decrement);
}

.buttons {
  display: flex;
}

.button {
  width: 180px;
  height: 45px;

  border: none;
  border-radius: 6px;
  background-color: var(--color-button-default);
  font-weight: bold;
  text-transform: uppercase;

  margin: 5px;
}

.button:hover {
  background-color: var(--color-button-default-hover);
}

.button--increment {
  background-color: var(--color-button-increment);
  color: var(--color-white);
  outline-color: var(--color-button-increment-outline);
  cursor: pointer;
}
.button--increment:hover {
  background-color: var(--color-button-increment-hover);
}

.button--decrement {
  background-color: var(--color-button-decrement);
  color: var(--color-white);
  outline-color: var(--color-button-decrement-outline);
  cursor: pointer;
}
.button--decrement:hover {
  background-color: var(--color-button-decrement-hover);
}

`

export  {Container}