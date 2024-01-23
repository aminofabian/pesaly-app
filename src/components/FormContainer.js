import React, { useState, useEffect } from 'react';
import AirTime from './AirTime';
import BongaPoints from './BongaPoints';
import MoneyExchange from './MoneyExchange';

const FormContainer = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  useEffect(() => {
    // Trigger the BongaPoints button click when the component mounts
    handleServiceClick('BongaPoints');
  }, []); // Empty dependency array ensures this effect runs only on component mount

  return (
    <React.Fragment>
      <div className="form-container">
        <div className="fcontainer">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="parallelogram bg-light p-4">
                <div className="mb-3">
                  <button
                    className={`btn ${activeService === 'AirTime' ? 'btn-primary' : 'btn-light'} me-2`}
                    onClick={() => handleServiceClick('AirTime')}
                  >
                    AirTime
                  </button>
                  <button
                    className={`btn ${activeService === 'BongaPoints' ? 'btn-primary' : 'btn-light'} me-2`}
                    onClick={() => handleServiceClick('BongaPoints')}
                  >
                    BongaPoints
                  </button>
                  <button
                    className={`btn ${activeService === 'MoneyExchange' ? 'btn-primary' : 'btn-light'}`}
                    onClick={() => handleServiceClick('MoneyExchange')}
                  >
                    MoneyExchange
                  </button>
                </div>
                <AirTime active={activeService === 'AirTime'}>
                  <AirTime />
                </AirTime>
                <BongaPoints active={activeService === 'BongaPoints'}>
                  <BongaPoints />
                </BongaPoints>
                <MoneyExchange active={activeService === 'MoneyExchange'}>
                  <MoneyExchange />
                </MoneyExchange>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FormContainer;
