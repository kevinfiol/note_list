import m from 'mithril';
import Chip from './Chip';

const Row = {
    view: ({ attrs: { note, isSelected, selectNote, removeSelectedNote } }) =>
        <div
            className="row flex flex-row gap-2 p-3 border-b-1 hover:bg-gray-200"
            style={isSelected ? { borderLeftWidth: '4px', borderColor: 'transparent royalblue' } : ''}
            onclick={ev => {
                if (ev.ctrlKey) {
                    if (isSelected) removeSelectedNote();
                    else selectNote();
                }
            }}
        >
            <div className="row__icon py-1">
                <img src={`/img/${note.icon}`} alt="Note Icon" />
            </div>
            <div className="row__body w-full">
                <div className="row__title text-lg font-medium">
                    { note.title }
                </div>
                <div className="row__text-body">
                    { note.body }
                </div>
                <div className="row__date text-gray-500 text-xs py-1">
                    { note.date.toLocaleDateString('en-US') }
                </div>
                <div className="row__tags flex flex-row gap-1">
                    { note.tags.map(tag =>
                        <Chip>{ tag }</Chip>
                    ) }
                </div>
            </div>
        </div>
};

export default Row;