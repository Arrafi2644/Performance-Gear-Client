import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CategoryProducts from './CategoryProducts';
import '../components/MyStyle.css'

const SportsCategories = () => {
    const [allEquipments, setAllEquipments] = useState([])
    const [categories, setCategories] = useState([])
    const [showProducts, setShowProducts] = useState([])
    const [isActive, setIsActive] = useState(false)

    useEffect(()=>{
        fetch("https://performance-gear-server.vercel.app/equipments")
        .then(res => res.json())
        .then(data => setAllEquipments(data))
    },[])

    // console.log(data);

    allEquipments.map(category => {
        const categoryItem = category.category.toLowerCase();

        // console.log(categoryItem);
        if(!categories.includes(categoryItem.toLowerCase())){
            const newCategoryItem = categoryItem;
            // console.log(newCategoryItem);
            setCategories([...categories, newCategoryItem])
        }else{
            // console.log(`${categoryItem} is already included`);
        }
         
    })
    console.log(categories);
    console.log(showProducts);

    const handleShowCategoryProducts = (category) => {
        console.log(category);
        setIsActive(true)

        fetch(`https://performance-gear-server.vercel.app/equipments/category/${category}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setShowProducts(data)
        })
    }

    const firstCategory = categories[0]
    console.log(firstCategory);
 

    console.log(showProducts)
    // console.log(products)
    // if(showProducts.length < 1) {
       
    // }

     useEffect(()=>{
        fetch(`https://performance-gear-server.vercel.app/equipments/category/${firstCategory}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setShowProducts(data)
        })
     }, [firstCategory])

     

    return (
        <div className='my-16'>
            <h2 className='text-3xl text-center font-bold mb-2'>Shop by Sports Category</h2>
            <p className='w-full md:w-4/5 mx-auto text-center mb-8'>Explore equipment and accessories tailored to your favorite sports. Find everything you need for peak performance in one place.</p>
            {/* Sports category {categories.length} */}
            <div className='flex flex-wrap gap-4 justify-center'>
            {
                categories.map(category =>  <button key={categories.indexOf(category)} onClick={()=>handleShowCategoryProducts(category)} className={`btn bg-accent`}>{category[0].toUpperCase() + category.slice(1)}</button>)
            }
            </div>
            <div>
                {/* <Outlet></Outlet> */}
                <CategoryProducts showProducts={showProducts} setShowProducts={setShowProducts} categories={categories}></CategoryProducts>
            </div>
        </div>
    );
};

export default SportsCategories;