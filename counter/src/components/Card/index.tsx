import React from "react";
import { Container, Text } from "./style";

interface DataBooksProps {
    authors: Array<string>,
    imageUrl: string,
    pageCount: number,
    published: number,
    publisher: string,
    title: string,
}
const Card = ({
    authors,
    imageUrl,
    pageCount,
    published,
    publisher,
    title,
}: DataBooksProps) => {

    
    return (
        <Container>
            <div>
                <img src={imageUrl} alt="Imagem"
                  
                />
            </div>
            <Text>
                <h2>{title}</h2>
                <h3>{authors[0]}</h3>
                
                <div>
                    <p>{pageCount}</p>
                    <p>{publisher}</p>
                    <p>Publicado em {published}</p>
                </div>
                
            </Text>
        </Container>
    )
}

export default Card