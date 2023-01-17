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
function App() {
  const { handleSubmitBuy, isOpenBuyPopup, isOpenProductPopup, selectedProduct, isOpenReadMore} = useContext(ModalContext)
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <Popup 
        onSubmit={handleSubmitBuy}
        isOpen={isOpenBuyPopup}
        
      >
        <ProductsBuyNow title={'Buy now'} />
      </Popup>
      <Popup
        onSubmit={handleSubmitBuy}
        isOpen={isOpenProductPopup}
        
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
    </div>
  );
}

export default App;
