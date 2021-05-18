import m from 'mithril';

const Btn = {
    view: ({ attrs: { onclick, className }, children }) =>
        <button
            className={"border rounded-full p-2 hover:bg-gray-200 " + className}
            onclick={onclick}
        >
            {children}
        </button>
};

export default Btn;