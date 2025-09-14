import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../src/styles/app.scss';
// import "./storybook.scss"
// import { addParameters, addDecorator } from "@storybook/vue3";

export const decorators = [
    (story) => {
        const Comp = story();
        return {
            components: { Story: Comp },
            template: "<div class='my-3'><story /></div>",
        };
    },
];


export const parameters = {
    options: {
        showPanel: false,
        storySort: (aArray, bArray) => {
            const a = aArray[1].name;
            const b = bArray[1].name;
            return a > b ? 1 : -1;
        },
    },
};
