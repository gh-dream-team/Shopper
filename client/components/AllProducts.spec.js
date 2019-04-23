/* global describe beforeEach it */

import chai,{expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllProducts} from './AllProducts'
import {ItemView} from './ItemView';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'


const adapter = new Adapter()
enzyme.configure({adapter})
chai.use(sinonChai)

describe('AllProducts', () => {
    
    const productsList = [
        {
        description: "Nam nulla. Integer pede justo.",
        imageUrl: "https://casiocdn.com/casio-v2/resource/images/products/watches/small/BG169R-3_small.png",
        inventory: 21,
        name: "Baby G Watch",
        price: 1893,
        id: 1
      }
    ];
    const mockFetch = () => {} 
    const mock = sinon.mock(mockFetch)

    let allProductsWrapper = shallow(<AllProducts products={productsList} fetchProducts={mock}/>)

    it('is comprised of <ItemView /> components based on what gets placed in products', () => {
        expect(allProductsWrapper.find(ItemView)).to.have.length(1);
  })
})


