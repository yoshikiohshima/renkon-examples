export function foo({a, b}) {
    const c = a + 42;
    const d = b + Events.timer(100);
    const {h} = import("../preact.standalone.module.js");
    const html = h("div", {color: "#d22"}, c, d);
    return {html};
}
