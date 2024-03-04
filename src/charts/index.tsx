import React from "react";
import BetPlaced from "./betPlaced";
import BetType from "./betType";
import CategoryWiseBetPlaced from "./categoryBetPlaced";
import CountryWiseUserRatio from "./countryUserRatio";
import Currency from "./currency";
import CurrencyDepositWithdraw from "./currencyDepositWithdraw";
import Statistics from "./statistics";

const Charts = () => {
  return (
    <div className="bg-[#eaedf7] container p-2">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <Statistics />
          <CurrencyDepositWithdraw />
          <CountryWiseUserRatio />
        </div>
        <div className="col-span-2">
          <Currency />
          <BetType />
          <BetPlaced />
          <CategoryWiseBetPlaced />
        </div>
      </div>
    </div>
  );
};

export default Charts;
