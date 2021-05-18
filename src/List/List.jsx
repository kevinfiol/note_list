import m from 'mithril';

import Title from './Title';
import Row from './Row';

const List = {
    view: ({ attrs: { state, actions } }) =>
        <div className="list max-w-md shadow-lg border-2">
            <div className="list__title border-b-1">
                <Title
                    sortOrder={state.sortOrder}
                    reverseSortOrder={actions.reverseSortOrder}
                    addNote={actions.addRandomNote}
                />
            </div>
            <div className="list__rows">
                { state.notes.map(note => {
                    const isSelected = state.selectedNotes.includes(note.id);

                    return (
                        <Row
                            note={note}
                            isSelected={isSelected}
                            selectNote={() => actions.selectNote(note.id)}
                            removeSelectedNote={() => actions.removeSelectedNote(note.id)}
                        />
                    );
                }) }
            </div>
            { state.selectedNotes.length > 0 &&
                <div className="list__tooltip fixed right-0 bottom-0 m-6 p-4 bg-white shadow-lg rounded-lg">
                    {state.selectedNotes.length} items selected.
                </div>
            }
        </div>
};

export default List;