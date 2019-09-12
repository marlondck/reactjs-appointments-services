import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 500px;
  padding: 5px 15px;
`;

export const Time = styled.li`
  background: #fff;
  padding: 10px;
  border-radius: 4px;

  opacity: ${props => (props.past ? 0.6 : 1)};

  box-shadow: ${props =>
    !props.available
      ? '5px 5px 5px 0px rgba(138, 10, 138, 0.4)'
      : '0 0 0 0 rgba(0, 0, 0, 0)'};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 16px;
    font-weight: normal;
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 13px;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
