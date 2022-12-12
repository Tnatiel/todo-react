


import { TodoApp } from "./TodoApp";


export function AppsList({ items }) {
  return (
    <ul className="todos-apps-list">
      {items.map((currentApp) => (
        <li  key={Math.random() * 9999999999999}><TodoApp mainTitle={`${currentApp.props.mainTitle} list`} /></li>
      ))}
    </ul>
  );
}


