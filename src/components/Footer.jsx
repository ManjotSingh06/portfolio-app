import react from "react";
import styled from "styled-components";

const Footer = () => (
    <Styledwrapper>
        <div className="Footer">
            <div className="Footer-content">
                <h1>Footer</h1>
            </div>
        </div>
    </Styledwrapper>
);
const Styledwrapper = styled.div`
  .outline {
        position: absolute;
        inset:0;
        pointer-events:none;
        }
    .Footer {
        position: fixed;
        width: 100%;
        height: 60px;
        margin: 0 auto;
        margin-top: 2rem;
        justify-items: center;
        background-color: black;
        color:white;     
        };`

export default Footer;