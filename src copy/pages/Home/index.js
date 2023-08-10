import React from "react";
import {
  StyledContainer,
  StyledBackground,
  StyledContent,
  StyledH1,
  StyledP,
} from "./Home";

function Home() {
  return (
    <StyledContainer>
      <StyledBackground />

      <StyledContent>
        <StyledH1>
          Bem-vindo ao <span> Armazém Di Parma</span>!
        </StyledH1>
        <StyledP>
          Somos o seu destino para os melhores sabores da Itália aqui na Zona
          Norte de Porto Alegre. No Armazém Di Parma, levamos até você uma
          seleção autêntica de ingredientes, produtos e delícias diretamente
          inspirados pela culinária italiana.
        </StyledP>

        <StyledP>
          Nossa paixão é proporcionar uma{" "}
          <b>experiência gastronômica inesquecível</b>. Cada produto é escolhido
          com cuidado para garantir qualidade excepcional e sabores verdadeiros,
          como se você estivesse caminhando pelas ruas de Parma.
        </StyledP>

        <StyledP>
          Explore o nosso cardápio e descubra uma{" "}
          <b>variedade de produtos autênticos</b>. De queijos e embutidos a
          massas frescas e azeites de oliva premium, temos tudo o que você
          precisa para criar pratos italianos tradicionais ou experimentar novas
          combinações deliciosas.
        </StyledP>

        <StyledP>
          Localizado na Rua Adão Baino, 329, Porto Alegre/RS, estamos prontos
          para atender às suas necessidades culinárias. Com a nossa dedicação à
          qualidade e ao sabor, você pode ter certeza de que encontrará os
          ingredientes perfeitos para suas criações na cozinha.
        </StyledP>

        <StyledP>
          Visite o nosso espaço físico ou entre em contato conosco para
          descobrir nossas ofertas, tirar dúvidas e encomendar os seus produtos
          favoritos. Prepare-se para embarcar em uma jornada de autenticidade e
          sabor italiano no Armazém Di Parma.
        </StyledP>

        <StyledP>
          <span>
            <b>Armazém Di Parma</b>
          </span>{" "}
          - O sabor da Itália ao seu alcance!
        </StyledP>
      </StyledContent>
    </StyledContainer>
  );
}

export default Home;
