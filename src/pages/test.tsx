import DropdownInput from "../components/dropdown-input";

function Test() {
  return (
    <section>
      <p>
        This page is used to test new designs.
      </p>

      <select>
        <option value='Value 1'>Label 1</option>
        <option value='Value 2'>Label 2</option>
      </select>
      <DropdownInput id='1' options={[
        { label: 'Label 1', value: 'Value 1' },
        { label: 'Label 2', value: 'Value 2' }
      ]} />
      <DropdownInput id='2' options={[
        { label: 'Label 1', value: 'Value 1' },
        { label: 'Label 2', value: 'Value 2' }
      ]} initialOptionIdx={0} />
      <DropdownInput id='3' options={[
        { label: 'Label 1', value: 'Value 1' },
        { label: 'Label 2', value: 'Value 2' }
      ]} />
      <DropdownInput id='4' options={[
        { label: 'Label 1', value: 'Value 1' },
        { label: 'Label 2', value: 'Value 2' }
      ]} />
      <DropdownInput id='5' options={[
        { label: 'Label 1', value: 'Value 1' },
        { label: 'Label 2', value: 'Value 2' }
      ]} />
    </section>
  );
}

export default Test;
