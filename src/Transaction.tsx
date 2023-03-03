
import React, { Fragment } from "react";
import OrderStat from "./OrderStat";
import data from "./data.json";
import "./Orderstats.scss";
import "./WidgetOrderStat.scss"
interface OrderStatData {
  label: string;
  value: string;
  color: string;
  date: string;
  transaction: string;
  imageUrl: string;

}

const OrderStatCard: React.FC<OrderStatData> = ({ label, value, color, imageUrl, date, transaction }) => {
  const iconStyle = {
    color: color
  };

  return (
    <Fragment>
     
    
    <div className="order-stat-card">
      <div className="order-stat-card__image">
        <img src={imageUrl} alt="Image"  />
      </div>

      <div className="order-stat-card__right-column">
      
        <div className="order-stat-card__label">{label}</div>
        <div className="order-stat-card__date">{date}</div>
      </div>

      <div className=" order-stat-card__left-column">
      <div className="order-stat-card__value" style={{ color: color }}>
        {value}
      </div>

      <div className="order-stat-card__transaction">{transaction}</div>
      </div>
    </div>
    </Fragment>
  );
};



    



const WidgetOrderStats: React.FC = () => {
  const orderStats: OrderStatData[] = data.orderStats;

  return (
    <div className="widget-order-stats">
       <div className="order-stat-header">
        <div className="order-stat-header__left-column">
          <h2>Last Transactions</h2>
        </div>
        <div className="order-stat-header__right-column">
          <h2></h2>
        </div>
      </div>
      {orderStats.map((orderStat, index) => (
        <div key={index} className="order-stat-card-container">
          <OrderStatCard {...orderStat} />
        </div>
      ))}
    </div>
  );
};

export default WidgetOrderStats;
