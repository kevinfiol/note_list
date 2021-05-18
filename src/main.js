import m from 'mithril';
import 'virtual:windi.css';

import { State, Actions } from './state';
import List from './List/List';

const state = State();
const actions = Actions(state);

console.log(state);

m.Fragment = { view: vnode => vnode.children };
m.mount(document.getElementById('app'), {
    view: () => m(List, { state, actions })
});