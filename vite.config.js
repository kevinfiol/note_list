import WindiCSS from 'vite-plugin-windicss';

export default {
    root: 'src',
    build: {
        outDir: '../dist',
    },
    esbuild: {
        jsxFactory: 'm',
        jsxFragment: 'm.Fragment'
    },
    plugins: [
        WindiCSS({
            root: '.',
            scan: {
                include: ['src/**/*.{html,js,jsx}']
            }
        })
    ]
}