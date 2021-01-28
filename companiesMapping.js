window.onload = function() {
    var wData = this.Wcompanies;
    wData.forEach(element => {
    var company, website;
    company = element.company;
    website = element.website;
    document.getElementById("world-wide-companies").innerHTML +=
        '<tr><td>' + company + '</td>'+
        '<td>' + website + '</td></tr>'
    });

    var bData = this.Bcompanies;
    bData.forEach(element => {
    var company, website;
    company = element.company;
    website = element.website;
    document.getElementById("brazilian-companies").innerHTML +=
        '<tr><td>' + company + '</td>'+
        '<td>' + website + '</td></tr>'
    });
};
  