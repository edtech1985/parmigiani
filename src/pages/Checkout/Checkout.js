import styled from "styled-components";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export const CheckoutContainer = styled.div`
  max-width: 95vw;
  margin: 0 auto;
  align-items: center;

  @media only screen and (max-width: 600px) {
    max-width: 95vw;
    margin: 0.5rem;
    height: 76vh;
  }
`;

export const CheckoutTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.25rem;

  @media only screen and (max-width: 600px) {
    margin-top: 0.1rem;
  }
`;

export const CheckoutTableHead = styled.thead`
  background-color: lightgray;
`;

export const CheckoutTableRow = styled.tr`
  border-bottom: 0.15rem solid lightgray;
`;

export const CheckoutTableData = styled.td`
  padding: 0.5rem;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 0.25rem;
    font-size: 0.75rem;
    width: 10vw;
    max-width: 10px;
  }
`;

export const CheckoutTableDataQt = styled.td`
  padding: 0.5rem;
  text-align: right;

  @media only screen and (max-width: 600px) {
    padding: 0.25rem;
    font-size: 0.75rem;
    width: 10vw;
    max-width: 10px;
  }
`;

export const CheckoutTableDataName = styled(CheckoutTableData)`
  width: 20vw;
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: 0.6rem;
    width: 30vw;
    max-width: 25px;
  }
`;

export const CheckoutTableDataPrice = styled(CheckoutTableData)`
  width: 10vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
    width: 10vw;
    max-width: 10px;
  }
`;

export const CheckoutTableDataQuantity = styled(CheckoutTableData)`
  width: 10vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
    width: 5rem;
  }
`;

export const CheckoutSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0.75rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
    margin: 0 5px;
  }
`;

export const CheckoutSummaryText = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const CheckoutSummaryValue = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
  }
`;

export const CheckoutButton = styled.button`
  background-color: var(--green);
  border: none;
  border-radius: 15px;
  color: white;
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: var(--dark);
    border: 0.25rem solid var(--green);
  }
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-bottom: 20px;
`;

export const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 10vw;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const MinusButton = styled(FaMinus)`
  background-color: var(--dark);
  color: var(--white);
  padding: 0.75rem 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  width: 2rem;
  height: 0.5rem;
  border-radius: 1rem;
  border: 2px solid var(--red);
  &:hover {
    background-color: var(--red);
    color: var(--white);
  }

  @media only screen and (max-width: 600px) {
    padding: 0.25rem;
    font-size: 1rem;
    width: 4rem;
  }
`;

export const PlusButton = styled(FaPlus)`
  background-color: var(--dark);
  color: var(--white);
  padding: 0.75rem 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  width: 2rem;
  height: 0.5rem;
  border-radius: 1rem;
  border: 2px solid var(--green);

  &:hover {
    background-color: var(--green);
    color: var(--white);
  }

  @media only screen and (max-width: 600px) {
    padding: 0.25rem;
    font-size: 1rem;
    width: 4rem;
  }
`;

export const CheckoutTableDataActions = styled(CheckoutTableData)`
  width: 5vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
    width: 5px;
  }
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: var(--red);
  font-size: 1.25rem;
  padding: 0;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0;
  }
`;
