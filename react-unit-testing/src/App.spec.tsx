import { render, screen,waitFor} from "@testing-library/react"
import userEvent  from "@testing-library/user-event"
import '@testing-library/jest-dom'
import App from "./App"


describe("App teste", () => {
    it("deve aparecer Hello World", () => {
        render(<App />)
        // const teste = screen.getByText('Hello World')
        const teste = screen.getByText('Hello World')
        expect(teste).toBeInTheDocument()

    })
// OU
    it("deve ter a class teste", () => {
        render(<App />)
        // const teste = screen.getByText('Hello World')
        const teste = screen.getByText('Hello World')

        expect(teste).toHaveClass("teste")
    })

    it("should render list items", () => {
        render(<App />)
        // const teste = screen.getByText('Hello World')
       
        expect(screen.getByText('Jeovane')).toBeInTheDocument()
        expect(screen.getByText('andersonr')).toBeInTheDocument()
        expect(screen.getByText('Maluco')).toBeInTheDocument()
    })

    it("should be able to add new item to the list", async () => {
        render(<App />)
        const inputElement = screen.getByPlaceholderText("Novo item")
       
        // const addButton = screen.getByText('Adicionar')
        await userEvent.type(inputElement,"Novo")
         await userEvent.click(screen.getByText('Adicionar'));
         const teste = await screen.findByText('Novo')
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug()

        await waitFor(()=>{
            expect(teste).toBeInTheDocument();
        })
       

        
    })

    
})