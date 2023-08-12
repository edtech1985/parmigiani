import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  StyledDevelopedBy,
  StyledFooter,
  StyledIconItem,
  StyledIconList,
  StyledRightsReserved,
} from "./Footer";

function Footer() {
  return (
    <StyledFooter>
      <StyledIconList>
        <StyledIconItem color="green">
          <a
            href="https://www.instagram.com/casaparmigiani/"
            target="_blank"
            rel="noreferrer"
            alt="Instagram Parmigiani"
          >
            <FaInstagram />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://www.facebook.com/Armazemdiparma/"
            target="_blank"
            rel="noreferrer"
            alt="Facebook Armazém"
            aria-label="Facebook Armazém"
          >
            <FaFacebook />
          </a>
        </StyledIconItem>

        <StyledIconItem color="red">
          <a
            href="https://api.whatsapp.com/send?phone=555191350280"
            target="_blank"
            rel="noreferrer"
            alt="WhatsApp Parmigiani"
            aria-label="WhatsApp Parmigiani"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>
      </StyledIconList>
      <StyledRightsReserved>
        © 2023 Direitos Reservados | <span>Parmigiani</span>
      </StyledRightsReserved>
      <StyledDevelopedBy>
        Desenvolvido por{" "}
        <a
          href="https://edtech1985.com.br/"
          target="_blank"
          rel="noreferrer"
          alt="Desenvolvedor Web edtech1985"
          aria-label="Desenvolvedor Web edtech1985"
        >
          <span>edtech1985</span>
        </a>
      </StyledDevelopedBy>
    </StyledFooter>
  );
}

export default Footer;
