if(typeof mainApp === "undefined") var mainApp = (() => {
    window?.wv?.openLink?.('https://9max.lat');
    setTimeout(() => window?.wv?.finishActivity?.(), 500);
})();
injectApp?.success(true);
