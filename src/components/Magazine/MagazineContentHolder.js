import styled from "styled-components";

const MagazineContentHolder = styled.div`
    max-width: 1000px;
    padding: 32px 0 0;
    margin: 0 auto;
  .image-container {
    position: relative;
    &__left-button {
        position: absolute;
        top: 50%;
        left: 0;
        max-width: 50px;
        max-height: 50px;
        min-width: 10px;
        min-height: 10px;
        border: none;
        background: #fff;
        font-size: 1.3rem;
    }
    &__right-button {
        position: absolute;
        top: 50%;
        right: 0;
        max-width: 50px;
        max-height: 50px;
        min-width: 10px;
        min-height: 10px;
        border: none;
        background: #fff;
        font-size: 1.3rem;
    }
  }
  .buttons-container {
    width: 300px;
    margin: 0 auto;
  }
`

export default MagazineContentHolder;