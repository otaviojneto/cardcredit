import React, { useCallback, useEffect, useState } from 'react';
import { FcSimCardChip } from 'react-icons/fc';
import { visa, master, elo } from '../../assets';
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

const Repository: React.FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expire, setExpire] = useState('');
  const [security, setSecurity] = useState('');
  const [rotate, setRotate] = useState(false);
  const [paymentType, setPaymentType] = useState('');

  const getCardFlag = useCallback(() => {
    console.log(number);
    const checkCard = number.replace(/[^0-9]+/g, '');
    let flag = '';
    const cards = {
      visa: /^4[0-9]{12}(?:[0-9]{3})/,
      mastercard: /^5[1-5][0-9]{14}/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      amex: /^3[47][0-9]{13}/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
      hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
      elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}/,
      aura: /^(5078\d{2})(\d{2})(\d{11})$/,
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const itemflag in cards) {
      if (cards[itemflag].test(checkCard)) {
        flag = itemflag;
      }
    }

    return setPaymentType(flag);
  }, [number]);

  // eslint-disable-next-line consistent-return
  const handleFlag = () => {
    console.log(paymentType);
    switch (paymentType) {
      case 'visa':
        return <img src={visa} alt="Visa" />;
      case 'mastercard':
        return <img src={master} alt="Mastercard" />;
      // case 'diners':
      //   return <img src={Diners} alt={Diners} />
      // case 'discover':
      //   return <img src={Discover} alt={Discover} />
      // case 'elo':
      //   return <img src={Elo} alt={Elo} />
      // case 'hipercard':
      //   return <img src={Hipercard} alt={Hipercard} />
      default:
        break;
    }
  };

  useEffect(() => {
    getCardFlag();
  }, [getCardFlag]);

  return (
    <Container>
      <h1>Payment Information</h1>

      <Base>
        <Card isRorate={rotate}>
          <CardFront>
            <span>
              <FcSimCardChip />

              {handleFlag()}
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
            <p> {security || '000'} </p>
            <h6> expiration</h6>
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
