import { useState } from 'react';
import './style.css'

interface Props {
  text: string
}

const ListItem = (props: Props) => {
  const [check, setCheck] = useState(false)

  return (
    <div className="container">
      <p>{props.text}</p>
      <div className={`${check ? 'active' : ''} check-box`} onClick={() => setCheck(!check)}></div>
    </div>
  );
};

export default ListItem;
