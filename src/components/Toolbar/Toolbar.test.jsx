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
    
    let store, 
    wrapperToolbar,
    mountWithStore;
    
    beforeAll(()=>{
      store = mockStore(initialState);
      mountWithStore = component => mount(<Provider store={store}> {component} </Provider>);
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



