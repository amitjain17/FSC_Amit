import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from './menuComponents.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './HomeComponents.js';
import About from './aboutComponents.js';
import Contact from './contactComponent.js';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import DishDetails from './dishDetail.js';
import { Routes, Navigate, Route } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { addComment } from '../redux/ActionCreators';




function Main() {
    // const [data, setData] = useState({ });


    // const DishId = (dishId) => {
    //     setData({ ...data, selectedDish: dishId })
    // }
    const data = useSelector((state) => state);

    const DishWithId = () => {
        const { id } = useParams();
        let match = id;
        return (
            <DishDetails dish={data.dishes.filter((dish) => dish.id === parseInt(match, 10))[0]}
                comments={data.comments.filter((comment) => comment.dishId === parseInt(match, 10))} />
        );
    };

    const Home2 = () => {
        return (<Home dish={data.dishes.filter((dish) => dish.featured)[0]} promotion={data.promotions.filter((promo) => promo.featured)[0]} leader={data.leaders.filter((leader) => leader.featured)[0]} />);
    }

    const mapDispatchToProps = dispatch => ({
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
    });


    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/home' element={<Home2 />} />
                <Route exact path='/menu' element={<Menu dishes={data} />} />
                <Route path='/menu/:id' element={<DishWithId />} />
                <Route exact path='/contactus' element={<Contact />} />
                <Route path='/aboutus' element={<About leaders={data.leaders} />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
            {/* <Header /> */}
            {/* <Menu dishes={data.dishes} onClick={(dishId) => DishId(dishId)} />
            <DishDetails dish={data.dishes.filter((dish) => dish.id === data.selectedDish)[0]} /> */}
            {/* <Footer /> */}
        </div>
    );
}

export default Main;
