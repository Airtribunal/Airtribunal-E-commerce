import React, { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Card from './Card';
import data from '../data';
import { nanoid } from 'nanoid';

const Products = (props) => {
    const { theme, handleAddToCart } = props

    const products = data.map((product) => {
        return (
            <AnimationOnScroll animateOnce delay={50} animateIn="animate__fadeInLeftBig">
                <Card
                key={nanoid()}
                id={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                addToCart={() => handleAddToCart(product)}
                />
            </AnimationOnScroll>
        )
    })

    return (
        <section id="products" className={theme ? "products-section dark" : "products-section"}>
            <h1 className="main-title">Our Products</h1>
            <div className="main-container">
                <div className="products">
                    {products}
                </div>
            </div>
        </section>
    );
}

export default Products;
