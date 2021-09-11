import React, { useEffect, useState } from 'react'
import { BiSort, BiSearch } from "react-icons/bi"
import { FiFilter, FiHome } from "react-icons/fi"
import { IoIosArrowDown, IoMdAdd } from "react-icons/io"
import { TiShoppingCart } from "react-icons/ti"
import { HiDotsHorizontal, HiOutlineArrowLeft } from "react-icons/hi"

import items from '../api/items'
import ItemCard from "../components/ItemCard";
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Features = ({selectedItem, setSelectedItem, selectedItemsId, setSelectedItemsId}) => {

    const [itemData, setItemData] = useState(items)
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = (elem) => {
        // setSelectedItem(selectedItem && 
        //     selectedItem.id === elem.id ? null : elem
        //     )
        if(selectedItem.length && selectedItemsId.includes(elem.id)){
            var newItemArr = selectedItem.filter(item => item.id !== elem.id)
            var newIdArr = selectedItemsId.filter(item => item !== elem.id)
            setSelectedItem(newItemArr)
            setSelectedItemsId(newIdArr)
            setIsVisible(newItemArr.length ? true : false)
        } else {
            selectedItem.push(elem)
            selectedItemsId.push(elem.id)
            setIsVisible(true)
        }
        console.log(selectedItem)
        console.log(selectedItemsId)
    }

    return (
        <div>
            <div className="header">
                <h1 className="bluish-text fbold">Featured</h1>
                <div className="d-flex df-acenter df-sbetween">
                    <span>{itemData && itemData.length} items listed</span>
                    <div className="d-flex df-acenter df-sbetween">
                        <div className="d-flex df-acenter df-sbetween icon-div">
                            <BiSort />
                            <p>Sort</p>
                        </div>
                        <div className="d-flex df-acenter df-sbetween icon-div">
                            <FiFilter />
                            <p>Filter</p>
                        </div>
                        
                        {/* <IoIosArrowDown />

                        
                        <IoMdAdd /> */}
                    </div>
                </div>
                

            </div>
            <div className="dflex-column df-sbetween dflex-wrap feature">
                    {
                        itemData && 
                            itemData
                                .map((elem) => <ItemCard 
                                    key={elem.id}
                                    onClick={
                                        () => handleClick(elem)
                                    } 
                                    data={elem} 
                                />)
                    }
                </div>


                <Link to="/checkout" className={isVisible ? "visible" : "invisible"} >
                    <Button title="Buy Now" />
                </Link>
                <div className="d-flex df-acenter df-sbetween footer">
                    <FiHome />
                    <BiSearch />
                    <TiShoppingCart />
                    <HiDotsHorizontal />
                </div>
        </div>
    )
}

export default Features
