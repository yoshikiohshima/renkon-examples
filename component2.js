export function foo(multiplier, a, h) {
    const foo = Events.receiver();
    const m = Behaviors.collect(1, foo, (old) => old + 1);
    const c = multiplier * a + m;
    const html = h("div", {color: "#d22", onclick: evt => {
        Events.send(foo, true)
    }}, c);
    return [html];
}
