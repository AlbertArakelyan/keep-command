import { useState } from 'react';
import { useAppDispatch } from 'store/index';
import { Select, Option, Modal } from 'components';
import { addFolder } from 'store/folder';

const Home = () => {
  const dispatch = useAppDispatch();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const handleChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleRequest = () => {
    dispatch(
      addFolder({
        description: 'descriptionnery',
        name: 'namery',
      })
    );
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
      <hr />
      {/* <Modal isOpen={isModalOpen} title="Add Command" onClose={() => setIsModalOpen(false)}>
        Modalnery
      </Modal> */}
      <button onClick={handleRequest}>add folder</button>
    </div>
  );
};

export default Home;
