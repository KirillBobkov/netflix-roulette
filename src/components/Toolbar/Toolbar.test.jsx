import React from 'react';
import { getMovies } from '../../utils';
import { Provider } from 'react-redux';
import { movies } from '../../utils/testData';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import Toolbar from './Toolbar';

describe('Toolbar component', () => {
    const initialState = movies;
    const mockStore = configureStore();
    const mountWithStore = component => mount(<Provider store={store}> {component} </Provider>);
    let store, 
    wrapperToolbar;
    
    beforeAll(()=>{
      store = mockStore(initialState);
      wrapperToolbar = mountWithStore(<Toolbar />);
    });
    
    it('should be render correctly', () => {
        expect(wrapperToolbar).toMatchSnapshot();
    });

    it('should render Toolbar title', () => {
        const sortDescription = wrapperToolbar.find('.toolbar__title');
        expect(sortDescription.text()).toEqual('Find your movie');
    });
});    



