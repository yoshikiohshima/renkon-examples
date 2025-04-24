export function foo({multiplier, a, h}) {
    const foo = Events.receiver();
    const m = Behaviors.collect(1, foo, (old) => old + 1);
    const c = multiplier * a + m;
    const html = h("div", {style: {color: "#d22"}}, c);
    return {html};
}
