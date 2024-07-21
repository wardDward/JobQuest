<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => [
        'api/*',
        'sanctum/csrf-cookie',
        'seeker/login',
        'seeker/register',
        'seeker/email/verify',
        'seeker/email/verification-notification',
        'employer/login',
        'employer/register',
        'employer/email/verify',
        'employer/email/verification-notification'
    ],

    'allowed_methods' => ['*'],

    'allowed_origins' => [env('FRONTEND_URL'), env('EMPLOYER_FRONTEND_URL')],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];
