import styled from "styled-components"

export const Container=styled.div`
   /* position: absolute; */
    width: 100%;
    max-width:277px;
    min-width:250px;
    height:150px;
    
    margin:10px;
    padding:10px;

    background: #FFFFFF;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
   
    
    display:flex;
    
    
    
    img{ 
        margin:auto;
        width: 81;
        height: 120px;
    }
    h2{ 
        font-family: 'Heebo';
        font-style: normal;
        
        font-size: 14px;
      
        /* identical to box height, or 143% */


        color: #000000;
    }
    h3{
        font-family: 'Heebo';
        font-style: normal;
        font-size: 12px;
       
        /* identical to box height, or 167% */


        color: #AB2680;
    }
    p{

        
        width: 124px;
        /* height: 60px; */
       
        

        font-family: 'Heebo';
        font-style: normal;
      
        font-size: 12px;
     


        color: #999999;
    }
`

export const Text =styled.div`
    margin: 16px;
    div{
        margin-top:17px;
       
    }

`
