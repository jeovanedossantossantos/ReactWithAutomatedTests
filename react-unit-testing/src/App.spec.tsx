import {render,screen} from "@testing-library/react"
import App from "./App"

test("sum",()=>{
    render(<App/>)
    expect(screen.getByText('Hello World')).toBeTruthy()
})