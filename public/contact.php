<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit();
}

// ── CONFIGURATION ──────────────────────────────────────────
$to      = 'info@pastureprimeltd.com';   // email that receives submissions
$from    = 'info@pastureprimeltd.com';   // must match your cPanel email account
// ───────────────────────────────────────────────────────────

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    echo json_encode(['ok' => false, 'error' => 'Invalid data']);
    exit();
}

$fname    = htmlspecialchars(trim($data['fname']    ?? ''));
$lname    = htmlspecialchars(trim($data['lname']    ?? ''));
$email    = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone    = htmlspecialchars(trim($data['phone']    ?? ''));
$interest = htmlspecialchars(trim($data['interest'] ?? ''));
$subject  = htmlspecialchars(trim($data['subject']  ?? 'New Enquiry'));
$message  = htmlspecialchars(trim($data['message']  ?? ''));

if (empty($fname) || empty($message)) {
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit();
}

$mail_subject = "New Enquiry: {$subject} — Pasture Prime Website";

$body = "
You have received a new enquiry from the Pasture Prime website.

------------------------------------------------------------
Name:      {$fname} {$lname}
Email:     {$email}
Phone:     {$phone}
Category:  {$interest}
Subject:   {$subject}
------------------------------------------------------------

Message:
{$message}

------------------------------------------------------------
Sent from: pastureprimeltd.com contact form
";

$headers  = "From: Pasture Prime Website <{$from}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $mail_subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    echo json_encode(['ok' => false, 'error' => 'Mail failed']);
}
