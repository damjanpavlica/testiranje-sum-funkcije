function sum(x, y) {
    if (typeof x !== "number" || typeof y !== "number")
        return NaN;
    return Number((x + y).toFixed(10));
}
