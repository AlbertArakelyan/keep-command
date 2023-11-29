import { useState } from 'react';
import { Select, Option } from 'components';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1 style={{ fontSize: '40px', marginBottom: '24px' }}>{selectedOption}</h1>
      <Select selectedOption={selectedOption} onChange={handleChange}>
        <Option value="Universesssss">
          <div>I love you&nbsp;</div>
          <span style={{ color: 'mediumpurple' }} className="Hasmikkssss">
            My Universe
          </span>
        </Option>
        <Option value="Option2">Option22</Option>
        <Option value="Option3">Option33</Option>
      </Select>
    </div>
  );
};

export default Home;
