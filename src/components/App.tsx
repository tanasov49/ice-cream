import React, {useContext} from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Popup from './UI/Popup/Popup';
import PopupWithoutForm from './UI/PopupWithoutForm/PopupWithoutForm'
import {ModalContext} from '../context/ModalContext'
import ProductsBuyNow from './UI/ProductsBuyNow/ProductsBuyNow';
import ProductBuyNow from './UI/ProductBuyNow/ProductBuyNow';
import {ingredientsProducts} from '../data/data'
import ReadMore from './UI/ReadMore/ReadMore';
import MapContainer from './UI/MapContainer/MapContainer';
import FranchiseModal from './UI/FranchiseModal/FranchiseModal'
function App() {
  const { handleSubmitBuy, canSubmit, isOpenBuyPopup, isOpenProductPopup, selectedProduct, isOpenReadMore, isOpenPopupMap, isOpenFranchise, canSubmitWithEmail} = useContext(ModalContext)
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <Popup 
        onSubmit={handleSubmitBuy}
        isOpen={isOpenBuyPopup}
        canSubmit={canSubmit}
        
      >
        <ProductsBuyNow title={'Buy now'} />
      </Popup>
      <Popup
        onSubmit={handleSubmitBuy}
        isOpen={isOpenProductPopup}
        canSubmit={canSubmit}
      >
        {ingredientsProducts.map((item, key) => {
            if (selectedProduct === key) {
          return (
            <ProductBuyNow key={key} title={item.title} product={item} />
          )
        }
        }
        )}
      </Popup>
      <PopupWithoutForm
        title={'How it’s made?'}
        isOpen={isOpenReadMore}
      >
        <ReadMore />
      </PopupWithoutForm>
      <PopupWithoutForm
        title={'Our Locations'}
        isOpen={isOpenPopupMap}
      >
        <MapContainer />
      </PopupWithoutForm>
      <Popup
        onSubmit={handleSubmitBuy}
        isOpen={isOpenFranchise}
        canSubmit={canSubmitWithEmail}
      >
        <FranchiseModal title={'Thank you for your interest in owning an Ice Cream shop'} />
      </Popup>
    </div>
  );
}

export default App;
