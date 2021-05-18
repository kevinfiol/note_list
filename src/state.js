import randomExt from 'random-ext';
import { uid } from 'uid';

// initial state
const State = () => ({
    sortOrder: 'desc',
    notes: generateNotes(3),
    selectedNotes: []
});

// these actions purposely mutate the state container
const Actions = state => ({
    reverseSortOrder: () => {
        state.notes = [...state.notes].reverse();
        state.sortOrder = state.sortOrder == 'desc' ? 'asc' : 'desc';
    },

    addRandomNote: () => {
        state.notes = [...state.notes, ...generateNotes(1)]
    },

    selectNote: noteId => {
        state.selectedNotes = [...state.selectedNotes, noteId];
    },

    removeSelectedNote: (noteIdToRemove) => {
        state.selectedNotes = state.selectedNotes.filter(noteId => noteId !== noteIdToRemove);
    }
});

// generates random data for notes
function generateNotes(noOfNotes = 1) {
    const MAX_NO_OF_TAGS = 3;

    const notes = [];
    const icons = ['hash.svg', 'list.svg', 'up.svg', 'down.svg']; // from public/img folder

    for (let i = 0; i < noOfNotes; i++) {
        const noOfTags = Math.floor(Math.random() * MAX_NO_OF_TAGS);

        notes.push({
            id: uid(),
            title: randomExt.string(10, 4),
            body: randomExt.string(20, 6),
            date: randomExt.date(new Date()),
            icon: icons[Math.floor(Math.random() * icons.length)],
            tags: (() => {
                const tags = [];
                for (let i = 0; i < noOfTags; i++) {
                    tags.push(randomExt.string(6, 3));
                }
                return tags;
            })()
        });
    }

    return notes;
}

export { State, Actions };