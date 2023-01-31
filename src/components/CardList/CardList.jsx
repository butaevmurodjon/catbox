import { useState, useCallback } from 'react';
import Card from "../Card/Card";
import { CatList } from "./Data"
import "../Card/Card.scss"


const CardList = () => {
    const [list, setList] = useState(CatList)

    const selectHandler = useCallback((id, canFeed) => {
        if (canFeed) {
            const newList = list.map(el => {
                if (id === el.id) {
                    return { ...el, selected: !el.selected }
                }
                return el
            })
            setList(newList)
        }
    }, [list])


    return (
        <div className="cart">
            <div className="base-container">
                <h1 className="cart__maintitle">Ты сегодня покормил кота ?
                </h1>
                <div className="cart__items">
                    {list.map(item => (
                        <Card cat={item} key={item.id} selectHandler={selectHandler} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardList;