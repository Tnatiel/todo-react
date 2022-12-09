import React from 'react';
export function ToggleAll({onToggleAll, children}) {

    
    return (
        <section className="main">
            <input className="toggle-all"
                onChange={(event) => {onToggleAll(event.target.checked)}}
                type="checkbox"
                />
            {children}
        </section>
    );
}
