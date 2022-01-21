import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { increment } from '../storeB/counterA';
import './styles.css';

const ButtonA = () => {
  // This renders the component when clicking button B, although values do not change
  // const { rest: { array } } = useSelector((state) => state.counterB.value);
  // const { rest: { string } } = useSelector((state) => state.counterB.value);
  // const { rest: { object } } = useSelector((state) => state.counterB.value);

  // This does not render the component when clicking B
  const { array } = useSelector((state) => state.counterB.value.rest);
  const { string } = useSelector((state) => state.counterB.value.rest);
  const { object } = useSelector((state) => state.counterB.value.rest);

  const value = useSelector((state) => state.counterA.value.value.value);
  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(increment());
  }

  useEffect(() => {
    console.log('useeffect');
  }, [object]);

  console.log('AAA');
  return (
    <div className='containerA'>
      <button id='buttonA' className='button' onClick={onClick}>
        BUTTON A
      </button>
      <div>
        VALUE A
        {value}
      </div>
      <div>
        ARRAY B
        {array[0]}
      </div>
      <div>
        STRING B
        {string}
      </div>
      <div>
        OBJECT B
        {object.value.value}
      </div>
    </div>
  )
}

export default ButtonA;