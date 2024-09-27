import { useEffect, useRef, useState } from 'react';

function DropdownInput({ id, placeholder, disabled, initialOptionIdx, onValueUpdate, options }) {
  const [selected, setSelected] = useState(initialOptionIdx || initialOptionIdx === 0 ? options[initialOptionIdx] : null);
  const [isOpen, setIsOpen] = useState(false);
  // TODO: error message/highlighting
  //const [error, setError] = useState(null);

  const ref = useRef(null);
  const buttonRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    if (onValueUpdate !== undefined && selected) {
      onValueUpdate(selected.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (isOpen && ulRef.current && selected) {
      const optionIdx = options.indexOf(selected);
      ulRef.current.childNodes[optionIdx].focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const collapse = () => {
    setIsOpen(false);
    if (buttonRef.current)
      buttonRef.current.focus();
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (isOpen && selected === null && ulRef.current) {
          ulRef.current.firstChild.focus();
        } else if (selected === null) {
          setSelected(options[0]);
        } else if (options.indexOf(selected) === options.length - 1) {
          setSelected(options[0]);
        } else {
          setSelected(options[options.indexOf(selected) + 1]);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen && selected === null && ulRef.current) {
          ulRef.current.lastChild.focus();
        } else if (selected === null) {
          setSelected(options[options.length - 1]);
        } else if (options.indexOf(selected) === 0) {
          setSelected(options[options.length - 1]);
        } else {
          setSelected(options[options.indexOf(selected) - 1]);
        }
        break;
      default:
        // Space already opens the menu, since it clicks the button.
        break;
    }
  };

  const onOptionClick = (option) => {
    setIsOpen(false);
    setSelected(option);
  };

  const onOptionKeyDown = (e, option) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (e.currentTarget.nextSibling) {
          e.currentTarget.nextSibling.focus();
        } else {
          e.currentTarget.parentNode.firstChild.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (e.currentTarget.previousSibling) {
          e.currentTarget.previousSibling.focus();
        } else {
          e.currentTarget.parentNode.lastChild.focus();
        }
        break;
      case 'Tab':
        e.preventDefault();
        break;
      case ' ':
        e.preventDefault();
        setSelected(option);
        collapse();
        break;
      case 'Escape':
        e.preventDefault();
        collapse();
        break;
      default:
        break;
    }
  };

  return (
    <div className='dropdown-input' ref={ref}>
      <button
        id={id}
        value={selected ? selected.value : ''}
        type='button'
        ref={buttonRef}
        onClick={onClick}
        disabled={disabled}
        onKeyDown={e => onKeyDown(e)}
        onSubmit={() => console.log("asd")}
      >
        <span className='label'>
          {selected ? selected.label : placeholder || 'Please Select'}
        </span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && !disabled && (
        <ul className='menu' ref={ulRef}>
          {options && options.map(option => (
            <li
              className={selected === option ? 'menu-item selected' : 'menu-item'}
              key={option.label}
              tabIndex={0 /* Needed to be focusable */}
              onClick={() => onOptionClick(option)}
              onKeyDown={(e) => onOptionKeyDown(e, option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/*
function DropDownInputCopied({ id, placeholder, disabled, initialValue, onValueUpdate, options, label }) {
  useEffect(() => {
    if (dropdown === false && selected === null) {
      // if no option is selected on click outside, show error
      setError("Please select an option.");
    } else {
      setError("");
    }
  }, [dropdown]);
}
*/

export default DropdownInput;
