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
                "^.+\\.(t|j)sx?$":[
                "@swc/jest",
                {
                    jsc:{
                    parser:{
                        syntax:"typescript",
                        tsx:true,
                        decorate:true,
                    },
                    keepClassName:true,
                    transform: {
                        legacyDecorator:true,
                        decoratorMetadata:true,
                        react:{
                        runtime:"automatic"
                        },
                        
                    },
                    },
                    module:{
                    type:"es6",
                    noInterop:false,
                    }
                },
                ],
            },


    Instalando bibliotecas do testing-library

            yarn add @testing-library/react @testing-library/jest-dom @testing-library/user-event -D