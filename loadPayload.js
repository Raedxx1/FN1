function loadPayload(pl) {
    sessionStorage.Queue = pl;
    progress.innerHTML = "جاري تحميل " + pl + "..انتظر !!";
    setTimeout(poc, 1500)
}