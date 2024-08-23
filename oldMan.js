const input = [
    "FBFFBFFRLL",
    "BFFFFBBRLR",
    "FFFBBBBRLR",
    "FBFFFBFLRL",
    "FFBFBFFRRL",
    "FFBBBBFRRR",
    "FBFFBFBLRR",
    "FFBBFBFRRL",
    "FFFFBBFRRL",
    "BFBBBBBLLL",
    "FFBFBFBLLL",
    "FFBFFFBLLL",
    "FBBBFBFRLL",
    "BBFFFBFRRR",
    "FFFBFBBLLR",
    "FBFBFBFRRR",
    "BBFFBFBRLL",
    "FBFBBBBLRL",
    "FBFFFFFLLL",
    "BFFFFFFRLL",
    "BFFFBFBLRL",
    "BFBBBFBRRL",
    "BFFFBFFRRL",
    "FBFFFFFRRR",
    "FFBBBBBLLR",
    "BFBBFFBLRL",
    "FBBFBBBRLR",
    "BFBFBFFRLL",
    "BFBFBFBRLL",
    "BFFBFBFLLL",
    "FFBBFFBLRL",
    "FBBFFBFLRR",
    "FBBBFBBRRR",
    "BFBFFBFRLR",
    "BFBBBFBLLL",
    "FFBFBBBLRR",
    "BFBFFBFLLL",
    "FBFBFBBLLL",
    "BFBBBFBLRL",
    "FBFBFBFLRL",
    "FFBFFBFRRL",
    "FBBFFBFLLL",
    "BFBBBBBLRL",
    "FBBBBBFRLR",
    "BFFFBBFRLL",
    "FBBBBFFLLR",
    "FBBBBBFRLL",
    "BFBBBFFRLR",
    "BFBBBFBRLL",
    "BFFFBFFLLL",
    "FFFBFBFLRL",
    "BFFBBFFLRL",
    "BBFFFBFRLL",
    "BFBBFFBRLR",
    "BFBFBFBRRL",
    "BBFFFBFRRL",
    "FBBFBBBLRR",
    "FFBFBBBLLL",
    "BFFFBFBRLR",
    "FFBBFBBLLL",
    "FBFBBFBLLL",
    "BFBBFBFLLR",
    "FFBFBBBRRL",
    "FFBFFFFLRL",
    "FFFBBFFLRR",
    "FBBBBBFRRR",
    "FFFFBBBRLL",
    "BFBFBBBRRR",
    "BBFFBFBRRL",
    "FBFBBFFRLR",
    "FBBFFBFRRR",
    "BBFFBFBRRR",
    "FBFBBFBLRR",
    "FBBFFBBLRR",
    "FBBBBFFRLL",
    "BFBFFFBRLR",
    "FBFBBFBRRL",
    "FFBFBBFRRR",
    "FBFBFFFRLL",
    "BFBBFFBLLR",
    "FBFFFFBRLR",
    "BFBBBFFRLL",
    "FFBBFFBRLR",
    "FFFBBFBRLL",
    "FBBBBBBLRR",
    "FBFFBBBLRR",
    "BFFFFBFLRL",
    "BBFFFFFLRR",
    "BFFBFFBLLR",
    "FFBBBFFRLL",
    "BFBFBFBRLR",
    "FBBFBFBLRR",
    "FBFBBBFRLR",
    "FBFFBBBRRR",
    "FBBFFBFRLL",
    "FBBBFFFRLR",
    "BFBBBBFLLR",
    "BFFFBFFLLR",
    "FFBFFFBRRR",
    "FBFFFBFLLR",
    "FFFFBBBLLR",
    "BFBFFFBRLL",
    "BFFBBFBLRL",
    "BFFBFBFLLR",
    "FFBFFBFRLR",
    "BFBFFFBRRL",
    "FFBBFBFLLL",
    "BFBBBBBRLR",
    "BFBFBFBLRR",
    "FBFFBFBLLR",
    "FBFBFBBRRL",
    "BFBFBBBLLL",
    "FFBBFBBLRL",
    "FBFFFBFRRL",
    "BFBBFFFLRR",
    "BFBFBBFRRR",
    "FBFFFFBLRL",
    "BBFFBBFRRR",
    "FFBFFBBRLR",
    "FBBFBFBLRL",
    "BFBFFFBRRR",
    "FFFBBBFLRL",
    "BFFBFFBRLL",
    "FBFBFFBLRR",
    "FFBFBBFLLL",
    "FFBBBFFLRL",
    "FFBBFFFRLR",
    "BBFFBFBLRL",
    "FFFFBBFRLR",
    "FFFBFFBLRR",
    "BFFBBBFLLR",
    "BFFFBBBRRL",
    "FBBFBFBRLL",
    "BFFBFFFRRR",
    "BBFFFFFLRL",
    "BBFFFBBRLL",
    "BFFFBBBRRR",
    "BFFFBBBLRL",
    "BBFFBFFRRR",
    "BFFBFFBLRL",
    "FBBBBFBRLR",
    "FFFBFBFRRL",
    "BFFBBBBRRL",
    "FBBBBBFLRR",
    "FBFBBBBLLR",
    "FBBBBFBLRR",
    "FFFBFFBRLL",
    "FFBBBBFLLR",
    "FFBBBBBRRL",
    "FBBFFFFLLL",
    "FBFFBBBRLL",
    "FBFBFFBLLR",
    "FBBBBBFRRL",
    "BFFFBFBLLL",
    "FFFBFFFLRL",
    "FFFFBBFRLL",
    "BFBBFFFRLR",
    "BFFFBBBRLR",
    "FFBBBFBLLR",
    "BFFFBFBRRR",
    "BFFBFBBLRL",
    "FFBFBFBLRR",
    "FBBBBFBRRR",
    "FFBFBFFLLR",
    "BBFFFFFLLR",
    "FBBBFBFRRR",
    "BBFFFFBRRL",
    "FBFBFBBLRL",
    "BFBBBFFLLR",
    "BBFFBBFLRL",
    "BFBFFBBRLR",
    "FBFBBBFRRL",
    "FBBBFFBRLL",
    "BBFFFFBLLR",
    "FFBBFBBLRR",
    "FBBBBBBRLR",
    "FFFFBBBRRL",
    "FBFBBBBRLR",
    "BBFFBFFRRL",
    "FBBBFFBLRL",
    "FFBBBFBLRR",
    "BFBFBBBRLL",
    "FBFFFBBLRL",
    "FBFBBBBRLL",
    "BBFFFBBLLL",
    "BFBBFFBLLL",
    "BFFBBBBRRR",
    "FBFBFFBLLL",
    "FBFBFBFRRL",
    "FBBFFFBLLL",
    "BBFFFBFRLR",
    "FBBBBFFLRR",
    "FBFFFBBRLL",
    "FFBBFBFRRR",
    "FBFFFFFLRR",
    "BFBFFBBLRR",
    "FFBFBFFRRR",
    "BFBFFBBRLL",
    "FBBFFFFRRL",
    "BFFBBFBRLL",
    "BFFFFFBLLR",
    "FBFBBFBLLR",
    "BFFBBFBRLR",
    "BFFBFBFRRR",
    "FFBFBBFRLL",
    "FFFBBBBLRR",
    "BFFFBFBLLR",
    "FBBBBFBLRL",
    "FBFBBFFLRL",
    "FFFBFFFRLL",
    "BFFFFBBRRL",
    "FBBFFFBRRR",
    "FBBFBFFLLR",
    "BFBBBBBRRR",
    "BFFBFBFRLL",
    "FFBFBBFRRL",
    "BFBFBFBLLR",
    "FFBFBBFLLR",
    "FFBFFFFLRR",
    "FBBBFBBRRL",
    "BFFBFBFRLR",
    "BFFBFFBRRL",
    "BFBBBFBRLR",
    "BBFFFFBLRL",
    "FBBBFFBRRL",
    "FBFFFBBRRL",
    "FBBBBBBLLL",
    "FFFBFFBLLL",
    "BFBBFBFRLL",
    "FBFBFFBRLR",
    "FFFFBBBRRR",
    "BBFFFBBRLR",
    "BFBBBBFRLR",
    "FBFFBBFLRR",
    "BFFFBFFRLR",
    "FFFBBBBLLR",
    "FBFFFFBLRR",
    "FBFBFBBRLL",
    "FBFFBBBRLR",
    "BFFFFFFLRR",
    "FBFFFFFRLL",
    "FFBFBFFRLL",
    "FFFBBFFRLR",
    "FBBFBFFRRL",
    "FBBBBBBRRR",
    "BFBFBBBLRL",
    "BBFFFFBRRR",
    "FFBFFBBLRL",
    "FBBBBBBLLR",
    "FFBBFFFLRL",
    "FBBBFBBLRR",
    "FFBBBBBRLR",
    "BFBFFFFLLR",
    "BFFBBBBRLL",
    "BFBFBFFLRL",
    "FBBFFFBLRL",
    "BFBFBBBRRL",
    "BFBFBFBLRL",
    "BFBBFBFLRR",
    "BFFFFBFRLR",
    "BFFFBFBRLL",
    "FBFBFBFLLL",
    "FBFFBFFLRL",
    "BFFFFFFRRL",
    "FBBFBFFRLR",
    "FFBBBFFLLR",
    "FBBBBFFLRL",
    "FBBBFBBRLR",
    "BFBBBFFLRL",
    "FBFFBBBLRL",
    "BFFFFBFRRL",
    "BFFFBFFLRR",
    "FFBFBBFLRL",
    "BFBFFFBLRL",
    "BFFFFFBLLL",
    "FBFFBFBLLL",
    "FBFBBBBRRL",
    "FBBFFBBRLR",
    "BFFFBBFRRL",
    "BFBBFBBRLR",
    "FFFBFBBLRR",
    "FFFBFBFRLR",
    "FBFBFBFRLR",
    "BFBFBBBRLR",
    "BFFFFBBLLL",
    "BFFBBFBRRR",
    "BFFBBBFLLL",
    "FFBBBFFRRL",
    "BFBBBFBLLR",
    "FBBFFBBLLR",
    "FBBFBBFLRL",
    "BFFFFFBRRR",
    "FBBBFBBRLL",
    "FBFBFFBRRR",
    "BFFBBBFRRR",
    "FBBBBBBLRL",
    "FFBBBFFLRR",
    "BFFBBBFRLL",
    "BBFFBBFRLL",
    "FBBFBBFRLR",
    "BFBFBFFRRR",
    "BFBFBBFLRL",
    "BFFFFBFRLL",
    "FFBBFBFLLR",
    "BFFBFBBLRR",
    "FBFFBBBRRL",
    "FBBFBBFRLL",
    "FBFFFBBLLR",
    "FFFBBBBRRR",
    "FFFFBBBLRL",
    "FFBBFFFRRL",
    "BFFBBFFRRL",
    "BFFFBBFLRL",
    "BFFFFBBLRR",
    "BBFFBBBLRR",
    "BFBFFFFLRR",
    "FBFBBBBLLL",
    "BBFFFBBLRR",
    "FFFBFBFLRR",
    "FBBFFFFLRL",
    "FFBBBBFRLL",
    "FBFFBFBLRL",
    "BFBBFBBLLL",
    "FBBFBBFLLL",
    "FFBFFBBRLL",
    "BFBFFFFRLR",
    "FBFFBBFRRR",
    "FFFBBFFRRR",
    "FFFBFFBRLR",
    "FBBBBBFLLL",
    "FBBBFFFLRL",
    "FFBBFFFLRR",
    "FFFBBBBRRL",
    "BFBFBBFRLL",
    "BFBFFBBRRL",
    "FBBFBBFRRL",
    "BFBFBBFLLR",
    "BBFFBBBRRR",
    "BFFFBBFRLR",
    "FFFBBBFRLR",
    "BFFBFFFRLL",
    "BFBFFFFRRL",
    "FFBBFFFLLL",
    "FBFBBBBLRR",
    "FBFBFFFLRR",
    "BBFFBFFLRR",
    "FBBBFBBLRL",
    "BFBFBFBLLL",
    "FBFBFFFLLR",
    "BFFBBFBLRR",
    "FBBFFFBRRL",
    "BFFBBFFRRR",
    "FBBFBBBRRL",
    "BFFFFBBLLR",
    "FFBBBBFLLL",
    "BFFBFFBRRR",
    "BFFFFBFRRR",
    "FFFBBBFRRR",
    "FBFBFFFRLR",
    "FBBBFBFLLR",
    "FFBBFFBRLL",
    "FBFBFFFLLL",
    "BFFBFBFRRL",
    "BFBFFBFRRL",
    "BFBBBBFLLL",
    "FBBBFBFRRL",
    "FFBFBFFLLL",
    "BFBBFFFRRL",
    "FFBBFFBLLR",
    "BFFBBBBRLR",
    "FFBBBBBLRR",
    "BFFBFFFRRL",
    "BFFBFBBRLL",
    "FBBBFBFRLR",
    "FBBFFFFLRR",
    "BFFFBBFLLR",
    "FFFBBFBRRL",
    "FFBBFFBLRR",
    "FBBFFFBRLR",
    "BFBBBBBRLL",
    "BBFFFFFRRL",
    "FFBFFBBRRL",
    "BFBFFBFLLR",
    "FBFBBBFLLL",
    "FBFFFFFRRL",
    "BFFFBFBLRR",
    "FBFFFFBLLR",
    "FBBFBFBRRR",
    "FBBBFFFLLR",
    "BBFFBFBLRR",
    "BBFFFBFLLL",
    "FBFFFBFRLR",
    "BFFFBFFLRL",
    "BBFFBFFLRL",
    "BFFFFFFLLR",
    "BBFFBBBLLL",
    "FFBFBBBLLR",
    "FBBFBBBLRL",
    "BFBBFBBLRR",
    "FFBFBFBLLR",
    "FFBFBFBRRL",
    "BFBBFBBRRL",
    "BFFBFFFLLR",
    "FFBBFFBRRL",
    "BBFFBBBRRL",
    "FFFBBFBRLR",
    "BFBBFBFRRR",
    "BFFFFFFRRR",
    "FBBBFFBLLL",
    "BFBFFFFLLL",
    "BBFFBFBLLR",
    "BFBFBBFRLR",
    "FFBFBBBRRR",
    "BFFFBBFLLL",
    "FBFFBBFRLL",
    "FFBBFBFRLL",
    "BFBFBBBLLR",
    "FBBFBFBLLL",
    "BBFFFFBRLL",
    "BBFFBFBLLL",
    "BFFBFFBLRR",
    "BFFBBFBLLL",
    "FFBFFFBLRR",
    "FBBFFBFRRL",
    "FBBBBFBLLL",
    "FFBFFBBLLR",
    "BFFBBBFLRR",
    "FBFBFFBRLL",
    "FFBFFFBRLL",
    "FFBFFBFLLL",
    "FBFBBFBLRL",
    "FBBFBFFRRR",
    "BFBFBFFLLR",
    "FBBFFFBLLR",
    "BFBBBBFRRR",
    "FBBFBBFRRR",
    "BBFFBFFRLR",
    "FBFBBBFRLL",
    "FBBFBBBLLR",
    "BFFFFFFLRL",
    "BFBFFBBRRR",
    "BFFFBFFRLL",
    "BFBBFBFLRL",
    "FFBFFFFRRR",
    "BFFBBFFRLR",
    "FBBBBBFLLR",
    "FBFBFFBLRL",
    "FFFBBFBLLR",
    "FBBFBFBLLR",
    "FFFBFFBRRR",
    "FBFFFFFRLR",
    "FBFBBFBRLR",
    "FBBBFBFLRR",
    "FBFBBBFLRL",
    "BFFBFFFLRL",
    "FFBBBFFRRR",
    "FFBBBBBLLL",
    "FBFFBBFLLR",
    "FFBFBFFLRR",
    "FFFBBBFLRR",
    "BFBFBBFLLL",
    "BBFFBFFLLR",
    "FFBBFBBRLL",
    "FBBFFBBLLL",
    "FBFFBFBRLL",
    "BFBFBFFLRR",
    "FBBBFFBRLR",
    "FFBFFBFRLL",
    "FFFFBBBLLL",
    "FFBFFBBRRR",
    "FBBBBFBRLL",
    "BFFFFBBRRR",
    "FFBBFFFRLL",
    "FFBFBFBRLL",
    "BBFFFFBLLL",
    "FFBBBFBRRL",
    "BFFFFBBLRL",
    "FBBBFBBLLR",
    "FBBBFBBLLL",
    "FFBFBFBLRL",
    "FBBBBFFRRR",
    "FBBFFFFRLR",
    "FFBFFFBRLR",
    "BFBFBFBRRR",
    "FFFBFBBRLL",
    "FBBBFFBRRR",
    "FBBFBFFRLL",
    "BFFBFBFLRR",
    "BFBBBFFRRL",
    "BFFBBFBLLR",
    "FFBBBFBRLL",
    "FBFBFBBLRR",
    "BFBBFFFLRL",
    "BFBFBBFLRR",
    "BFBBBFFRRR",
    "FBBBFFFRRL",
    "FBFBFBFLLR",
    "FBBFFFFLLR",
    "FFBFBBFRLR",
    "FFFBFBBLRL",
    "BBFFFBBLLR",
    "BFFBBBFRLR",
    "FFFFBBBRLR",
    "BBFFBBFRLR",
    "FBFFFFBRLL",
    "FBFBFFFRRR",
    "FBFFFBBLLL",
    "BFBBBBFRLL",
    "FBFBFFBRRL",
    "FFFBFFFRLR",
    "BFBBFBFRRL",
    "FBFFBFFLRR",
    "FBFFFBBLRR",
    "FFBFBBBRLR",
    "FBBFBFFLRR",
    "FBFFFBBRRR",
    "FFBFBBBRLL",
    "FFBBBBBRRR",
    "BFFBBFFLLL",
    "BFBBBBBRRL",
    "BBFFBBBRLL",
    "FBFFFFFLRL",
    "BFFBBFFLRR",
    "FBFFBBFLRL",
    "BFBFFBFRRR",
    "FBFBBFBRLL",
    "BFFFBFBRRL",
    "FBBFFBFLLR",
    "BFFFFFFLLL",
    "FBFBFBFRLL",
    "FBBBBFFRRL",
    "BFBFFBBLLR",
    "FBBFBFBRRL",
    "FFFBFFFLLR",
    "FFBBBBBLRL",
    "FFBFFBBLRR",
    "FFFBFBFRRR",
    "BFBBFBBRLL",
    "BFBBBFBLRR",
    "FFBBBBFLRR",
    "FBBBFFBLLR",
    "BBFFBBBLLR",
    "FBFBBFFRRL",
    "FBBBBBFLRL",
    "FFFBBFFRRL",
    "BFFBBBBLRR",
    "FFFFBBBLRR",
    "FFFFBBFLRR",
    "FBFFFBFLLL",
    "FBFBFBBLLR",
    "BFFBBBBLLL",
    "FFBFFFFRLR",
    "BFBBFFBLRR",
    "FFBBFBFLRL",
    "BFBFBFFLLL",
    "BFFBFBBLLR",
    "BFBBFBBLRL",
    "FFBBBBFLRL",
    "FBBBFFFLLL",
    "FFFBFFBRRL",
    "BFFFFBBRLL",
    "BFFFBBBRLL",
    "BFFBFFFLRR",
    "FFBFBFBRRR",
    "BBFFBBFLLR",
    "FFBBFBBLLR",
    "FFBFFBFRRR",
    "FFBBBFFRLR",
    "BFFBBBBLLR",
    "FFFBFFFLRR",
    "FBFFFFFLLR",
    "FBFFBBBLLL",
    "BBFFBBFLLL",
    "FFBBFBFLRR",
    "BFFBFBFLRL",
    "FBFBBBFRRR",
    "BFBBFBBLLR",
    "FBFFFFBRRL",
    "FFFBBFBLRR",
    "BBFFFFBLRR",
    "BFBBBBFRRL",
    "FFBBBFBLLL",
    "BFBBFBFRLR",
    "BFBBFFBRRL",
    "BFBFBFFRRL",
    "FBBFFBBLRL",
    "FFFBFFBLRL",
    "BFFBBFFRLL",
    "FBBBFFFRLL",
    "FBBFBBFLLR",
    "FFBFFFFLLR",
    "FBBBFBFLRL",
    "BFFFBBBLLR",
    "FBFBBBBRRR",
    "FBBFBFBRLR",
    "FFFBFBFLLR",
    "FFFFBBFRRR",
    "FFFBBFFLRL",
    "BFBFFBFRLL",
    "FFFBFFBLLR",
    "FBBFFFBRLL",
    "FFBBBFBRRR",
    "FFBBFBBRLR",
    "BBFFFFFRRR",
    "FFBFFFFRLL",
    "FBBFFBBRRL",
    "BBFFFBFLRR",
    "FBBFFFFRRR",
    "FFBFFFBRRL",
    "BFBBFBFLLL",
    "BFFFFBFLRR",
    "BBFFFFFLLL",
    "FFBBFBBRRL",
    "FFBFBFFLRL",
    "FBFFBBFRRL",
    "BBFFBFBRLR",
    "BBFFBBFLRR",
    "FBFFBFBRRR",
    "FBBFBBFLRR",
    "FBFFFBFRLL",
    "BFBFFFFLRL",
    "FFFBBFBRRR",
    "BFBBBBBLLR",
    "FBBFFBBRRR",
    "FFBBBFFLLL",
    "FBBBBFBLLR",
    "BBFFFFFRLL",
    "FFBBBBFRLR",
    "FBFBFBBRRR",
    "FBFFBFFLLL",
    "FBFFBBBLLR",
    "FBBBBFBRRL",
    "BFBFBFFRLR",
    "FBBFBBBRLL",
    "BFBBFFFRLL",
    "FBBBFBFLLL",
    "FFBFFFFRRL",
    "FBFBBFFRRR",
    "FBFFFFBLLL",
    "FBBBBBBRLL",
    "BFFBFBBRRR",
    "BBFFBBFRRL",
    "FBBFBFFLRL",
    "FBFFFFBRRR",
    "FBBFFFFRLL",
    "FFFBFFFRRR",
    "FBFFBBFLLL",
    "BFFFFBFLLL",
    "BFFFFBFLLR",
    "FFBFFBFLLR",
    "FFBFFBFLRR",
    "BFFBBBBLRL",
    "FFBBFFBLLL",
    "FBBFBBBLLL",
    "FBFBBBFLLR",
    "BFFBBBFLRL",
    "BFBBFFBRLL",
    "FBFFBFFRRR",
    "FFBFFFBLRL",
    "FFFBBBFRRL",
    "FFBFBBFLRR",
    "FFFBBBBLRL",
    "FFFBBFFLLL",
    "FFFBFBBRRR",
    "FBBFBFFLLL",
    "BFFFBBBLLL",
    "BFFBFFFRLR",
    "FFFBBBBLLL",
    "BFFFFFBRRL",
    "FFBBFFFLLR",
    "BFBBFFFRRR",
    "BFBFFBFLRR",
    "FFFBBBFLLR",
    "FBFBBBFLRR",
    "BBFFBBBRLR",
    "FBFBBFFLRR",
    "FFBBBFBLRL",
    "FFFBBBFRLL",
    "BFFBFFBRLR",
    "BBFFFBBRRR",
    "BFBBBBFLRL",
    "BFBBBFBRRR",
    "FBBBBFFLLL",
    "FFFBFBBLLL",
    "BBFFFFFRLR",
    "BBFFBFFLLL",
    "FFBFBBBLRL",
    "FFBBFBFRLR",
    "BFBBBBBLRR",
    "FFBFFFBLLR",
    "FFBFFBFLRL",
    "BFFBFBBRLR",
    "FBFBFFFRRL",
    "FBBBFFFLRR",
    "FFFBBFFLLR",
    "FBBBBFFRLR",
    "FFBBFBBRRR",
    "BFBBFBBRRR",
    "BFBFBBFRRL",
    "BFFBBBFRRL",
    "FFFBFFFLLL",
    "FBBFFBFLRL",
    "FFFBFBBRLR",
    "BFBBFFFLLR",
    "BFBBFFBRRR",
    "FBFFBFBRRL",
    "FFBBBBBRLL",
    "BFFBFFBLLL",
    "BFFFBBFRRR",
    "FBFFFBFRRR",
    "FFBFBFBRLR",
    "FBFBBFFLLR",
    "FBBFBBBRRR",
    "BFBFFFFRRR",
    "FFBFFFFLLL",
    "FBFBBFFRLL",
    "BFBFFBFLRL",
    "BFBBFFFLLL",
    "FBFBBFBRRR",
    "BFBFFFBLLR",
    "BFBFFFBLLL",
    "BBFFFBFLLR",
    "BBFFBFFRLL",
    "FFBBBBFRRL",
    "BBFFFBFLRL",
    "BBFFBBBLRL",
    "BFBFFFBLRR",
    "FFFBFBFRLL",
    "BFBFFBBLLL",
    "BBFFFBBRRL",
    "BFBBBFFLLL",
    "BFFBBFFLLR",
    "FFBFFBBLLL",
    "BFFBBFBRRL",
    "BFFFFFBLRL",
    "BBFFFFBRLR",
    "FBFBBFFLLL",
    "FFBBBFBRLR",
    "FFFBBFBLLL",
    "FBFFFBBRLR",
    "FFBFBFFRLR",
    "BFFFFFBLRR",
    "FFFBBBBRLL",
    "FFBBFFFRRR",
    "BFFFFFBRLR",
    "FBBBFFBLRR",
    "FBFBFBBRLR",
    "FBBFFFBLRR",
    "BFBFFBBLRL",
    "FBFFBFBRLR",
    "FBFBFFFLRL",
    "BFFFFFBRLL",
    "BFBBBBFLRR",
    "BFFBFFFLLL",
    "FBFFBFFRRL",
    "FFFBBFFRLL",
    "BFFFBFFRRR",
    "FBFFBFFLLR",
    "FFFBBBFLLL",
    "FBFFFBFLRR",
    "BFFBFBBLLL",
    "BFFFBBBLRR",
    "FBBBBBBRRL",
    "FBFFBFFRLR",
    "FBBFFBBRLL",
    "FBBBFFFRRR",
    "BFFBFBBRRL",
    "FFBBFFBRRR",
    "BFBBBFFLRR",
    "FFFBFBBRRL",
    "BFBFBBBLRR",
    "FFFBBFBLRL",
    "FBFFBBFRLR",
    "BFFFBBFLRR",
    "BBFFFBBLRL",
    "FBBFFBFRLR",
    "FFFBFBFLLL",
    "FFFBFFFRRL",
    "BBFBFFFLLL",
    "FBFBFBFLRR",
    "BFBFFFFRLL",
    ];




    //"FFFFFBB" =  


let findAllDugSquares = function(data, type = 'highLow'){
    let allDugSquares = []
    let thing
    data.forEach(square => {
        square = square.split('')
        square = [[square[0], square[1], square[2], square[3], square[4], square[5], square[6]], [square[7], square[8], square[9]]]
        // console.log(square);
        let scope = [1, 128]
        let range = [1, 8]
        if (type == 'convert'){
            square[0].forEach(nugget => {
                let midpoint = Math.floor((scope[0] + scope[1]) / 2)
                // console.log('here');
                if (nugget === "F"){
                    scope[1] = midpoint
                    // console.log(scope);
                }
                else {
                    scope[0] = midpoint
                    // console.log(scope);
                }
            })
            square[1].forEach(nugget => {
                let midpoint = Math.floor((range[0] + range[1]) / 2)
                // console.log('here');
                if (nugget === "L"){
                    range[1] = midpoint
                    // console.log(range);
                }
                else {
                    range[0] = midpoint
                    // console.log(range);
                }
            })
            let row = scope[0]
            let col = range[0]
            allDugSquares.push([row, col])
        }
        else{
        square[0].forEach(nugget => {
            let midpoint = Math.floor((scope[0] + scope[1]) / 2)
            // console.log('here');
            if (nugget === "F"){
                scope[1] = midpoint
                // console.log(scope);
            }
            else {
                scope[0] = midpoint
                // console.log(scope);
            }
        })
        square[1].forEach(nugget => {
            let midpoint = Math.floor((range[0] + range[1]) / 2)
            // console.log('here');
            if (nugget === "L"){
                range[1] = midpoint
                // console.log(range);
            }
            else {
                range[0] = midpoint
                // console.log(range);
            }
        })
        let row = scope[0]
        let col = range[0]
        // console.log(row);
        // console.log(col);
        let dugSquare = (row * 8) + col
        allDugSquares.push(dugSquare)}});
    if (type == 'all'){
        console.log('all');
        thing = allDugSquares
    }
    else if (type == 'highLow'){
        console.log('highLow');
        thing = [Math.max(...allDugSquares), Math.min(...allDugSquares)]
    }
    else if (type == 'missing'){
        console.log('missing');
        thing = [allDugSquares, [Math.max(...allDugSquares), Math.min(...allDugSquares)]]
    }
    else if(type == 'convert'){
        console.log('convert');
        thing = allDugSquares
    }
    return thing
}

// let findMissingSquares = function(data){
//     let missingSquaresData = findAllDugSquares(data, 'missing')
//     let missingSquares = []
//     for (let i = missingSquaresData[1][1]; i <= missingSquaresData[1][0]; i++){
//         if (!missingSquaresData[0].includes(i)){
//             missingSquares.push(i)
//         }}
//     console.log(missingSquaresData);
//     return missingSquares
// }




// let findMissingThings = function(data){
//     let missingSquaresData = findAllDugSquares(data, 'missing')
//     let sorted = missingSquaresData[0].sort((a, b) => (a - b))

// }


let convertBackToString = function(data){
    let rata = findAllDugSquares(data, 'convert')
    // console.log(rata);
    let allStrings = []
    rata.forEach(num => {
        let tempString = []
        let going = true
        let trucking = true
        scope = [1, 128]
        range = [1, 8]
        while (going){
            let midpoint = Math.floor((scope[0] + scope[1]) / 2)
            if (num[0] <= midpoint){
                tempString.push('F')
                scope[1] = midpoint
            }
            else if (num[0] >= midpoint){
                tempString.push('B')
                scope[0] = midpoint
            }
            else if (tempString.length == 7){
                going == false
            }
        }
        while (trucking){
            let midpoint = Math.floor((range[0] + range[1]) / 2)
            if (num[1] <= midpoint){
                tempString.push('F')
                range[1] = midpoint
            }
            else if (num[1] >= midpoint){
                tempString.push('B')
                range[0] = midpoint
            }
            else if (tempString.length == 3){
                trucking == false
            }
        }
        console.log(tempString);
        allStrings.push(tempString.join(''))

        console.log(midpoint);
    })
    return allStrings
}



// findAllDugSquares()

console.log(convertBackToString(input))


// findMissingSquares(input)