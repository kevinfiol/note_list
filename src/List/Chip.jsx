import m from 'mithril';

const Chip = {
    view: ({ children }) =>
        <small className="rounded-lg bg-gray-300 py-1 px-2 flex flex-row items-center">
            <img className="w-3 h-3" src="/img/hash.svg" alt="" />
            { children }
        </small>
};

export default Chip;