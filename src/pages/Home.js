import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import BookMarkBox from '../components/BookMarkBox';
import BookMarks from '../components/BookMarks';
import Categories from '../components/Categories';
import { HeaderName, } from '../styles/HomeStyled';

const Home = () => {
    const [status, setStatus] = useState(true);
    const [lists, setLists] = useState(null);

    useEffect(() => {
        const data1 = JSON.parse(localStorage.getItem("Categori"));
        setLists(data1)
    }, [status])

    return (
        <Container>
            <HeaderName>Bookmark Manager</HeaderName>
            <Categories status={status} setStatus={setStatus} />
            <BookMarks status={status} setStatus={setStatus} />

            {
                lists?.map((data, index) => <BookMarkBox key={index} serial={index} data={data} status={status} />)
            }

        </Container>
    );
};

export default Home;