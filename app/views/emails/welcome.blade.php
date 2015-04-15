<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
</head>
<body>
<div>
    <p>Dear {{$fname}},</p>

    <p>Thank you for your recent <strong>{{$loantype}}</strong> loan application. Your loan analyst, <strong>{{$analyst}}</strong>, is working to finalize all of the necessary details to create the optimized loan that you requested.</p>

    <p>At Ag Resource Management, we have developed a new way for you to monitor your loan as well as to work with {{$analyst}} in managing that loan. We call our new technology LENDA and your access credentials can be found below. Please Note: On your first login, you will be required to change from the temporary password provided below to a secure password.</p>

    <h3>WELCOME TO AG RESOURCE MANAGEMENT -- <em>providing risk management solutions for agribusiness and farmers</em>.</h3>

    <p>-----</p>

    <p>Browser Address: <strong>http://www.arm-lenda.com</strong></p>
    <p>Mobile Address: <strong>http://m.arm-lenda.com</strong></p>
    <p>Username: <strong>{{$email}}</strong>
    <p>Password: changeme</p>
</div>
</body>
</html>
