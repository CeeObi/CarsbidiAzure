import { numberWithCommas } from '@/lib/numberWithComma';
import { Bid } from '@/types'
import { format } from 'date-fns';
import React from 'react'

type Props ={
    bid : Bid
}


function BidItem({bid}: Props) {
    
    function getBidInfo() {
        let bgColor = "";
        let text = ""
        switch (bid.bidStatus) {
            case "Accepted":
                bgColor = "bg-green-200";
                text = "Bid accepted"                
                break;
            case "AcceptedBelowReserve":
                bgColor = "bg-amber-200";
                text = "Reserve not met"                
                break;
            case "AcceptedBelowReserve":
                bgColor = "bg-red-200";
                text = "Bid was too low"                
                break;        
            default:
                bgColor = "bg-red-200";
                text = "Bid placed after auction finished" 
                break;
        }
        return {text, bgColor}
    }


  return (
    <div className={`border-gray-300 border-2 px-3 py-2 rounded-lg mb-2 flex justify-between items-center ${getBidInfo().bgColor} mx-2 lg:mx-0`}>
        <div className='flex flex-col'>
            <span className='capitalize'>Bidder: {bid.bidder}</span>
            <span className='text-gray-700 text-sm'>Time: {format( new Date(bid.bidTime), "dd MMM yyyy h:mm a")}</span>
        </div>
        <div className='flex flex-col text-right'>
            <div className='text-xl font-semibold'>{numberWithCommas(bid.amount)}</div>
            <div className='flex flex-row items-center'>
                <span>{getBidInfo().text}</span>
            </div>
        </div>
    </div>
  )
}

export default BidItem