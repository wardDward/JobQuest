<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/storage/app/company_logo/{id}/{path}', function ($id, $path) {
    // Correct the path format
    $filePath = "company_logo/{$id}/{$path}";

    // Check if the file exists
    if (!Storage::disk('local')->exists($filePath)) {
        abort(404, 'File not found');
    }

    // Retrieve the file
    $fileContents = Storage::disk('local')->get($filePath);

    // Return the file contents or for debugging, use dd
    return $fileContents;
    // dd($fileContents);
})->where('path', '.*');

require __DIR__ . '/auth.php';