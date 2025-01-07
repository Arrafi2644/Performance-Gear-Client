
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CategoryProducts from './CategoryProducts';
import '../components/MyStyle.css'

const SportsCategories = () => {
    const [allEquipments, setAllEquipments] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showProducts, setShowProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");  // Track active category
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/allEquipments")
            .then(res => res.json())
            .then(data => setAllEquipments(data))
    }, []);

    // Extract categories from all equipment data
    useEffect(() => {
        const uniqueCategories = allEquipments.reduce((acc, category) => {
            const categoryItem = category.category.toLowerCase();
            if (!acc.includes(categoryItem)) {
                acc.push(categoryItem);
            }
            return acc;
        }, []);
        setCategories(uniqueCategories);
    }, [allEquipments]);

    // Fetch products based on the selected category
    const handleShowCategoryProducts = (category) => {
        setActiveCategory(category); // Set the active category when clicked

        fetch(`http://localhost:5000/allEquipments/category/${category}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setShowProducts(data);
                // setLoading(false)
            });
    };

    // Fetch products for the first category initially
    useEffect(() => {
        if (categories.length > 0) {
            const firstCategory = categories[0];
            handleShowCategoryProducts(firstCategory);
        }
    }, [categories]);

    return (
        <div className='my-16'>
            <h2 className='text-3xl text-center font-bold mb-2'>Shop by Sports Category</h2>
            <p className='w-full md:w-4/5 mx-auto text-center mb-8'>
                Explore equipment and accessories tailored to your favorite sports. Find everything you need for peak performance in one place.
            </p>

            {/* Sports category buttons */}
            <div className='flex flex-wrap gap-4 justify-center'>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleShowCategoryProducts(category)}
                        className={`btn ${activeCategory === category ? 'bg-primary' : 'bg-accent'}`} // Apply red for active category
                    >
                        {category[0].toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div>
                <CategoryProducts showProducts={showProducts} setShowProducts={setShowProducts} categories={categories} />
            </div>
        </div>
    );
};

export default SportsCategories;
