import styled from "styled-components";

export const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  min-width: 18.75rem;
  height: 13.125rem;
  left: 0px;
  top: 0px;
  border: solid blue 1px;
  
  border-radius: 0.75rem;
  margin: 1.25rem 0.625rem;
`;

export const ImageContainer = styled.div`
    border: solid blue 1px;
`

export const ImgPokemon = styled.img`
  max-width: 9.375rem;
  max-height: 9.375rem;
  /* position: absolute;
  left: 60%;
  bottom: 45%; */
`;
export const CardButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.625rem;
  margin-top: 15%;
`;

export const ButtonCapture = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.625rem;
  width: 10rem;
  height: 2.375rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  margin-right: 0.625rem;
`;

export const ButtonDetail = styled.button`
  width: 4.625rem;
  height: 1.5rem;
  /* background-color: transparent; */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height:1.5rem; 
  flex-grow: 0;
  text-decoration-line: underline;
  border: none;
  cursor: pointer;
  /* color: #ffffff; */
`;

