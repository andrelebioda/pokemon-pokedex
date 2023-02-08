import { useState, useEffect } from "react";

const Accordion = ({ title, data, effect_entries }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [innerHeight, setInnerHeight] = useState();

  const handleClick = (e) => {
    const parent = e.currentTarget.parentElement.closest(".accordion");
    const body = parent.querySelector(".accordion-body").offsetHeight;
    setIsOpen(!isOpen);
    setInnerHeight(body);
  };

  return (
    <div className="accordion">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
          aria-expanded={isOpen}
          onClick={handleClick}
        >
          {title}
        </button>
      </h2>

      <div
        className={`accordion-collapse ${isOpen ? "show" : ""}`}
        style={{ height: `${isOpen ? innerHeight : 0}` + "px" }}
      >
        <div className="accordion-body">
          <table>
            <tbody>
              {data.map((d) => (
                <tr key={d.data.name}>
                  <td>
                    <span>{d.data.name}</span>
                  </td>
                  <td>
                    <span>
                      {d.data.effect_entries[effect_entries]?.effect ?? "-"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
