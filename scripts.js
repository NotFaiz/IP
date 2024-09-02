AOS.init();

async function fetchIpInfo() {
    try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;

        const infoResponse = await fetch(`https://ipwhois.app/json/${ipAddress}`);
        const infoData = await infoResponse.json();

        document.getElementById('ip-address').innerText = infoData.ip || 'N/A';
        document.getElementById('city').innerText = infoData.city || 'N/A';
        document.getElementById('region').innerText = infoData.region || 'N/A';
        document.getElementById('country').innerText = infoData.country || 'N/A';
        document.getElementById('continent').innerText = infoData.continent || 'N/A';
        document.getElementById('country-capital').innerText = infoData.country_capital || 'N/A';
        document.getElementById('currency').innerText = infoData.currency || 'N/A';
        document.getElementById('currency-code').innerText = infoData.currency_code || 'N/A';
        document.getElementById('currency-symbol').innerText = infoData.currency_symbol || 'N/A';
        document.getElementById('country-neighbours').innerText = infoData.country_neighbours || 'N/A';
        document.getElementById('timezone').innerText = infoData.timezone || 'N/A';
        document.getElementById('latitude').innerText = infoData.latitude || 'N/A';
        document.getElementById('longitude').innerText = infoData.longitude || 'N/A';
        document.getElementById('isp').innerText = infoData.isp || 'N/A';
        document.getElementById('organization').innerText = infoData.org || 'N/A';
        document.getElementById('asn').innerText = infoData.asn || 'N/A';
        document.getElementById('continent-code').innerText = infoData.continent_code || 'N/A';
        document.getElementById('country-phone').innerText = infoData.country_phone || 'N/A';
        document.getElementById('timezone-name').innerText = infoData.timezone_name || 'N/A';
        document.getElementById('timezone-gmt').innerText = infoData.timezone_gmt || 'N/A';
        document.getElementById('currency-rates').innerText = infoData.currency_rates || 'N/A';
        document.getElementById('currency-plural').innerText = infoData.currency_plural || 'N/A';
        
    } catch (error) {
        document.getElementById('ip-info').innerHTML = 'Unable to fetch IP address information';
        console.error('Error fetching IP address information:', error);
    }
}

fetchIpInfo();
