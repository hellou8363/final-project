var xhr = new XMLHttpRequest();
var url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/gdTrailInfoOpenAPI'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'LPC6fmOGiM4ZgvKCF769CCNSFNIU4A3eHT6dDOpQzgmOFkQke7WfOISBweq5tamQs92Qv9nAqIJ8YOu4eObrZg%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('searchMtNm') + '=' + encodeURIComponent('가'); /**/
queryParams += '&' + encodeURIComponent('searchArNm') + '=' + encodeURIComponent('강원'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      const xmlParser = new DOMParser();
      const xmlDoc = xmlParser.parseFromString(text, 'text/xml');
      xmlDoc.getElementById()
    }
};

xhr.send('');