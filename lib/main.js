if ("performance" in window &&
    window.performance &&
    typeof window.performance.mark === "function" &&
    !window.BOOMR_no_mark) {
    window.performance.mark("boomr:startup");
}