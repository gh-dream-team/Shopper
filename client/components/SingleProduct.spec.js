import chai,{expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import {Provider} from 'react-redux'
import store from '../store'

import SingleProduct from './SingleProduct'
const adapter = new Adapter()
enzyme.configure({adapter})
chai.use(sinonChai)

describe('<SingleProduct />', () => {
  let selectedProduct = {
    description: "Nam nulla. Integer pede justo.",
    imageUrl: "https://casiocdn.com/casio-v2/resource/images/products/watches/small/BG169R-3_small.png",
    inventory: 21,
    name: "Baby G Watch",
    price: 1893
   }

  let SingleProductwrapper= shallow(<Provider store={store}><SingleProduct product={selectedProduct}/> </Provider> ).dive()

  it("includes the product's imageUrl as a img", () => {
    expect(SingleProductwrapper.find("img").text()).to.be.equal("https://casiocdn.com/casio-v2/resource/images/products/watches/small/BG169R-3_small.png")
  });
})