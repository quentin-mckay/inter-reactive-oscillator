/**
 * Dropdown react component. Created from input optionList.
 * @component
 * @example
 * const myOptions = [
 * { label: "Sine wave", value: "sine" },
 * { label: "Square wave", value: "square" },
 * { label: "Sawtooth wave", value: "sawtooth" },
 * { label: "Triangle wave", value: "triangle" },
 * ];
 * const [getOptionType, setOptionType] = useState("sine");
 *
 * const handleStateChange = (event, cb) => {
 *   console.log(`${event.target.id} set to ${event.target.value}`);
 *   cb(event.target.value);
 * };
 *
 * const waveShapeDropdown = new Dropdown({
 *   initValue: getOptionType,
 *   handleChange: (e) => handleStateChange(e, setOptionType.set),
 *   optionList: myOptions,
 *   label: `Wave Shape: `,
 *   id: `my-wave-shape-selector`,
 * });
 * // Rendering, inside App.js or another comp.
 * return(
 *    <div id="wave-shape-selector-div" htmlFor="my-wave-shape-selector">
 *      {waveShapeDropdown}
 *    </div>
 * )
 */

export default function Dropdown(props) {
  return (
    <div>
      <label>
        {" "}
        {props.label}
        <select value={props.initValue} onChange={props.handleChange}>
          {props.optionList.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
