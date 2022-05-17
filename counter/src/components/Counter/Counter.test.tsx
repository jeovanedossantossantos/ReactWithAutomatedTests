import {render, screen,} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {Counter} from '.'

describe('Counter Component', () => {
    // Teste 1
    test('deve iniciar o titulo com o valor 0', () => {
        render(<Counter/>);

        const counterTitle = screen.getByText("0")//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        // const counterTitleOne = screen.queryByText("0")//Procura o texto passado, ele retorna null
        // const counterTitleTwo = await screen.findByText("0")//Ele retorna uma promisse
        expect(counterTitle).toBeInTheDocument();
    });
    // Teste 2

    test('deve conter a classe counter__title no titulo', () => {
        render(<Counter/>);

        const counterTitle = screen.getByText("0")//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        // const counterTitleOne = screen.queryByText("0")//Procura o texto passado, ele retorna null
        // const counterTitleTwo = await screen.findByText("0")//Ele retorna uma promisse
        expect(counterTitle).toHaveClass("counter__title");
    })
    // Teste 3

    test('não deve iniciar o titulo com as classes counter__title--decrement', () => {
        render(<Counter/>);

        const counterTitle = screen.getByText("0")//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        // const counterTitleOne = screen.queryByText("0")//Procura o texto passado, ele retorna null
        // const counterTitleTwo = await screen.findByText("0")//Ele retorna uma promisse
        expect(counterTitle).not.toHaveClass("counter__title--increment");
        expect(counterTitle).not.toHaveClass("counter__title--decrement");
    });

 // Teste 4
    test('deve conter um botão incrementar', () => {
        render(<Counter/>);

        const buttonIncrementar = screen.getByRole("button",{name:/incrementar/});//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        
        expect(buttonIncrementar).toBeInTheDocument()
    })

    // Teste 5
    test('deve conter um botão incrementar e uma classe button--increment', () => {
        render(<Counter/>);

        const buttonIncrementar = screen.getByRole("button",{name:/incrementar/});//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        expect(buttonIncrementar).toHaveClass("button");
        expect(buttonIncrementar).toHaveClass("button--increment");
    })

    // Teste 6
    test('deve conter um botão decrementar', () => {
        render(<Counter/>);

        const buttonDencrementar = screen.getByRole("button",{name:/decrementar/});//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        
        expect(buttonDencrementar).toBeInTheDocument()
    })

    // Teste 7
    test('deve conter um botão decrementar e uma classe button--decrement', () => {
        render(<Counter/>);

        const buttonDencrementar = screen.getByRole("button",{name:/decrementar/});//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        expect(buttonDencrementar).toHaveClass("button");
        expect(buttonDencrementar).toHaveClass("button--decrement");
    })

     // Teste 8: Eventos 
     test('deve incrementar + 1 ao clicar no botão incrementar', () => {
        render(<Counter/>);
        
        
        const buttonIncrementar = screen.getByRole("button",{name:/incrementar/i});//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        expect(screen.queryByText("1")).toBeNull()
        userEvent.click(buttonIncrementar)
        expect(screen.getByText("1")).toBeInTheDocument();
    })

    // Teste 9: Eventos 
    test('deve incrementar - 1 ao clicar no botão decrementar', () => {
        render(<Counter/>);
        
        
        const buttonDecrementar = screen.getByRole("button",{name:/decrementar/i});//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        expect(screen.queryByText("-1")).toBeNull()
        userEvent.click(buttonDecrementar)
        expect(screen.getByText("-1")).toBeInTheDocument();
    })
    // Teste 10: Eventos 
    test('deve adicionar a classe counter__title--increment no titulo, quando o valor for maior que 0', () => {
        render(<Counter/>);
        
        
        const buttonIncrementar = screen.getByRole("button",{name:/incrementar/i});//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        expect(screen.queryByText("0")).not.toHaveClass("counter__title--increment")
        userEvent.click(buttonIncrementar)
        expect(screen.getByText("1")).toHaveClass("counter__title--increment")
    })

    // Teste 11: Eventos 
    test('deve adicionar a classe counter__title--decrement no titulo, quando o valor for menor que 0', () => {
        render(<Counter/>);
        
        
        const buttonDecrementar = screen.getByRole("button",{name:/decrementar/i});//Procura o texto passado, caso não encontre ele retona um erro e não deixa proseguir
        expect(screen.queryByText("0")).not.toHaveClass("counter__title--decrement")
        userEvent.click(buttonDecrementar)
        expect(screen.getByText("-1")).toHaveClass("counter__title--decrement")
    })
})