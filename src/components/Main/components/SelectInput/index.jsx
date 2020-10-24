// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// UI Components
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export const SelectInput = ({ options, value, onChange }) => {
  const classes = useStyles();

  const handleOnChange = e => {
    onChange(e.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        name='categories'
        id='categories'
        value={value}
        onChange={handleOnChange}
      >
        {options.map((option, i) => (
          <MenuItem
            key={i}
            value={option.value}
            data-test={`option-[${option.value}]`}
          >
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
