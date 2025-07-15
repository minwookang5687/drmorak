document.addEventListener('DOMContentLoaded', function() {
    // Create a script element for the external script
    var script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.charset = 'UTF-8';
    script1.src = '//t1.daumcdn.net/kas/static/kp.js';

    // Create a script element for the first inline script
    var script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.textContent = "kakaoPixel('1824399725038815762').pageView();";

    // Create a script element for the second inline script
    var script3 = document.createElement('script');
    script3.type = 'text/javascript';
    script3.textContent = "kakaoPixel('1824399725038815762').purchase('');";

    // Append the scripts to the head element
    document.head.appendChild(script1);
    document.head.appendChild(script2);
    document.head.appendChild(script3);
});