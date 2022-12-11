import React, { useContext } from 'react';
import { ListContext } from '../providers/list-context';
export function ToggleAll({children}) {

    const {toggleAllItems} = useContext(ListContext)
    return (
        <section className="main">
            <input className="toggle-all"
                onChange={(event) => {toggleAllItems(event.target.checked)}}
                type="checkbox"
                />
            {children}
        </section>
    );
}
