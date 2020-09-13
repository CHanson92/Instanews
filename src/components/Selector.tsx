import styled from 'styled-components';
import { filters } from '../utils/strings';

const SelectorContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1em;
`;

const Select = styled.select`
    margin-top: 0.5em;

    @media screen and (min-width: 600px) {
        padding: 0.5em;
        font-size: 0.8em;
    }

    @media screen and (min-width: 1200px) {
        padding: 0.75em;
    }
`;

const Option = styled.option``;

const Selector = ({ selectFilter }) => (
    <SelectorContainer>
        Choose a section:
        <Select onChange={selectFilter}>
            <Option value=''>Sections ...</Option>
            {filters.map((i, index) => (
                <Option key={index} value={i}>
                    {i.charAt(0).toUpperCase() + i.slice(1)}
                </Option>
            ))}
        </Select>
    </SelectorContainer>
);

export default Selector;
