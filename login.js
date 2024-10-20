document.addEventListener('DOMContentLoaded',function()
{
    const form=document.getElementById('loginform');
    form.addEventListener('submit',function(e)
    {
        e.preventDefault();
        const a=document.getElementsByClassName('i1')[0].value;
        const b=document.getElementsByClassName('i2')[0].value;
        const c=document.getElementsByClassName('t1')[0].checked;
        const x=document.getElementById('p1');
        const y=document.getElementById('p2');
        const z=document.getElementById('p3');
        const v=document.getElementById('check');
     
        let  t=(/[a-z]/.test(b));
        let s=(/[A-Z]/.test(b));
        let q=(/[@!#$%^&]/.test(b));
        let p=(/[0-9]/.test(b));
        if(!a)
        {

            x.textContent="Please Enter Username ";
        }
        else if(!b)
        {
            x.textContent=" ";
            y.textContent="Please Enter Password";
        }
      
        else if(!t || !p || !q || !s)
        {
            x.textContent=" ";
            y.textContent="Password should be Atleast 1 capital letter,1 Numerical character  and 1 Special Character"
        }
        
        else if(a&&b)
        {
            x.textContent=" ";
            y.textContent=" ";
            z.textContent=" ";
            setTimeout(function(){
                alert("Login successfull...")},100);

            }
else{

}
        
        });

    });
