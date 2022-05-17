# Testes unitarios com o jest

Configurações iniciais:

    Instalando: 


            yarn add jest -D
            yarn add ts-node -D
            yarn add  @types/jest -D
            yarn add @swc/core @swc/jest -D


    Iniciando:


            yarn jest --init
            


    No arquivo jest.config.ts onde estiver "transform: undefined" substitua por:



             transform: {
                '.+\\.tsx$':"ts-jest"
            }


    Instalando bibliotecas do testing-library

            yarn add @testing-library/react @testing-library/jest-dom @testing-library/user-event -D

            
  },