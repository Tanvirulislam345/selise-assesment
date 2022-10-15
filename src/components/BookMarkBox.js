import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Button, CardContainer, DivContainer, HeaderName, PlainText } from '../styles/HomeStyled';

const BookMarkBox = ({ serial, data, status }) => {
    const [lists, setLists] = useState(null);

    const [show, setShow] = useState(false)
    const [showData, setShowData] = useState(null)

    useEffect(() => {
        const data2 = JSON.parse(localStorage.getItem("bookMarkList"));
        const value = data2?.filter(result => result.Categori === data)
        setLists(value);

    }, [data, status])
    return (
        <Row xs={2}>
            <Col>
                <HeaderName TextAlign="start" Padding="0px">{serial + 1}. {data}</HeaderName>
                {lists?.length > 0 && <CardContainer>
                    {
                        lists?.map((list, index) => <DivContainer key={index} Align="space-between">
                            <a href={list.URL} rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}>{list.Title}</a>
                            <Button Background="#E88974" onClick={() => {
                                setShowData(list);
                                setShow(true)
                            }}>Detais</Button>
                        </DivContainer>)
                    }

                </CardContainer>}
            </Col>
            {show && showData !== null && <Col>
                <HeaderName></HeaderName>
                <CardContainer>
                    <PlainText>Title : {showData.Title}</PlainText>
                    <PlainText>URL : {showData.URL}</PlainText>
                    <PlainText>Category : {showData.Categori}</PlainText>
                    <div style={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                        <Button Background="red" onClick={() => setShow(false)}>Close</Button>
                    </div>
                </CardContainer>
            </Col>}
        </Row>
    );
};

export default BookMarkBox;