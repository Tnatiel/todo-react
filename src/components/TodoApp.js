import {Header} from './header';
import {ToggleAll} from './toggle-all';
import {Footer} from './footer';
import { TodosList } from './todolist';
import { ListContext } from '../providers/list-context';
import { useTodos } from '../hooks/useTodos';


export function TodosApp({appTitle}) {

    const todoApi = useTodos()


    return (
    <ListContext.Provider value={todoApi}>
      <section className="todoapp">
      <Header
        mainTitle={appTitle}         
        />
      <ToggleAll>
        <TodosList />
      </ToggleAll>
      <Footer/>
      </section>
    </ListContext.Provider>
    )
}