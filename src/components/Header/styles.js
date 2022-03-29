import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  color: #000;
  display: flex;
  align-items: center;
  height: 3%;

  .date {
    margin: 0 10px;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }

  .nav {
    font-size: 20px;
    padding: 0 5px;
    border-radius: 1px;
    font-weight: 700;
    cursor: pointer;
  }
}
`;