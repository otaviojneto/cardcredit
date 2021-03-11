import React, { useState } from 'react';
import { FcSimCardChip } from 'react-icons/fc';
import {
  Card,
  Container,
  Fill,
  Security,
  Base,
  CardBack,
  CardFront,
  Code,
  Number,
} from './styles';
import Master from '../../assets/master.png';

const Repository: React.FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expire, setExpire] = useState('');
  const [security, setSecurity] = useState('');
  const [rotate, setRotate] = useState(false);

  return (
    <Container>
      <h1>Payment Information</h1>

      <Base>
        <Card isRorate={rotate}>
          <CardFront>
            <span>
              <FcSimCardChip />

              <img src={Master} alt="master" />
            </span>

            <Number>
              <h6>card number</h6>
              <p>{number || '1234 5678 9012 3456'}</p>
            </Number>

            <Code>
              <div>
                <h6>cardholder Name</h6>
                <p>{name || 'Joseph Climber'}</p>
              </div>

              <div>
                <h6>expiration</h6>
                <p>{expire || '12/12'}</p>
              </div>
            </Code>
          </CardFront>

          <CardBack>
            <p>{security || '000'}</p>
            <h6>expiration</h6>
          </CardBack>
        </Card>

        <Fill>
          <label htmlFor="name">
            Name <br />
            <input
              type="text"
              onChange={event => setName(event.target.value)}
            />
          </label>
          <br />

          <label htmlFor="number">
            Card Number <br />
            <input
              type="text"
              onChange={event => setNumber(event.target.value)}
            />
          </label>

          <Security>
            <label htmlFor="date">
              Expiration (mm/yy) <br />
              <input
                type="text"
                onChange={event => setExpire(event.target.value)}
              />
            </label>

            <label htmlFor="date">
              Security Code <br />
              <input
                type="text"
                onChange={e => setSecurity(e.target.value)}
                onFocus={() => setRotate(true)}
                onBlur={() => setRotate(false)}
              />
            </label>
          </Security>
        </Fill>
      </Base>
    </Container>
  );
};

export default Repository;
