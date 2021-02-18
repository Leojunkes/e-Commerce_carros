import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing:border-box;
    }
    body{
        
        background:#fff;
        font-size:14px;
        font-family:sans-serif;
    }
`;
