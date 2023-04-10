
function check() {

    var fname=document.form1.fullname;
    var hno=document.form1.hno;
    var sname=document.form1.sname;
    var area=document.form1.area;
    var city=document.form1.city;
    var state=document.form1.state;
    var phone=document.form1.phone;
    var email=document.form1.email;
    var pass=document.form1.password;
    var dob=document.form1.dob;
    var gender=document.form1.gender;
    var qual=document.form1.qual;
    var adm=document.form1.adm;
    var conpass=document.form1.conpassword;
    var com=document.form1.com;

    if (fname.value.length<=0)
    {
        alert("enter name");
        fname.focus();
        return false;
    }

    if (hno.value.length<=0)
    {
        alert("enter house no");
        hno.focus();
        return false;
    }

    if (sname.value.length<=0)
    {
        alert("enter street");
        sname.focus();
        return false;
    }

    if (area.value.length<=0)
    {
        alert("enter area");
        area.focus();
        return false;
    }

    if (city.value.length<=0)
    {
        alert("enter city");
        city.focus();
        return false;
    }

    if (state.value.length<=0)
    {
        alert("enter state");
        state.focus();
        return false;
    }

    if (phone.value.length<=0)
    {
        alert("enter phone");
        phone.focus();
        return false;
    }

    if (email.value.length<=0)
    {
        alert("enter email");
        email.focus();
        return false;
    }

    if (pass.value.length<=0)
    {
        alert("enter password");
        pass.focus();
        return false;
    }

    if ((pass.value)!=(conpass.value))
    {
        alert("passwords don't match!");
        conpass.focus();
        return false;
    }
    

    if(adm.value=="na")
    {
        alert("enter your admission city");
        adm.focus();
        return false;
    }

    var check1=false;
    for( var i=qual.length-1;i>=0;i--)
    {
        if(qual[i].checked)
        {
            check1=true;
        }
    }

    if(check1==false)
    {
        alert("qualification required");
        qual.focus();
        return false;
    }

    var check2=false;
    for( var i=gender.length-1;i>=0;i--)
    {
        if(gender[i].checked)
        {
            check2=true;
        }
    }

    if(check2==false)
    {
        alert("gender required");
        gender.focus();
        return false;
    }

    if(dob.value.length==" ")
    {
        alert("date of birth required");
        dob.focus();
        return false;
    }

    if(com.value.length<=0)
    {
        alert("comments required");
        com.focus();
        return false;
    }

    /*function success()
    {
        alert("form validation done successfully!");
    }

    return success();

    else{
        alert("form validation done successfully!");
    }*/

    document.write("<h1>form validation done successfully!<h1>");
}