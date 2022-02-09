import { defineCustomElement, Component } from 'vue'
import Parent from './components/Parent.ce.vue'
import Child from './components/Child.ce.vue'
import HelloWorld from './components/HelloWorld.ce.vue'


const getStylesRecursively = (
    component: Component & {
      components?: Record<string, Component>;
      styles?: string[];
    }
  ): string[] => {
    // root の SFC から最下層の SFC までの style (CSS文字列) を入れる配列
    const customElementStyles: string[] = [];
  
    // custom elements mode で import された SFC は styles propety を持っている
    if (component.styles) {
      customElementStyles.push(...component.styles);
    }
  
    // 子要素として使用する SFC は components に登録されている
    const childComponents = component.components;
    if (childComponents) {
      Object.keys(childComponents).forEach((name) => {
        const childComponent = childComponents[name];
        // 子要素の style を取得するために再帰的に getStylesRecursively を呼ぶ
        const styles = getStylesRecursively(childComponent);
        customElementStyles.push(...styles);
      });
    }
  
    return customElementStyles;
  };


export default function () {
    Parent.style = getStylesRecursively(Parent)
    const ParentElement = defineCustomElement(Parent)
    const ChildElement = defineCustomElement(Child)
    const HelloWorldElement = defineCustomElement(HelloWorld)

    customElements.define('my-parent', ParentElement)
    customElements.define('my-child', ChildElement)
    customElements.define('my-hello-world', HelloWorldElement)
}