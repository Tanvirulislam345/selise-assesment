import React, { useEffect, useState } from 'react';
import { alert } from '../hooks/alerts';
import { Button, DivContainer, Input, Select } from '../styles/HomeStyled';
import FormModals from './FormModals';


const BookMarks = ({ status, setStatus }) => {
    const [add, setAdd] = useState(false);
    const [datas, setData] = useState(null);
    const [bookmark, setBookmark] = useState({ Title: "", URL: "", Categori: "" });
    let list;
    let newCategories;

    const handleChange = (e) => {
        setBookmark({
            ...bookmark,
            [e.target.name]: e.target.value
        })
    }

    const saveData = (list, newCategories) => {
        localStorage.setItem("Categori", JSON.stringify(newCategories));
        localStorage.setItem("bookMarkList", JSON.stringify(list));
    };
    const saveBokMark = (list) => {
        localStorage.setItem("bookMarkList", JSON.stringify(list));
    };

    const data2 = JSON.parse(localStorage.getItem("Categori"));
    const data = JSON.parse(localStorage.getItem("bookMarkList"));


    const handleSubmit = () => {

        if (bookmark?.Title && bookmark?.URL && bookmark?.Categori) {

            if (data === null) {
                list = [
                    bookmark
                ]
            } else {
                list = [
                    ...data,
                    bookmark
                ]
            }

            if (data2 === null) {
                newCategories = [
                    bookmark?.Categori
                ]
            } else {
                newCategories = [
                    ...data2,
                    bookmark?.Categori
                ]
            }
            if (add) {
                saveData(list, newCategories);
            } else {
                saveBokMark(list)
            }

            setBookmark(null);
            setStatus(!status)
            alert("success", "successfully added a Bookmark")

        } else {
            alert("warning", "Please fillup all input fields")
        }


    }


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Categori"));
        setData(data)
    }, [status])
    return (
        <FormModals name="Add BookMark" handleSubmit={handleSubmit}>
            <Input
                placeholder='Category name'
                name="Title"
                maxLength="30"
                onChange={handleChange}
            />
            <Input
                placeholder='Category name'
                name="URL"
                type="url"
                required
                onChange={handleChange}
            />
            <DivContainer>
                <Select
                    placeholder='Category name'
                    name="Categori"
                    onChange={handleChange}
                    disabled={add}
                >
                    {
                        datas === null ? <option vlaue="value1">Please add Category</option> : datas.map((data, index) => <option value={data} key={index}>{data}</option>)
                    }
                </Select>
                <Button onClick={() => setAdd(!add)}>+</Button>
            </DivContainer>
            {add && <Input
                placeholder='Category name'
                name="Categori"
                type="text"
                required
                onChange={handleChange}
            />}
        </FormModals>
    );
};

export default BookMarks;