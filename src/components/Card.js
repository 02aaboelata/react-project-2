import React from "react"

export default function Card(props) {
    let badgeText
    let item=props.item
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }

    console.log(item)

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./images/${item.coverImg}`} className="katie" /> 
            <div className="rating">
                <img src="./star.png" className="star"/>
                <p className="stats"><span>{item.stats.rating}</span>({item.stats.reviewCount}) • {item.location}</p>
            </div>
            <p className="description">{item.title}</p>
            <p className="price"><span>From ${item.price}</span> / person</p>
        </div>
    )
}