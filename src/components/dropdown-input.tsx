import { useEffect, useRef, useState } from 'react';

type OptionType = { label: string, value: any };

interface DropdownProps {
  className?: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  options: [OptionType, ...OptionType[]],
  initialOptionIdx?: number,
  onValueUpdate?: (value: any) => void,
};

function DropdownInput({ className, id, placeholder, disabled = false, options, initialOptionIdx, onValueUpdate }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState<number | undefined>(initialOptionIdx);
  // TODO: error message/highlighting
  //const [error, setError] = useState(null);

  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (onValueUpdate !== undefined && selectedIdx !== undefined) {
      const selected = options[selectedIdx];
      onValueUpdate(selected.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIdx]);

  useEffect(() => {
    if (isOpen && ulRef.current !== null && selectedIdx !== undefined) {
      (ulRef.current.childNodes[selectedIdx] as HTMLLIElement).focus();
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
        if (isOpen && selectedIdx === undefined && ulRef.current !== null) {
          (ulRef.current.firstChild as HTMLLIElement).focus();
        } else if (selectedIdx === undefined) {
          setSelectedIdx(0);
        } else if (selectedIdx === options.length - 1) {
          setSelectedIdx(0);
        } else {
          setSelectedIdx(selectedIdx + 1);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen && selectedIdx === undefined && ulRef.current !== null) {
          (ulRef.current.lastChild as HTMLLIElement).focus();
        } else if (selectedIdx === undefined) {
          setSelectedIdx(options.length - 1);
        } else if (selectedIdx === 0) {
          setSelectedIdx(options.length - 1);
        } else {
          setSelectedIdx(selectedIdx - 1);
        }
        break;
      default:
        // Space already opens the menu, since it clicks the button.
        break;
    }
  };

  const onOptionClick = (optionIdx: number) => {
    setIsOpen(false);
    setSelectedIdx(optionIdx);
  };

  const onOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, optionIdx: number) => {
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
        setSelectedIdx(optionIdx);
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
    <div className={`dropdown-input ${className || ''}`} ref={ref}>
      <button
        id={id}
        type='button'
        ref={buttonRef}
        value={selectedIdx !== undefined ? options[selectedIdx].value : ''}
        disabled={disabled}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <span className='label'>
          {selectedIdx !== undefined ? options[selectedIdx].label : placeholder || 'Please select an option'}
        </span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && !disabled && (
        <ul className='menu' ref={ulRef}>
          {options.map((option, idx) => (
            <li
              className={selectedIdx === idx ? 'menu-item selected' : 'menu-item'}
              key={option.label}
              tabIndex={0 /* Needed to be focusable */}
              onClick={() => onOptionClick(idx)}
              onKeyDown={(e) => onOptionKeyDown(e, idx)}
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
