import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 40px;
  z-index: 1;

  .movement-row {
    margin-bottom: 10px;
    height: 36px;
    position: relative;
  }

  .movement {
    position: absolute;
    
    /* Mantenha essa largura igual à variável movementWidth */
    width: 100px;
    background-color: white;
    border-radius: 1px;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 13px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    padding-left: 4px;
  }
`;