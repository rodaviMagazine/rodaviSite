import styled from "styled-components";

const GridHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(${ props => props.gridState }, 1fr);
  color: #fff;
  gap: 1rem;
  height: calc(100vh - 140px);
  img {
    display: block;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }
  .link {
    height: 100%;
  }
`

export default GridHolder;