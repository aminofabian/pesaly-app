import React, { useState, useEffect } from 'react';

const OurServices = ({ children }) => {
  const [activeService, setActiveService] = useState(children[0]?.props.service || null);

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  useEffect(() => {
    setActiveService(children[0]?.props.service || null);
  }, [children]);

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        {React.Children.map(children, (child) => (
          <button
            type="button"
            className={`btn ${child.props.service === activeService ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => handleServiceClick(child.props.service)}
          >
            {child.props.service}
          </button>
        ))}
      </div>
      {React.Children.map(children, (child) =>
        child.props.service === activeService ? React.cloneElement(child, { active: true }) : null
      )}
    </div>
  );
}

export default OurServices;
