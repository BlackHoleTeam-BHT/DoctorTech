import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
import Home from './components/layout/Home.js'
import Header from './components/layout/Header.js';
import { expect } from 'chai';
import Signup from './components/auth/Signup';
Enzyme.configure({ adapter: new Adapter() });

// test for checking components and its functionality for App
it('renders App component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// test for checking Header components and its functionality
describe('<App />', () => {
    it('renders one <Header /> components', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).to.have.lengthOf(1);
    });
})

// describe('<Signup />',() => {
//     it('render an editor area', () => {
//         const editor = shallow(<Signup />);
//         expect(editor.find('Input').length).equal(1);
//     });

//     it('render an output area', () => {
//         const editor = shallow(<Signup />);
//         expect(editor.find('div.chord-output').length).equal(1);
//     })
// })