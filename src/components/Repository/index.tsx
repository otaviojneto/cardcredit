import React from 'react';
import { Card, Container, Security } from './styles';

const Repository: React.FC = () => {
  return (
    <Container>
      <h1>Payment Information</h1>

      <div>
        <div>
          <h1>Cartão</h1>
        </div>

        <div>
          <Card>
            <label htmlFor="name">
              Name <br />
              <input type="text" />
            </label>
            <br />

            <label htmlFor="name">
              Card Number <br />
              <input type="text" />
            </label>
            <br />

            <Security>
              <label htmlFor="date">
                Expiration (mm/yy) <br />
                <input type="text" />
              </label>

              <label htmlFor="date">
                Security Code <br />
                <input type="text" />
              </label>
            </Security>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Repository;
