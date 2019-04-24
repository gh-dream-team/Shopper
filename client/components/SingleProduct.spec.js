import chai,{expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

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

  let SingleProductwrapper= shallow(<SingleProduct product={selectedProduct} />)

  it("includes the product's name as a div", () => {
    expect(SingleProductwrapper.find("div").text()).to.be.equal("Baby G Watch");
  });

})