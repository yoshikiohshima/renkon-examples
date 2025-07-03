export function foo({multiplier, a, h}) {
    const foo = Events.receiver();
    const bar = Events.timer(multiplier * 500);
    const m = Behaviors.collect(1, Events.or(foo, bar), (old) => old + 1);
    const c = multiplier * a + m;
    const html = h("div", {onclick: () => Events.send(foo, true), style: {color: "#d22"}}, c);
    return {html};
}

/* globals Events Behaviors */
