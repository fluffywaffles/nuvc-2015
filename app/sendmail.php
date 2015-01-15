<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

mail('nuvc@nuisepic.com', $name .' ('. $email .') has reached out via the NUVC site\'s contact form', $message, 'From:'.$name.'<'.$email.'>');

mail($email, 'Thanks for contacting NUVC!', "Thanks for reaching out to us. We\'ve received your message and will get back with you as soon as we possibly can. Thanks, \r\n\r\n The NUVC Team", 'From:The NUVC Team <nuvc@nuisepic.com>');

?>