
import { mount } from 'enzyme';
import App from './App';


let wrapper;

beforeEach(()=>{
  wrapper = mount(<App />)
})

afterEach(()=>{
  wrapper.unmount();
})

describe("Counter Testing", () =>{
  test('renders learn react link', () => {
    
    expect(wrapper.find('h2').text()).toBe('Counter App');
  });

  test('render increment', ()=>{
    expect(wrapper.find('#increment-button').at(0).text()).toBe('Increment');
  })

  test('render descrement', ()=>{
    expect(wrapper.find('#decrement-button').at(0).text()).toBe('Decrement');
  })

  test('Initial state of counter', ()=> {
     expect(wrapper.find('#counter').text()).toBe('0');
  })

  test('render click event of increment and decrement button', ()=>{
     wrapper.find('#increment-button').at(0).simulate('click');
     expect(wrapper.find('#counter').text()).toBe('1');

     wrapper.find('#decrement-button').at(0).simulate('click');
     expect(wrapper.find('#counter').text()).toBe('0');
  })
  
})
