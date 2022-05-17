import { render, screen,} from "@testing-library/react"
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
    test("deve ter a class teste", () => {
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

    it("should be able to add new item to the list", () => {
        render(<App />)

        const addButton = screen.getByRole("button",{name:/Adicionar/})
        userEvent.click(addButton);
        expect(screen.getByText('Novo')).toBeInTheDocument();

        
    })

    
})