import React, { useState } from 'react';
import { alert } from '../hooks/alerts';
import { Input } from '../styles/HomeStyled';
import FormModals from './FormModals';

const Categories = ({ status, setStatus }) => {
    let newCategories
    const [categori, setCategori] = useState(null);
    const handleChange = (e) => {
        setCategori(e.target.value)
    }

    const saveCategori = (data) => {

        localStorage.setItem("Categori", JSON.stringify(data));
    };
    const data = JSON.parse(localStorage.getItem("Categori"));
    const handleSubmit = () => {

        if (data === null) {
            newCategories = [
                categori
            ]
        } else {
            newCategories = [
                ...data,
                categori
            ]
        }
        if (categori !== null) {
            saveCategori(newCategories);
            setCategori(null)
            setStatus(!status)
            alert("success", "successfully added a Category")
        }

    }


    return (
        <FormModals name="Create Category" handleSubmit={handleSubmit}>
            <Input
                placeholder='Category name'
                type="text"
                name="category"
                onChange={handleChange}
            />
        </FormModals>
    );
};

export default Categories;