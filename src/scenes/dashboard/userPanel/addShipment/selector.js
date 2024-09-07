import { Fragment, useState } from "react";
import styled from "styled-components";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// Genel Wrapper
const Wrapper = styled.div`
  display: flex;
  gap: 1rem; /* Aralarındaki boşluk */
  margin-bottom: 15px;
  
`;

// InputContainer ve InputWrapper
const InputContainer = styled.div`
  position: relative;
  flex: 1; /* Her bir input'un eşit genişlikte olmasını sağlar */
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: default;
  overflow: hidden;
  border: 1px solid #003366; /* Lacivert border */
  border-radius: 0.5rem;
  background: white;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.75);
  }
`;

// Combobox.Input
const Input = styled(Combobox.Input)`
  width: 100%;
  border: none;
  padding: 0.5rem 2.5rem 0.5rem 1rem; /* Sağ tarafta ikon için yer bırakma */
  font-size: 0.875rem;
  color: #003366; /* Lacivert renk */
  outline: none;
  background: white;
  cursor: default;
  &::placeholder {
    color: #9ca3af;
  }
  /* Yazı yazmayı engelle */
  pointer-events: none;
  user-select: none;
`;

// Combobox.Button
const Button = styled(Combobox.Button)`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

// İkonlar
const StyledChevronUpDownIcon = styled(ChevronUpDownIcon)`
  height: 1.25rem;
  width: 1.25rem;
  color: #9ca3af; /* Varsayılan renk */
  &:hover {
    color: #6b7280; /* Hover rengi */
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  height: 1.25rem;
  width: 1.25rem;
`;

// Combobox.Options ve Combobox.Option
const Options = styled(Combobox.Options)`
  position: absolute;
  margin-top: 0.25rem;
  max-height: 15rem;
  width: 100%;
  overflow: auto;
  border-radius: 0.375rem;
  background: white;
  padding: 0.25rem 0;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10; /* Üzerindeki elemanlardan önde olmasını sağlar */
`;

const Option = styled(Combobox.Option)`
  position: relative;
  cursor: default;
  padding: 0.5rem 1rem;
  color: #003366; /* Lacivert renk */
  &:hover {
    background-color: #e0e0e0; /* Hover rengi */
  }
  &.active {
    background-color: #003366;
    color: white;
  }
`;

function Selector({ data, selected, setSelected }) {
  const [query, setQuery] = useState("");

  const filteredData =
    query === ""
      ? data
      : data.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Wrapper>
      <Combobox value={selected} onChange={setSelected}>
        <InputContainer>
          <InputWrapper>
            <Input
              displayValue={(item) => item.name}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Select an item"
            />
            <Button>
              <StyledChevronUpDownIcon aria-hidden="true" />
            </Button>
          </InputWrapper>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Options>
              {filteredData.length === 0 && query !== "" ? (
                <Option>
                  Nothing found.
                </Option>
              ) : (
                filteredData.map((item) => (
                  <Option key={item.id} value={item}>
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item.name}
                        </span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"}`}>
                            <StyledCheckIcon aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Option>
                ))
              )}
            </Options>
          </Transition>
        </InputContainer>
      </Combobox>
    </Wrapper>
  );
}

export default Selector;
