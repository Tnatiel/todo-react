import {Header} from './header';
import {ToggleAll} from './toggle-all';
import {Footer} from './footer';
import { TodosList } from './todolist';
import { ListContext } from '../providers/list-context';
import { useTodos } from '../hooks/useTodos';
import { AuthContext } from '../providers/auth-context';


export function TodoApp({mainTitle}) {

    const todoApi = useTodos()
    const currentUser = {name: 'moty', role: 'noo'}

  // console.log(mainTitle)
    return (
    <AuthContext.Provider value={currentUser}>
      <ListContext.Provider value={todoApi}>
        <section className="todoapp">
        <Header
          mainTitle={mainTitle}         
          />
        <ToggleAll>
          <TodosList />
        </ToggleAll>
        <Footer/>
        </section>
      </ListContext.Provider>
    </AuthContext.Provider>
    )
}