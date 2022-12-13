
import styled from "styled-components";


export const ListItemStyle = styled.li`
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;

    :last-child {
        border-bottom: none;
    }

    :hover .destroy {
        display: block;
    }

    li.editing:last-child {
    margin-bottom: -1px;
}

`