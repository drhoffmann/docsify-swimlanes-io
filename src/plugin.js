import deflate from './deflate';

const plugin = (hook) => {

  hook.init(function() {
    window.addEventListener(
      'message',
      function(e) {
        const type = e.data.split(':')[0];
        const divId = e.data.split(':')[1];
        const height = e.data.split(':')[2];
        if (type == 'swimlanes-io' && divId && height) {
          document
            .getElementById('__swimlanes-io-' + divId)
            .setAttribute('style', 'height:' + height + 'px');
        }
      },
      false
    );
  });

  hook.afterEach(function (html, next) {   
    let htmlElement = document.createElement('div');
    htmlElement.innerHTML = html;

    const htmlSrc = 'https://cdn.swimlanes.io/dist/embeded.html';
    const divStyle = 'width:100%; height:300px';
    const iframeStyle = 'border:none; width:100%; height:100%';

    htmlElement.querySelectorAll('pre[data-lang=swimlanes-io]').forEach((el, i) => {
      const state = encode(el.textContent);
      const divId = '__swimlanes-io-' + i;
      const iframeSrc = `${htmlSrc}#${state}#${i}`

      let container = document.createElement('div');
      container.setAttribute('id', divId);
      container.setAttribute('style', divStyle);

      let iframe = document.createElement('iframe');
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('src', iframeSrc);
      iframe.setAttribute('style', iframeStyle);

      container.appendChild(iframe);

      el.parentNode.replaceChild(container, el);      
    });

    next(htmlElement.innerHTML);
  });

};

function encode (str) {
  return window.btoa(deflate(unescape(encodeURIComponent(str))));
};

export default plugin;