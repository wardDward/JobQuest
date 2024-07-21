<?php

use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Employeer\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/job_posts', JobController::class);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/profile', [ProfileController::class, 'store']);
    Route::apiResource('/jobs', JobController::class);
});