import React, { useState } from 'react';

const BuildYourPC = () => {
  const [components, setComponents] = useState({
    processor: '',
    cooler: '',
    motherboard: '',
    ram: '',
    m2Ssd: '',
    sataSsd: '',
    hdd: '',
    gpu: '',
    psu: '',
    cabinet: '',
    monitor: '',
    keyboard: '',
    mouse: '',
    mousePad: '',
    headset: '',
  });

  const handleChange = (event) => {
    setComponents({
      ...components,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(components);
  };

  return (
    <div>
      <h1>Build Your PC</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Processor:
          <input type="text" name="processor" onChange={handleChange} />
        </label>
        <label>
          Cooler:
          <input type="text" name="cooler" onChange={handleChange} />
        </label>
        <label>
          Motherboard:
          <input type="text" name="motherboard" onChange={handleChange} />
        </label>
        <label>
          RAM:
          <input type="text" name="ram" onChange={handleChange} />
        </label>
        <label>
          SSD:
          <input type="text" name="sataSsd" onChange={handleChange} />
        </label>
        <label>
          HDD:
          <input type="text" name="hdd" onChange={handleChange} />
        </label>
        <label>
          GPU:
          <input type="text" name="gpu" onChange={handleChange} />
        </label>
        <label>
          PSU:
          <input type="text" name="psu" onChange={handleChange} />
        </label>
        <label>
          Cabinet:
          <input type="text" name="cabinet" onChange={handleChange} />
        </label>
        <label>
          Monitor:
          <input type="text" name="monitor" onChange={handleChange} />
        </label>
        <section>
            <p>Total price</p>
        </section>
        <button type="submit">Add All To Cart</button>
      </form>
      {/* <pre>{JSON.stringify(components, null, 2)}</pre> */}
    </div>
  );
};

export default BuildYourPC;