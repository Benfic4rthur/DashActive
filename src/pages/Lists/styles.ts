import styled from 'styled-components';

export const Container = styled.div`
  > select {
    display: flex;
    padding: 7px 10px;
    border-radius: 5px;
    margin-left: 7px;
  }
`;
export const Content = styled.main``;
export const Filters = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${props => props.theme.colors.white};
    margin: 0 10px;
    transition: 0.3s;
    opacity: 0.3;
    &:hover {
      opacity: 0.7;
      transition: 0.2s;
    }
    margin-bottom: 10px;
  }

  .tag-filter-recurrent::after {
    content: '';
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid ${props => props.theme.colors.success};
  }

  .tag-filter-eventual::after {
    content: '';
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid ${props => props.theme.colors.warning};
  }
  
  .tag-actived {
    opacity: 1;
  }
`;
