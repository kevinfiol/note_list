import m from 'mithril';
import Btn from './Btn';

const Title = {
    view: ({ attrs: { sortOrder, reverseSortOrder, addNote } }) =>
        <div className="flex flex-row justify-between items-center p-3">
            <h1 className="text-xl font-medium">
                Notes
            </h1>
            <div className="space-x-2">
                <Btn onclick={reverseSortOrder}>
                    { sortOrder == 'desc'
                        ? <img src="/assets/up.svg" alt="Sort Asc" />
                        : <img src="/assets/down.svg" alt="Sort Desc" />
                    }
                </Btn>
                <Btn
                    className="bg-blue-600 border-blue-600 hover:bg-blue-800"
                    onclick={addNote}
                >
                    <img src="/assets/plus.svg" alt="Add Note" />
                </Btn>
            </div>
        </div>
};

export default Title;