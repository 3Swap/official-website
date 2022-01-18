import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import TokenSelector from './TokenSelector';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { TokenList } from '../../data/TokenList.data';
import { TokenSelectorHeader } from '../../styles/swap/Swap.styled';
import Input from '../InputField';

const SelectSwapToken = () => {
  const [selected, setSelected] = useState(TokenList[0].name.toUpperCase());
  const [selectedImg, setSelectedImg] = useState(TokenList[0].logo);
  const [optionSelected, setOptionSelected] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="swapWrap">
        <Listbox value={selected} onChange={setSelected} className="ListBox">
          {({ open }) => (
            <>
              <Listbox.Button className="btn">
                {selectedImg && <img src={selectedImg} alt="" className="img" />}
                <div className="item">{selected.toUpperCase()}</div>
                <FiChevronDown className="icon" />
              </Listbox.Button>

              <TokenSelector open={open}>
                <TokenSelectorHeader>
                  <div className="token__selector__heading">
                    <h2>Choose</h2>
                    <FiX className="icon" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search token name"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </TokenSelectorHeader>
                <Listbox.Options className="selectBox">
                  {TokenList.map((token, i) => (
                    <Listbox.Option key={i} value={token.name}>
                      <label
                        onClick={() => {
                          setOptionSelected(!optionSelected);
                          setSelectedImg(token.logo);
                        }}
                        className="options"
                      >
                        <img src={token.logo} alt="" /> <h1>{`${token.name}`.toUpperCase()}</h1>
                      </label>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </TokenSelector>
            </>
          )}
        </Listbox>
      </div>
    </>
  );
};

export default SelectSwapToken;
