import React from 'react';
import { array, func, instanceOf } from 'prop-types';
import SelectButton from '../SelectButton';
import Collection from '../../core/Collection';

const Chooser = ({ frameworks, visible, onFrameworkSelect }) => {
  return (
    <div className="section has-text-centered">
      <div className="container">
        <h2 className="title is-5">
          Select <strong>at least 2</strong> and <strong>maximum 4</strong> front-end frameworks and
          compare them to each other.
        </h2>
        <div className="notification">
          {frameworks.map(framework => {
            return (
              <SelectButton
                key={framework.slug}
                isSelected={visible.has(framework.slug)}
                framework={framework}
                onClick={() => {
                  onFrameworkSelect(framework.slug);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

Chooser.propTypes = {
  frameworks: array.isRequired,
  visible: instanceOf(Collection).isRequired,
  onFrameworkSelect: func.isRequired
};

export default Chooser;