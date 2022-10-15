import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: ${(props) => props.BorderRadius || "10px"};
  margin: ${(props) => props.Margin || "20px 0px 0px 0px"};
  background: white;
  padding: ${(props) => props.Padding || "20px"};
  width: ${(props) => props.Width || "100%"};
  height: 150px;
overflow-y: auto;
  box-shadow: ${(props) => props.Shadow || "0px 4px 8px rgba(0, 0, 0, 0.16)"};
`;


export const HeaderName = styled.div`
  font-family: "Poppins";
  font-style: normal;
  color: ${(props) => props.Color || "#1B253F"};
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "20px"};
  text-align: ${(props) => props.TextAlign || "center"};
  padding: ${(props) => props.Padding || "10px 0px"};
`;

export const Input = styled.input`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #54d487;
  box-shadow: 0px 0px 6px #d5d5d5;
  border-radius: 4px;
  background: ${(props) => props.Background || "#FFFFFF"};
  margin: ${(props) => props.Margin || "8px 0px"};
  padding: ${(props) => props.Padding || "6px 8px"};
  color: ${(props) => props.Color || "#1B253F"};
  box-shadow: ${(props) => props.Shadow || "0px 0px 6px #d5d5d5"};
  &:focus {
    outline: none;
    border: 1px solid gray;
  }
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "gray"};
  }
  width: ${(props) => props.Width || "100%"};
  outline: none;
`;

export const Select = styled.select`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #54d487;
  box-shadow: 0px 0px 6px #d5d5d5;
  border-radius: 4px;
  background: ${(props) => props.Background || "#FFFFFF"};
  margin: ${(props) => props.Margin || "8px 0px"};
  padding: ${(props) => props.Padding || "6px 8px"};
  color: ${(props) => props.Color || "#1B253F"};
  box-shadow: ${(props) => props.Shadow || "0px 0px 6px #d5d5d5"};
  &:focus {
    outline: none;
    border: 1px solid gray;
  }
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "gray"};
  }
  width: ${(props) => props.Width || "100%"};
  outline: none;
`;


export const Button = styled.button`
  font-family: "Poppins";
  font-style: normal;
  border: none;
  color: ${(props) => props.Color || "white"};
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "13px"};
  padding: ${(props) => props.Padding || "8px 20px"};
  margin: ${(props) => props.Margin || "0px 5px"};
  border-radius: ${(props) => props.BorderRadius || "4px"};
  background: ${(props) => props.Background || "#006747"};
`;
export const DivContainer = styled.div`
  font-family: "Poppins";
  font-style: normal;
  border: none;
  color: ${(props) => props.Color || "white"};
  display: flex;
  justify-content: ${(props) => props.Align || "center"};;
  align-items: center;
  margin-bottom: 5px;
`;

export const PlainText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  color: ${(props) => props.Color || "#1B253F"};
  font-weight: ${(props) => props.FontWeight || "500"};
  font-size: ${(props) => props.FontSize || "16px"};
  text-align: ${(props) => props.TextAlign || "start"};
  padding: ${(props) => props.Padding || "5px 0px"};
`;


