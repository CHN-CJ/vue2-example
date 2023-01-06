import MyButton from './Button';
import MyInput from './Input';

const MyUI = {};
const COMPONENTS = [
    MyButton,
    MyInput
];

// 组件注册
MyUI.install = function (Vue, options) {
    //console.log(options);
    /*
    options 是 Vue.use(MyUI，{components:[]})的第二个参数
        {components: Array(2)}
            components: (2) ['MyButton', 'MyInput']
            [[Prototype]]: Object
    */
    if (options && options.components) {
        const components = options.components;

        components.forEach((componentName) => {
            COMPONENTS.forEach((component) => {
                if (componentName === component.name) {
                    // console.log(component);
                    Vue.component(component.name, component);
                }
            })
        });
    } else {
        COMPONENTS.forEach((component) => {
            Vue.component(component.name, component);
        })
    }
}

export default MyUI