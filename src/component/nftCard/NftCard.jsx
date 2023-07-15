import React from "react";
import "./nftCard.css";

function NftCard() {
  return (
    <div className="nft">
      <div className="nftWrapper">
        <div className="nftCard">
          <div className="nftCardImgWrapper">
            <img
              src="assets/images/image-equilibrium.jpg"
              alt=""
              className="nftCardImg"
            />
            <div className="hoverBanner">
              <img
                src="assets/images/icon-view.svg"
                className="hoverBannerIcon"
              />
            </div>
          </div>

          <h3 className="nftCardTitle">Equilibrium #3429</h3>
          <p className="nftCardDesc">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="nftCardMiddle">
            <p className="nftPrice">
              <img
                src="assets/images/icon-ethereum.svg"
                className="nftPriceIcon"
              />
              0.041 ETH
            </p>
            <p className="nftTime">
              <img src="assets/images/icon-clock.svg" className="nftTimeIcon" />
              3 days left
            </p>
          </div>
          <hr className="nftSep" />
          <div className="nftBottom">
            <img
              src="assets/images/image-avatar.png"
              alt=""
              className="nftBottomImg"
            />
            <p className="nftBottomCreated">
              <span className="nftBottomCreatedLeft">Creation of</span>
              <span className="nftBottomCreatedArtistName">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
