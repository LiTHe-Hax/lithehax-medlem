import { useEffect, useRef, useState } from 'react';

type OptionType = { label: string, value: any };

interface DropdownProps {
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  options: [OptionType, ...OptionType[]],
  initialOptionIdx?: number,
  onValueUpdate?: (value: any) => void,
};

function DropdownInput({ id, placeholder, disabled = false, options, initialOptionIdx, onValueUpdate }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<OptionType | null>(
    initialOptionIdx !== undefined ? options[initialOptionIdx] : null
  );
  // TODO: error message/highlighting
  //const [error, setError] = useState(null);

  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (onValueUpdate !== undefined && selected !== null) {
      onValueUpdate(selected.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (isOpen && ulRef.current && selected) {
      const optionIdx = options.indexOf(selected);
      (ulRef.current.childNodes[optionIdx] as HTMLLIElement).focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (isOpen && selected === null && ulRef.current !== null) {
          (ulRef.current.firstChild as HTMLLIElement).focus();
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
        if (isOpen && selected === null && ulRef.current !== null) {
          (ulRef.current.lastChild as HTMLLIElement).focus();
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

  const onOptionClick = (option: OptionType) => {
    setIsOpen(false);
    setSelected(option);
  };

  const onOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: OptionType) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (e.currentTarget.nextSibling !== null) {
          (e.currentTarget.nextSibling as HTMLLIElement).focus();
        } else {
          (e.currentTarget.parentNode?.firstChild as HTMLLIElement).focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (e.currentTarget.previousSibling !== null) {
          (e.currentTarget.previousSibling as HTMLLIElement).focus();
        } else {
          (e.currentTarget.parentNode?.lastChild as HTMLLIElement).focus();
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
        type='button'
        ref={buttonRef}
        value={selected ? selected.value : ''}
        disabled={disabled}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <span className='label'>
          {selected ? selected.label : placeholder || 'Please select an option'}
        </span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && !disabled && (
        <ul className='menu' ref={ulRef}>
          {options.map(option => (
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

export default DropdownInput;
