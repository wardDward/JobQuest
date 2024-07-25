<?php

use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Employeer\JobController;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/job_posts', JobController::class);

    Route::get('/user', function (Request $request) {
        return new UserResource($request->user());
    });

    Route::post('/profile', [ProfileController::class, 'store']);
    Route::put('/seeker_profle', [ProfileController::class, 'seekerProfile']);
    Route::apiResource('/jobs', JobController::class);



});

Route::get('/storage/app/company_logo/{id}/{path}', function ($id, $path) {
    $filePath = "company_logo/{$id}/{$path}";

    // Check if the file exists
    if (!Storage::disk('local')->exists($filePath)) {
        abort(404, 'File not found');
    }

    // Retrieve the file
    $fileContents = Storage::disk('local')->get($filePath);

    return $fileContents;
    // dd($fileContents);
})->where('path', '.*');



