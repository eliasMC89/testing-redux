import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { increment } from '../storeB/counterB';
import './styles.css';

const ButtonB = () => {
  // This renders the component when clicking button A, although values do not change
  // const { string } = useSelector((state) => state.counterA.value.value, shallowEqual);
  // const { array } = useSelector((state) => state.counterA.value.value, shallowEqual);
  // const { object } = useSelector((state) => state.counterA.value.value, shallowEqual);

  // This does not render the component when clicking A
  const string = useSelector((state) => state.counterA.value.value.string);
  const array = useSelector((state) => state.counterA.value.value.array);
  const object = useSelector((state) => state.counterA.value.value.object);

  const value = useSelector((state) => state.counterB.value.value);
  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(increment());
  }

  console.log('BBB');
  return (
    <div className='containerB'>
      <button id='buttonA' className='button' onClick={onClick}>
        BUTTON B
      </button>
      <div>
        VALUE B
        {value}
      </div>
      <div>
        ARRAY A
        {array[0]}
      </div>
      <div>
        STRING A
        {string}
      </div>
      <div>
        OBJECT A
        {object.value.value}
      </div>
    </div>
  )
}

export default ButtonB;