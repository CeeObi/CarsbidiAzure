import CountdownTimer from "./CountdownTimer"
import CarImage from "./CarImage"
import { Auction } from "@/types"
import Link from "next/link"
import CurrentBid from "./CurrentBid"



type Props = {
  auction: Auction,
}


function AuctionCard({auction}:Props) {
  return (
    <Link href={`auctions/details/${auction.id}`} className="group">        
        <div className="w-full bg-gray-200 overflow-hidden rounded-lg aspect-w-16 aspect-h-10">
          <div>
          <CarImage imgUrl={auction.imageUrl}/>
            <div className="absolute bottom-2 left-2">
              <CountdownTimer auctionEnd={auction.auctionEnd} />
            </div>        
            <div className="absolute top-2 right-2">
              <CurrentBid amount={auction.currentHighBid} reservePrice={auction.reservePrice} />
            </div>        
          </div>
      </div>
      <div className="flex justify-between items-center mt-2 bg-gray-100 px-2 rounded-sm">
            <h3 className="text-gray-700">{auction.make}, {auction.model}</h3>
            <p className="font-semibold text-sm">{auction.year}</p>
      </div>      
    </Link>
  )
}

export default AuctionCard